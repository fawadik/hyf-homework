const express = require("express");
//const cors = require("cors")
const app = express();
//app.use(express.json());
//app.use(cors());

//Task 1

app.get("/numbers/add", function(req, res) {
    const first = parseInt(req.query.first);    
    const second = parseInt(req.query.second);
    const sum = first + second;
    res.send("The sum is "+sum.toString());
});

app.get("/numbers/multiply", function(req, res) {
    const first = parseInt(req.query.first);    
    const second = parseInt(req.query.second);
    const sum = first * second;
    res.send("The product is "+sum.toString());
});

app.listen(3000);
console.log("server is running");
