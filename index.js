const express = require('express')
const name = require("./nav.json")
const app = express()
app.use(express.static('public'))

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render(__dirname + "/views/home.ejs")
})

app.get('/home', (req, res) => {
    res.render(__dirname + "/views/home.ejs", {
        name: name[0].name,
        name1: name[1].name,
        name2: name[2].name,
        name3: name[3].name,
        name4: name[4].name,
    })
})
console.log(name[0].name)
app.get('/team', (req, res) => {
    res.render(__dirname + "/views/team.ejs")
})
app.get('/about', (req, res) => {
    res.render(__dirname + "/views/about.ejs")
})
app.get('/contact', (req, res) => {
    res.render(__dirname + "/views/contact.ejs")
})
app.get('/gallery', (req, res) => {
    res.render(__dirname + "/views/gallery.ejs")
})
const PORT = 1818
app.listen(PORT, () => console.log("Listening on Port", PORT))