//  Importing express and setting up the app
const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

// Setting up routes for the different pages
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})
// Home route  for the holiday server. Making the server respond by sending the may-the-fourth.html file when the user visits the root URL.
app.get("/may-the-fourth", (req, res) => {
  res.sendFile(__dirname + "/public/may-the-fourth.html");
})

// Lightsaber route  for the holiday server. Making the server respond by sending lightsaber-customizer.html file when the user visits the root URL.
app.get("/lightsaber-customizer", (req, res) => {
  res.sendFile(__dirname + "/public/lightsaber-customizer.html");
});

// Character route  for the holiday server. Making the server respond by sending character-customizer.html file when the user visits the root URL.
app.get("/character-customizer", (req, res) => {
  res.sendFile(__dirname + "/public/character-customizer.html");
});

// Starting the server on port 3000
app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});
