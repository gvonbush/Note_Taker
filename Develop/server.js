var express = require("express")
var app = express();
var PORT = 3000;
var HTML_route = require("./routes/html_route")
var API_route = require("./routes/api_route")

app.use (express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", HTML_route);
app.use("/api", API_route);
app.listen(PORT,()=>console.log ("listening on port" + PORT));

