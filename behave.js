(function(){
    const quizDB = [
        {
            question: "Q1: Javascript is an/a _______ language?",
            a: "Procedural",
            b: "Object-oriented",
            c: "Markup",
            d: "None of the above",
            ans: "ans2"
        },
        {
            question: "Q2: JavaScript is inserted between...",
            a: "paragragh tags",
            b: "heading tags",
            c: "script tags",
            d: "body tags",
            ans: "ans3"
        },
        {
            question: "Q3: Which of the following keywords is used to define a variable in Javascript?",
            a: "var",
            b: "let",
            c: "const",
            d: "All of the above",
            ans: "ans4"
        },
        {
            question: "Q4: Which of the following is used for multi-line comment in Javascript?",
            a: "/* and */",
            b: `\* and */`,
            c: "//",
            d: "All of the above",
            ans: "ans3"
        },
        {
            question: "Q5: JavaScript can display data in different ways:",
            a: "innerHTML",
            b: "document.write()",
            c: "window.alert()",
            d: "All of the above",
            ans: "ans4"
        },
        {
            question: `Q6: What we would get the output of these variables in the browser? 
            a = 5; b = 6; c = a + b;`,
            a: `Error`,
            b: `null`,
            c: `nothing`,
            d: `undefined`,
            ans: "ans3"
        },
        {
            question: "Q7: What is the full form of CSS?",
            a: "Cascading Style Sheets",
            b: "Cascading Style Sheep",
            c: "Cartoon Style Sheets",
            d: "Cascading Super Sheets",
            ans: "ans1"
        },
        {
            question: "Q8: What is the full form of HTTP?",
            a: "Hypertext Transfer Product",
            b: "Hypertext Test Protocol",
            c: "Hey Transfer Protocol",
            d: "Hypertext Transfer Protocol",
            ans: "ans4"
        },
        {
            question: "Q9: What is the full form of JS?",
            a: "JavaScript",
            b: "JavaSuper",
            c: "JustScript",
            d: "JordenShoes",
            ans: "ans1"
        }
    ];
    
    const question = document.querySelector('.question');
    const option1  = document.querySelector('#option1');
    const option2  = document.querySelector('#option2');
    const option3  = document.querySelector('#option3');
    const option4  = document.querySelector('#option4');
    const submit   = document.querySelector('#submit');

    const answers  = document.querySelectorAll('.answer');

    const showScore = document.querySelector('#showScore');

    let questionCount = 0;
    
    let score = 0;


    // This functiion will load a question 
    const loadQuestion = () => {

        let questionList = quizDB[questionCount];

        question.innerText = questionList.question;

        option1.innerText  = questionList.a;
        option2.innerText  = questionList.b;
        option3.innerText  = questionList.c;
        option4.innerText  = questionList.d;
    }

    loadQuestion();

    //To get the checked answer
    const getCheckAnswer = () => {
        let answer;

        // To get the id of checked answer  
        answers.forEach((currentAnswerElement) => {
            if(currentAnswerElement.checked){
                answer = currentAnswerElement.id;
            }
        });

        return answer;
    }

    // Function to uncheck the element, if it is already checked 
    const deSelectAll = () => {
        answers.forEach((currentAnswerElement) => {
            currentAnswerElement.checked = false;
        });
    }

    submit.addEventListener('click', () => {
        const checkedAnswer = getCheckAnswer();

        // If the checkedAnswer is equal to answer in quizDB then, increase the score by 1 
        if(checkedAnswer === quizDB[questionCount].ans){
            score++;
        };

        // Go to next question
        questionCount++;
      
        if(questionCount < quizDB.length-1) {
           submit.innerHTML = 'NEXT';
        } else {
           submit.innerHTML = 'SUBMIT';
        }

        // To uncheck the element using deSelectAll function
        deSelectAll();

        // If the questionCount is less than total lenght of quizDB then, call the loadQuestion() function
        if(questionCount < quizDB.length){
            loadQuestion();
        } else {
            // Else show the total score 
            showScore.innerHTML = `
                <h3>You scored ${score}/${quizDB.length} </h3>
                <button class="btn" onclick="location.reload()">Play Again</button>
            `;

            // By using classList method, we remove the scoreArea class, which is defined in style.css
            showScore.classList.remove('scoreArea');
        }
    });
})();