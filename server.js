const express = require("express");
const app = express();
const connectDB = require("./db");
const model = require("./model");
connectDB();

app.use(express.json({ extended: false }));

app.post("/", async (req, res) => {
  const { name, move, duration, toPay } = req.body;
  try {
    const newMove = new model({
      name: name,
      move: move,
      duration: duration,
      toPay: toPay,
    });
    await newMove.save();
    res.json(newMove);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("SERVER ERROR");
  }
});

app.get("/", async (req, res) => {
  try {
    const moves = await model.find().sort({ date: -1 });

    res.json(moves[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("SERVER ERROR");
  }
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER RUNS AT PORT ${PORT}`);
});
