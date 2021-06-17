let score = 0
let timer = document.getElementById('timeP')

let questions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ]

document.getElementById('start').addEventListener('click', gameFunction)

function gameFunction() {
    let output = []

    countdown()
}

function countdown() {
    let timeLeft = 60

    let timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timer.textContent = 'Timer: ' + timeLeft
            timeLeft--
            console.log(timeLeft)
        } else {
            clearInterval(timeInterval)
        }
    }, 1000)
}