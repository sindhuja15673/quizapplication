const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors(
  { origin: 'https://quizapplication-moka.onrender.com' }
));


mongoose.connect('mongodb+srv://ssindhujak69:03EFoSKsh1kMnSm6@cluster0.hbklo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/quizDB');

const quizSchema = new mongoose.Schema({
  category: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

const scoreSchema = new mongoose.Schema({
  username: String,
  category: String,
  score: Number,
});

const Quiz = mongoose.model('Quiz', quizSchema);
const Score = mongoose.model('Score', scoreSchema);


app.get('/quiz/:category', async (req, res) => {
  try {
      const category = req.params.category;
      const quizzes = await Quiz.find({ category });
      if (!quizzes.length) {
          return res.status(404).json({ message: "No quizzes found" });
      }
      res.json(quizzes);
  } catch (error) {
      console.error("Error fetching quiz data:", error);
      res.status(500).json({ message: "Server error" });
  }
});

app.post('/score', async (req, res) => {
  const { username, category, score } = req.body;
  const newScore = new Score({ username, category, score });
  try {
    await newScore.save();
    res.status(201).send('Score submitted');
  } catch (err) {
    res.status(500).send(err);
  }
});


app.get('/scores', async (req, res) => {
  try {
    const scores = await Score.find({}).exec();
    res.json(scores);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






