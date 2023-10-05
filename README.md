
## Login Page

Install the necesaary packages to use Express, hbs and mongoose(to use mongoDb)
```
npm i express 
npm i hbs
npm i mongoose 
npm i nodemon 
```

* Create a folder, `src`, with files `index.js` and `mongoDb.js`.
* Create another folder for css files, `public`, with files `home.css`, `login.css` and `signup.css`. 
* Make another folder `template` with files `home.hbs`, `login.hbs`, `signup.hbs`.

![Alt text](/relative/path/to/img.jpg?raw=true "Optional Title")


### mongoDb.js

 Import the mongoose library.

```
const mongoose = require("mongoose");

```
*The URL `mongodb://localhost:27017/LoginSignup` specifies the connection details. The `.connect()` function returns a Promise.
 If the connection is successful, it logs "MongoDB connected" to the console. If it fails, it logs the specific error message.

 ```
 mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed");
})
```

The `userSchema` defines two fields: `name` and `password`, both of which are of type `String` and marked as `required`.
```
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
```

Create a Mongoose model named `Collection` using the schema. Export the `Collection` model so that it can be used in other parts of your Node.js application. 

```
const collections = new mongoose.model('Collections',userSchema)

module.exports= collections
```

## index.js
1. Imports and Setup:

```
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collections = require("./mongodb");
```
* Import the necessary modules for your application: 
`express` for creating the web server, `path` for handling file paths, `hbs` for using Handlebars as the view engine, and `collections` for working with your MongoDB database. 

2. Template Path Setup:
```
\const templatePath = path.join(__dirname, '../templates');
```
This line defines the path to your `template files`, which will be used by Express to locate your `HTML` templates.

3. Middleware Setup:


```
app.use(express.json());
```
This middleware is used to parse incoming JSON data in requests.

4. View Engine and Views Path Setup:

 

```
app.set("view engine", "hbs");
app.set("views", templatePath);
```
Configure `Express` to use `Handlebars ("hbs")` as the view engine.

5. Define Routes:
```
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    // Handle user signup and render the "home" view.
});

app.post("/login", (req, res) => {
    // Handle user login and render the "home" view or show an error.
});
```
The application defines routes for "/", "/signup," and "/login." When a user accesses these URLs with HTTP GET or POST requests, the application responds by rendering different views or handling signup and login logic.
Handle Signup (POST /signup):

In the "/signup" POST route, the code receives user data (req.body.name and req.body.password) and inserts it into a MongoDB collection using collections.insertMany(). This route then renders the "home" view.
Handle Login (POST /login):

In the "/login" POST route, the code attempts to find a user by their name in the MongoDB collection using collections.findOne(). If the user is found and the password matches, it renders the "home" view. If not, it sends an error message.

6. Start the Express Application:
```
app.listen(3000, () => {
    console.log("port connected");
});
```
The application listens on port 3000, and a message is logged to the console when the server is started.

