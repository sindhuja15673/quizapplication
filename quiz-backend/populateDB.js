const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/quizDB', { useNewUrlParser: true, useUnifiedTopology: true });

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

const Quiz = mongoose.model('Quiz', quizSchema);

const quizData = [
  {
    category: 'JavaScript',
    questions: [
      {
        question: 'Inside which HTML element do we put the JavaScript?',
        options: ['<javascript>', '<js>', '<script>', '<scripting>'],
        correctAnswer: '<script>',
      },
      {
        question: 'How do you write "Hello World" in an alert box?',
        options: ['alertBox("Hello World")', 'msg("Hello World")', 'alert("Hello World")', 'msgBox("Hello World")'],
        correctAnswer: 'alert("Hello World")',
      },
      {
        question: 'How to write an IF statement in JavaScript?',
        options: ['if(i==5)', 'if i=5', 'if i==5 then', 'if i=5 then'],
        correctAnswer: 'if(i==5)',
      },
      {
        question: 'What is the correct way to write a JavaScript array?',
        options: [
          'var colors = (1:"red",2:"green", 3:"blue")',
          'var colors = ["red","green","blue"]',
          'var colors = "red","green","blue"',
          'var colors = 1= ("red"),2=("green"),3=("blue")',
        ],
        correctAnswer: 'var colors = ["red","green","blue"]',
      },
      {
        question: 'How do you round the number 7.25, to the nearest integer?',
        options: ['Math.rnd(7.25)', 'round(7.25)', 'rnd(7.25)', 'Math.round(7.25)'],
        correctAnswer: 'Math.round(7.25)',
      },
      {
        question: 'Which event occurs when the user clicks on an HTML element?',
        options: ['onchange', 'onmouseclick', 'onclick', 'onmouseover'],
        correctAnswer: 'onclick',
      },
    ],
  },
  {
    category: 'HTML',
    questions: [
      {
        question: 'Choose the correct HTML element for the largest heading:',
        options: ['<heading>', '<h6>', '<h1>', '<head>'],
        correctAnswer: '<h1>',
      },
      {
        question: 'Choose the correct HTML element to define important text',
        options: ['<b>', '<strong>', '<i>', '<important>'],
        correctAnswer: '<strong>',
      },
      {
        question: 'Which character is used to indicate an end tag?',
        options: ['<', '>', '*', '/'],
        correctAnswer: '/',
      },
      {
        question: 'Which of these elements are all <table> elements?',
        options: ['<table><head><tfoot>', '<table><tr><tt>', '<table><tr><td>', '<table><body><tr>'],
        correctAnswer: '<table><tr><td>',
      },
      {
        question: 'How can you make a numbered list?',
        options: ['<dl>', '<ul>', '<ol>', '<list>'],
        correctAnswer: '<ol>',
      },
      {
        question: 'What is the correct HTML for making a drop-down list?',
        options: ['<list>', '<input type ="list">', '<input type = "dropdown">', '<select>'],
        correctAnswer: '<select>',
      },
    ],
  },
  {
    category: 'CSS',
    questions: [
      {
        question: 'Which HTML attribute is used to define inline styles?',
        options: ['style', 'class', 'font', 'styles'],
        correctAnswer: 'style',
      },
      {
        question: 'Which is the correct CSS syntax?',
        options: ['body{color:black;}', 'body:color=black;', '{body:color=black;}', '{body;color:black;}'],
        correctAnswer: 'body{color:black;}',
      },
      {
        question: 'How do you insert a comment in a CSS file?',
        options: ['//this is a comment', '//this is a comment//', '/* this is a comment */', '`this is a comment'],
        correctAnswer: '/* this is a comment */',
      },
      {
        question: 'How do you select an element with id demo?',
        options: ['demo', '#demo', '.demo', '*demo'],
        correctAnswer: '#demo',
      },
      {
        question: 'How do you select elements with class name test?',
        options: ['test', '#test', '.test', '*test'],
        correctAnswer: '.test',
      },
      {
        question: 'What is the default value of the position property?',
        options: ['fixed', 'absolute', 'static', 'relative'],
        correctAnswer: 'static',
      },
    ],
  },
];

async function seedDatabase() {
    try {
      await Quiz.insertMany(quizData);
      console.log('Data inserted successfully');
    } catch (err) {
      console.error('Error inserting data:', err);
    } finally {
      mongoose.connection.close();
    }
  }
  
  seedDatabase();

