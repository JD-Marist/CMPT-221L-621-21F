let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let port = 3000;

app.get("/login", function(req, res) {
res.sendFile(__dirname + '/inex.ejs');
});

app.get("/signup", function(req, res) {
res.sendFile(__dirname + '/inex.ejs');
});

app.post("/login", function(req, res) {
    console.log(req.body.login);
    res.redirect('/')
})

app.post("/signup", function(req, res) {
    console.log(req.body.signup);
    res.redirect('/')
})

app.listen(port, function() {
    console.log("Server running on localhost:3000");
});