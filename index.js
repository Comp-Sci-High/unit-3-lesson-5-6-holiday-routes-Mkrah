const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/may-the-fourth", (req, res) => {
  res.sendFile(__dirname + "/public/may-the-fourth.html");
})

app.get("/lightsaber-customizer", (req, res) => {
  res.sendFile(__dirname + "/public/lightsaber-customizer.html");
});

app.get("/character-customizer", (req, res) => {
  res.sendFile(__dirname + "/public/character-customizer.html");
});

app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});
