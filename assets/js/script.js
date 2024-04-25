const question = document.getElementById('question');
const answers = document.getElementById('answers');
const nextButton = document.getElementById('next-button');

  
let currentQuestionIndex = 0;

const theQuestions = [
    {
        question:"What was the release date for DAMN. ?",
        answers: [
             { text: "April 14th 2017", correct: true},
             { text: "April 15th 2017", correct: false},
             { text: "April 15th 2018", correct: false},
             { text: "April 14th 2018", correct: false},
        ]
    },
    {
        question:"Who is the only other rapper in history to win the prestigious Pulizter Prize for Music?",
        answers: [
            { text: "Jay-Z", correct: false},
            { text: "2pac", correct: false},
            { text: "Drake", correct: false},
            { text: "Nobody else has done it", correct: true},
        ]
    },
    {
        question:"Which song was used as a promotional single for DAMN. but ended up not making the album?",
        answers: [
            { text: "The Heart Part 2", correct: false},
            { text: "The Heart Part 3", correct: false},
            { text: "The Heart Part 4", correct: true},
            { text: "The Heart Part 5", correct: false},
        ]
    },
    {
        question:"On DAMN. which famous Irish rockband featured on the song 'XXX'? ",
        answers: [
            { text: "U2", correct: true},
            { text: "Thin Lizzy", correct: false},
            { text: "The Undertones", correct: false},
            { text: "My Bloody Valentine", correct: false},
        ]
    },
    {
        question:"Which album preceded DAMN.?",
        answers: [
            { text: "To Pimp a Butterfly", correct: false},
            { text: "Good Kid, M.A.A.D City", correct: false},
            { text: "untitled unmastered.", correct: true},
            { text: "Section.80", correct: false},
        ]
    },
    {
        question:"What Record Labels were DAMN. released with?",
        answers: [
            { text: "TDE, Aftermath, Columbia", correct: false},
            { text: "TDE, Aftermath, Interscope", correct: true},
            { text: "TDE, Aftermath, Warner Bros", correct: false},
            { text: "TDE, Aftermath, Deathrow", correct: false},
        ]
    },
    {
        question:"Who is the only female featured artist on DAMN.?",
        answers: [
            { text: "Rihanna", correct: true},
            { text: "Beyonce", correct: false},
            { text: "Taylor Swift", correct: false},
            { text: "Jhene Aiko", correct: false},
        ]
    },
    {
        question:"How many tracks are on the album DAMN. ?",
        answers: [
            { text: "15", correct: false},
            { text: "17", correct: false},
            { text: "18", correct: false},
            { text: "14", correct: true},
        ]
    },
    {
        question:"How many Grammy awards did Kendrick Lamar win in 2018 when DAMN. became eligible for the awards?",
        answers: [
            { text: "3", correct: false},
            { text: "5", correct: true},
            { text: "1", correct: false},
            { text: "2", correct: false},
        ]
    },
    {
        question:"Which song from the DAMN. album won Best Rap Performance?",
        answers: [
            { text: "HUMBLE.", correct: true},
            { text: "LOYALTY.", correct: false},
            { text: "FEAR.", correct: false},
            { text: "DUCKWORTH.", correct: false},
        ]
    }
    
  ];

  nextButton.addEventListener('click', () => {
    if (!theQuestions || theQuestions.length === 0) {
      console.error('No questions available.');
      return;
    }
    
    currentQuestionIndex++;
    setNextQuestion();
  });
  
  startGame();
  
  function startGame() {
    currentQuestionIndex = 0;
    setNextQuestion();
  }
  
  function setNextQuestion() {
    resetState();
    showQuestion(theQuestions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    question.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('answer-btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answers.appendChild(button);
    });
  }
  
  function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
      nextButton.classList.remove('');
    }
  
    // Add feedback for right or wrong answer
    setStatusClass(document.body, correct);
  
    Array.from(answers.children).forEach(button => {
      setStatusClass(button, button.innerText === answer.text ? answer.correct : !answer.correct);
    });
  
    if (currentQuestionIndex === theQuestions.length - 1) {
      nextButton.innerText = 'Restart';
      nextButton.addEventListener('click', startGame);
    } else {
      nextButton.innerText = 'Next';
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answers.firstChild) {
      answers.removeChild(answers.firstChild);
    }
  }