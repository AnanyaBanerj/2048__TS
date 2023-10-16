# 2048

2048 is a popular tile-matching puzzle game. The game is played on a 4x4 grid, and the objective is to combine tiles with the same number to create a tile with the number 2048.





### 

![App Screenshot](https://play-lh.googleusercontent.com/oOoWbtsz8-8aGnysFrDnhbHB1atKwtMUCOvld7U9mJpQuR1naQ0_vZ2maDfAw1R3zQ)




## HTML

- Make file 2048.html in your prefered IDE. 

The basic syntax of HTML should be written.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```

Add the CSS link and the JS link that will be used in the project in the head tag. 

**CSS**
```
<link rel="stylesheet" href="style.css">
```
**JS LINK**
```
<script src="2048.js"></script>
```

In the body tag, use h1 to display the title "2048" at the top of the game interface.

```
<h1>2048</h1>
```
Use hr for a horizontal rule or line.
It is used to visually separate content on the webpage. In this context, it might be used to separate the title from the game board.

```
<hr>
```

In the next line the score is displayed in a h2 tag, span is used so that the value of the score can be updated in JavaScript. 

```
<h2>Score - <span id="score">0</span></h2>
```

- div id="board": This is the main container for the game board. It represents the grid where the game tiles will be placed and moved.

- div class="icon": Inside the game board container, there is a nested div element with the class "icon." This is used to style or position the game tiles within the grid.

- tile class="2": This line represents the initial game tile with a value of 2.
```
 <!-- Game Board Container -->
    <div id="board">
        <!-- Tile Container -->
        <div class="icon">
            <!-- Game Tile (initially with a value of 2) -->
            <tile class="2"></tile>
        </div>
        <!-- More tiles would be added dynamically within this container during gameplay using js -->
    </div>

   ```

## CSS

- Make a CSS file and name it style.css.


Make the text inside the body element of the specified font stack (Arial, Helvetica, or a generic sans-serif font) and center-align the text within the body.

```
body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
```

Set the width of the horizontal rule (hr) to 500px.

```
hr {
    width: 500px;
}
```
Now we create the styling for the board element.
- Sets the width and height of the "board" element to 400 pixels by 400 pixels, making it a square.

- Sets the background color of the "board" element to a light grayish-brown color with the hexadecimal code #cdc1b5.

- Adds a border to the "board" element. It's a solid border with a width of 9 pixels and a color of #bbada0, which is a slightly darker shade of grayish-brown.

- Using the "margin: 0 auto", **CENTERS** the div its container by setting the left and right margins to auto.

- flex-wrap: wrap;: Make the display a flexbox by making the display, flex. Use flex wrap, to wrap onto multiple lines if they exceed the available space horizontally.

```
#board {
    width: 400px;
    height: 400px;

    background-color: #cdc1b5;
    border: 9px solid #bbada0;

    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
```

The next block of code describes the styling for the tiles inside the board.

- Sets the width and height of "tile" elements to 90 pixels, creating a square shape.

- Add a solid border of width 5 pixels and the color - #bbada0.

- Sets the font size to 40 pixels and makes the text inside the "tile" elements bold using font-weight.

- the last 3 lines of code center the child elements both horizontally and vertically within a flex container.

```
.tile {
    width: 90px;
    height: 90px;
    border: 5px solid #bbada0;

    font-size: 40px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

The next set of codes specifies a background color and text color for every tile with a specific value. The colors can be modified according to personal preference but given are the standard ones. 

```
.x2 {
    background-color: #eee4da;
    color: #727371;
}

.x4 {
    background-color: #ece0ca;
    color: #727371;
}

.x8 {
    background-color: #f4b17a;
    color: white;
}

.x16{
    background-color: #f59575;
    color: white;
}

.x32{
    background-color: #f57c5f;
    color: white;
}

.x64{
    background-color: #f65d3b;
    color: white;
}

.x128{
    background-color: #edce71;
    color: white;
}

.x256{
    background-color: #edcc63;
    color: white;
}

.x512{
    background-color: #edc651;
    color: white;
}

.x1024{
    background-color: #eec744;
    color: white;
}

.x2048{
    background-color: #ecc230;
    color: white;
}

.x4096 {
    background-color: #fe3d3d;
    color: white;
}

.x8192 {
    background-color: #ff2020;
    color: white;
}
```
## JS 

Create a file 2048.js, this will allow you to create a dynamic and interactive web page to execute complex actions.

#### Variable Declarations:


```
var board;
var score = 0;
var rows = 4;
var columns = 4;
```


**Window.onload** sets up an event handler that triggers the setGame() function when the web page has fully loaded. The setGame() function will be elaborated later. 
```
window.onload = function() {
    setGame();
}
```
#### setGame() Function:

This function initializes the game by:
- Creates an empty game board represented as a 4x4 grid with all values initially set to 0.
- Creating HTML div elements to visually represent each tile on the game board.
- Adding the tiles to the HTML document within an element with the ID "board."
Calling setTwo() twice to add two "2" tiles to random empty positions on the board.
```
function setGame() {
   

    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
  
    setTwo();
    setTwo();

}
```

**updateTile Function:**
The `updateTile` function is responsible for updating the appearance of a game tile based on its numeric value. Here's a breakdown of what this function does:

- `tile.innerText = "";`: Clears the text content of the tile, ensuring that it's initially empty.

- Clear all the CSS classes applied to the tile using `tile.classList.value = ""; `. Then add the class tile to the tile element. 

- `tile.classList.add("tile");`: Adds the class "tile" to the tile element. This class typically defines the default styling for game tiles.

- `if (num > 0) { ... }`: This conditional block checks if the provided `num` (the numeric value of the tile) is greater than 0. `tile.innerText = num.toString();` is used to update the string representation to `num`

- `if (num <= 4096) { ... }`: This conditional block checks if `num` is less than or equal to 4096.

   - If `num` is less than or equal to 4096, it adds a class in the format "x[num]" to the tile. Otherwise, it adds the class x8192 to the tile, which is the highest possible value. 

```
function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; 
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 4096) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }                
    }
}
```
**Keyboard Event Listener**
Add an event listener to the document for the "keyup" event, which fires when a keyboard key is released. 
Inside the event listener, it checks which arrow key was released using e.code:
- `if (e.code == "ArrowLeft") { ... }:` Release the left arrow key, it calls the slideLeft() function to slide the tiles to the left and merges them, and then calls setTwo() to add a new "2" tile to the board.
The same thing is done for Arrowright, Arrowup, and ArrowDown. 
- After handling the tile movement based on the arrow key press, it updates the score displayed on the web page using `document.getElementById("score").innerText = score;`
```
document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
        setTwo();
    }
    else if (e.code == "ArrowRight") {
        slideRight();
        setTwo();
    }
    else if (e.code == "ArrowUp") {
        slideUp();
        setTwo();

    }
    else if (e.code == "ArrowDown") {
        slideDown();
        setTwo();
    }
    document.getElementById("score").innerText = score;
})
```
Return a new array with all zero values removed from the input array row using the filterZero function. 
``` 
function filterZero(row){
    return row.filter(num => num != 0); 
}
```
**Slide function** 

Make a loop to iterate through each element of the row, then start an if condition to check if any of the adjacent tiles are equal. If its equal it can be merged. 

Inside the if block:

- `row[i] *= 2;`: It doubles the value of the current tile, effectively merging it with the next tile.
- `row[i + 1] = 0;`: It sets the value of the next tile to 0 to mark it as merged.
- `score += row[i];`: It updates the game's score by adding the merged tile's value to the score.
- `while (row.length < columns) { ... }`: This loop ensures that the row has the same length as the number of columns. .

Finally, the modified row is returned from the function, representing the result of sliding and merging in that row.
```

function slide(row) {
    row = filterZero(row); // Step 1: Remove zeros from the row
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            // Step 2: Merge adjacent tiles with the same value
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i]; // Update the game score
        }
    }
    row = filterZero(row); // Step 3: Remove any zeros created during merging
    while (row.length < columns) {
        // Step 4: Ensure the row has the same length as the number of columns
        row.push(0);
    }
    return row; // Return the modified row after sliding and merging
}
```

1. slideLeft functions - 
The `slideLeft` function is responsible for sliding and merging tiles to the left within each row of the game board. 

slideLeft functions - 
- `for (let r = 0; r < rows; r++) { ... }`: This outer loop iterates through each row of the game board, inside the loop, it retrieves the current row from the game board and stores it in the `row` variable.

- `row = slide(row);`: It calls the `slide` function to slide and merge the tiles in the `row`. 

- Another nested loop, `for (let c = 0; c < columns; c++) { ... }`, iterates through each column within the row.

- `let tile = document.getElementById(r.toString() + "-" + c.toString());`: It retrieves the tile element in the HTML corresponding to the current position `(r, c)` on the game board. This is done using the `getElementById` method, where `r` and `c` are converted to strings and combined to form the tile's unique ID.

- Then call the `updateTile` function to visually update the tile on the web page with its new value and styling based on `num`.


```
function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r]; // Get the current row from the game board
        row = slide(row); // Slide and merge the tiles in the row
        board[r] = row; // Update the game board with the modified row
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num); // Update the visual representation of the tiles on the web page
        }
    }
}
```

The exact same thing should be done with the slideRight except using the line `row.reverse();` in the code. It is used to reverse the order of elements in the row array.

2. slideUp function


Here's a step-by-step explanation of what each part of the slideUp function does:

- `for (let c = 0; c < columns; c++) { ... }`: This outer loop iterates through each column of the game board, from left to right.

- `let row = [board[0][c], board[1][c], board[2][c], board[3][c]];`: Inside the loop, it creates an array row representing the current column by selecting the corresponding elements from each row of the game board. 

- `row = slide(row);`: It calls the `slide` function to slide and merge the tiles in the `row`.

- Inside the nested loop, `for (let r = 0; r < rows; r++) { ... }`, it iterates through each row within the column.

- `board[r][c] = row[r];`: After sliding and merging, it updates the game board with the modified column.

- Retrieve the tile element in the HTML corresponding to the current position (r, c) using `let tile = document.getElementById(r.toString() + "-" + c.toString());`
```javascript
function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}
```
The exact same thing should be done with the `slideDown` except using the line `row.reverse();` in the code. It is used to reverse the order of elements in the row array.

**function setTwo()**

The setTwo function is responsible for adding a new "2" tile to a random empty cell on the game board. 

- Check if the tile is empty(has a 0) using a `for` loop. 
- Generate a random row index and a random column index using `let r = Math.floor(Math.random() * rows);` and `let c = Math.floor(Math.random() * columns);.`
- Update the visual representation of the tile to `2x`.

```
function setTwo() {
    if (!hasEmptyTile()) {
        return;
    }
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 2;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = "2";
            tile.classList.add("x2");
            found = true;
        }
    }
}
```
**hasEmptyTile**
Responsible for checking whether there are any empty cells (tiles with a value of 0) left on the game board.
- Count is initialized to 0.
- Use two nested loops to iterate through each cell of the game board, first one for row and another for column.
- If an empty cell is found (i.e., `board[r][c] == 0` is true), the function immediately returns `true`. This means that the game board contains at least one empty cell. Else, it returns `false`, hence the game is over. 
```
function hasEmptyTile() {
    let count = 0; // Initialize a counter to keep track of empty cells
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) { 
                return true; // If an empty cell is found, return true immediately
            }
        }
    }
    return false; // If no empty cell is found after checking the entire board, return false
}
```

This function is essential for ensuring that the game doesn't continue to add tiles when there's no more space available.
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

