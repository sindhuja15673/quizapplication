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
    {
      category: 'React',
      questions: [
        {
          question: 'What is React?',
          options: [
            'A JavaScript library for building user interfaces',
            'A framework for building mobile applications',
            'A server-side rendering library',
            'A database management system',
          ],
          correctAnswer: 'A JavaScript library for building user interfaces',
        },
        {
          question: 'What is JSX?',
          options: [
            'A syntax extension for JavaScript',
            'A templating language for React',
            'A CSS preprocessor',
            'A type-checking tool',
          ],
          correctAnswer: 'A syntax extension for JavaScript',
        },
        {
          question: 'Which hook is used for managing state in a functional component?',
          options: ['useEffect', 'useState', 'useContext', 'useReducer'],
          correctAnswer: 'useState',
        },
        {
          question: 'What is the purpose of the useEffect hook?',
          options: [
            'To handle side effects in functional components',
            'To define the initial state of a component',
            'To create context for global state management',
            'To manage form inputs',
          ],
          correctAnswer: 'To handle side effects in functional components',
        },
        {
          question: 'What is a controlled component in React?',
          options: [
            'A component that controls the behavior of other components',
            'A component that manages its own state',
            'A component whose state is controlled by React through props',
            'A component that directly manipulates the DOM',
          ],
          correctAnswer: 'A component whose state is controlled by React through props',
        },
        {
          question: 'What is the Virtual DOM?',
          options: [
            'A real representation of the browser’s DOM',
            'A lightweight copy of the real DOM that React uses for efficient updates',
            'A debugging tool for JavaScript applications',
            'A React plugin for optimizing performance',
          ],
          correctAnswer: 'A lightweight copy of the real DOM that React uses for efficient updates',
        },
      ],
    },
    {
      category: 'Redux',
      questions: [
        {
          question: 'What is Redux?',
          options: [
            'A database management system',
            'A library for managing application state',
            'A JavaScript framework for building UI components',
            'A tool for API integration',
          ],
          correctAnswer: 'A library for managing application state',
        },
        {
          question: 'What are the core principles of Redux?',
          options: [
            'Single source of truth, State is read-only, Changes are made with pure functions',
            'Multiple sources of truth, State can be modified directly, Components manage their own state',
            'State is read-only, Only class components can use Redux, No middleware support',
            'Redux is only used for asynchronous data fetching',
          ],
          correctAnswer: 'Single source of truth, State is read-only, Changes are made with pure functions',
        },
        {
          question: 'What is an action in Redux?',
          options: [
            'A function that updates the component state',
            'A JavaScript object that describes changes in the application state',
            'A middleware function for handling API requests',
            'A method used to modify the DOM',
          ],
          correctAnswer: 'A JavaScript object that describes changes in the application state',
        },
        {
          question: 'What is a reducer in Redux?',
          options: [
            'A function that determines how the state changes in response to an action',
            'A component that handles API calls',
            'A middleware for processing side effects',
            'A tool for debugging state changes',
          ],
          correctAnswer: 'A function that determines how the state changes in response to an action',
        },
        {
          question: 'What is the purpose of the Redux store?',
          options: [
            'To store the entire application state in a single place',
            'To store local component states',
            'To manage UI-related events',
            'To handle authentication logic',
          ],
          correctAnswer: 'To store the entire application state in a single place',
        },
        {
          question: 'What is middleware in Redux?',
          options: [
            'A function that allows async logic and side effects in Redux applications',
            'A built-in React feature for managing state',
            'A method for styling components',
            'A tool for debugging JavaScript code',
          ],
          correctAnswer: 'A function that allows async logic and side effects in Redux applications',
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

