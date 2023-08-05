const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json())

app.use(require("./router/search"));

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})