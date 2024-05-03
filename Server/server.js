const express = require('express');
const mongoose = require('mongoose');
const { isConnected } = require("./config/db.js");
const cors = require("cors");
const routes = require('./routes');
require('dotenv').config(); 
const Mitsport = require("./models/sport.js")

const app = express();


app.use(express.json());
app.use(cors()); 


app.get("/", (req, res) => {
  res.json({"Database Connection" : isConnected() ? "Connected" : "Not Connected"});
});

app.get("/hello", (req, res) => {
  res.send("Hello World!!");
});
app.use("/sport",routes)
app.use(routes);

mongoose.connect(process.env.URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Database connection error:', err)); 

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post("/post", async (req, res) => {
  try {
    const newSport = await Mitsport.create(req.body);
    res.json(newSport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
