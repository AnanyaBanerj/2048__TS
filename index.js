const express = require("express");
const app = express();
const path  = require("path")
const hbs = require("hbs")
const collections = require("./mongodb")




const templatePath = path.join(__dirname, '../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req, res)=>{
    res.render("login")
})
app.get("/signup", (req, res)=>{
    res.render("signup")
})
app.post("/signup", async(req,res)=>
{
    const data = {
        name:req.body.name, 
        password: req.body.password

    }
    await collection.insertMany([data])
    res.render("home")
})

app.post("/login", async(req,res)=>
{
    
    try {
        const check = await collection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.render("home")
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch {

        res.send("wrong details")
        

    }


})



app.listen(3000, ()=>{
    console.log("port connected");
})


// const express = require("express");
// const app = express();
// const path = require("path");
// const hbs = require("hbs");
// const bodyParser = require("body-parser"); // Use bodyParser for JSON parsing
// const collection = require("./mongodb");
// const bcrypt = require("bcrypt"); // For password hashing

// const templatePath = path.join(__dirname, '../templates');

// app.use(bodyParser.json()); // Use bodyParser for JSON parsing
// app.set("view engine", "hbs");
// app.set("views", templatePath);

// app.get("/", (req, res) => {
//   res.render("login");
// });

// app.get("/signup", (req, res) => {
//   res.render("signup");
// });

// app.post("/signup", async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password
//     const data = {
//       name: req.body.name,
//       password: hashedPassword, // Store the hashed password
//     };
//     await collection.insertMany([data]);
//     res.render("home");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("An error occurred during signup.");
//   }
// });

// // Implement the login route here

// app.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });
