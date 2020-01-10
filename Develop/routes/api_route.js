var router = require("express").Router();
var data = require("../db/db.json");
var fs = require("fs");
var util = require("util")
const readFileAsync = util.promisify(fs.readFile);

router.get("/notes",function(req, res){
    readFileAsync(data, "utf8")
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
    console.log (data)
})

// router.get("*",function(req, res){
//     res.sendFile(path.join(__dirname,"../public/index.html"))
// })

module.exports = router