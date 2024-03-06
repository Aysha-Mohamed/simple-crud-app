const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js")
const app = express();
const productRoute = require("./routes/product.route.js")
//middleware
//we add data as a json only
app.use(express.json())
//in order to add as a url form encoded 
app.use(express.urlencoded({extended:false}));


//routes
app.use("/api/products",productRoute)


app.get("/", function (req, res) {
  res.send("Hello from node api");
});


mongoose
  .connect(
    "mongodb+srv://ayshamohd01:1t9QhKRziTbTIY9z@backenddemodb.j98gp2v.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDemoDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3001, () => {
      console.log("server running on port 3001");
    });
  })
  .catch(() => console.log("Connection Failed"));
