const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require('body-parser');
const mongodb = require('mongodb');
const collections = require("./mongodb");
const mongodbclient = mongodb.MongoClient();
const mongoClient = mongodb.MongoClient;
const databaseUrl = "mongodb://localhost:27017/LoginSignup";
const session = require("express-session");


app.use(session({
    secret: "123",
    resave: false,
    saveUninitialized: false
  }));


app.use(express.static("templates"));




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const templatePath = path.join(__dirname, '../templates');

app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/register", (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password,
    };

    mongoClient.connect(databaseUrl, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            res.render("signup", { errorMessage: "An error occurred" });
            return;
        }

        const db = client.db("LoginSignup");

        // Check if a user with the same name already exists
        db.collection("collections").findOne({ name: data.name }, (err, existingUser) => {
            if (err) {
                client.close();
                res.render("signup", { errorMessage: "An error occurred" });
            } else if (existingUser) {
                client.close();
                res.render("signup", { errorMessage: "User with this name already exists" });
            } else {
                // If the user does not exist, insert the new user
                db.collection("collections").insertOne(data, (err, info) => {
                    client.close();
                    if (err) {
                        res.render("signup", { errorMessage: "An error occurred" });
                    } else {
                        console.log(info);
                        res.redirect('/home');
                    }
                });
            }
        });
    });
});
      
app.post("/login", (req, res) => {
    const { name, password } = req.body;

    // Check if 'name' and 'password' are provided
    if (!name || !password) {
        return res.status(400).send("Name and password are required.");
    }

    mongoClient.connect(databaseUrl, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            return res.status(500).send("Database connection error");
        }
        
        const db = client.db("LoginSignup");

        checkUser(name, password, db, (err, user) => {
            client.close();
            if (err) {
                return res.status(500).send("An error occurred");
            } else if (user) {
                // Here, you should set a session or cookie to authenticate the user
                // Example: req.session.user = user;
                res.render("home");
            } else {
                res.status(401).send("Incorrect credentials");
            }
        });
    });
});
app.get("/login", (req, res) => {
    // Render the login page here
    res.render("login"); // Replace "login" with the actual template name or path
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


// Define the checkUser function to query the MongoDB collection for login checks
function checkUser(name, password, db, callback) {
    db.collection("collections").findOne({ name: name, password: password }, (err, user) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, user);
        }
    });
}

app.get("/home", (req, res) => {
    res.render("home");
});


app.post("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
        } else {
            res.redirect("/login"); // Redirect to the login page or another page after logout
        }
    });
});
// // Implement the login route here

// app.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });
