fetch('https://gist.githubusercontent.com/fawadik/18bc6acf80fe492374587af4db310fd7/raw/b377318c79fcb5192acbd351a4cdd183238903f7/questions.json')
    .then(response => response.json())
    .then((response) => {
        console.log(response);        
    });
let easyButton = document.getElementById("easyLevel");
let hardButton = document.getElementById("hardLevel");
let heading = document.getElementById("heading");
let timer = document.getElementById("timer");
class Quiz {
    constructor (name) {
        this.name = name;
    }

    getQuestions () {
        
         return fetch('https://gist.githubusercontent.com/fawadik/18bc6acf80fe492374587af4db310fd7/raw/b377318c79fcb5192acbd351a4cdd183238903f7/questions.json')
            .then(response => response.json());       
    }   
    
    renderEasyQuestions (questionsArray) {
        hardButton.style.display = "none";        
        function timerInSeconds() {
        let seconds = 0; 
        seconds += 1;       
        timer.innerText = "Time in seconds : "+seconds;        
        }        
        let easyQuestions = questionsArray.filter(question => question.difficulty === "easy");        
        console.log(easyQuestions);
        easyQuestions.forEach(question => {

            function addQuiz() {
                var node = document.createElement("LI");               
                node.innerHTML = addText();
                node.innerHTML += addLabel();
                node.innerHTML += addOptions();
                document.querySelector('ul').appendChild(node); 
            }

            function addText() {
                
                return `<p>${question.title} : ${question.content}</p>`;
                          
            }

            function addLabel() {
                
               return `<label for="answer-select">Choose an answer:</label>`;
            
            }

            function addOptions() {
                
                var openSelect = `<select id="answer-select">`
                var closeSelect = `</select">`
                var options = "";
                question.options.forEach(option => {
                    options += `<option data-is-answer="${option.correct}" value="${option.content}">${option.content.replace(/ *\([^)]*\) */g, "")}</option>`
                })                
                return openSelect + options + closeSelect;
            
            }
          
            addQuiz();
              
        })
        setInterval(timerInSeconds(), 1000); 
    
    }
    renderHardQuestions (questionsArray) { 
        easyButton.style.display = "none";   
        let hardQuestions = questionsArray.filter(question => question.difficulty === "hard");        
        hardQuestions.forEach(question => {

            function addQuiz() {
                var node = document.createElement("LI");               
                node.innerHTML = addText();
                node.innerHTML += addLabel();
                node.innerHTML += addOptions();
                document.querySelector('ul').appendChild(node); 
            }

            function addText() {
                
                return `<p>${question.title} : ${question.content}</p>`;
                          
            }

            function addLabel() {
                
               return `<label for="answer-select">Choose an answer:</label>`;
            
            }

            function addOptions() {
                
                var openSelect = `<select id="answer-select">`
                var closeSelect = `</select">`
                var options = "";
                question.options.forEach(option => {
                    options += `<option data-is-answer="${option.correct}" value="${option.content}">${option.content.replace(/ *\([^)]*\) */g, "")}</option>`
                })                
                return openSelect + options + closeSelect;
            
            }
          
            addQuiz();   
        })
        
    }
    
    calculateScore() {
        var options = document.querySelectorAll('[data-is-answer="true"]');

        var score = 0;
        options.forEach(option => {
            score = option.selected ? score + 1 : score
        })
        
        return score;     
    }
}
var quiz = new Quiz('myQuiz');
console.log(quiz)

let easyLevel = document.getElementById("easyLevel");
//document.querySelector(easyLevel).addEventListener("click", difficultyLevelSelector());

function easyDifficultyLevelSelector() {
quiz.getQuestions().then(data => {
    quiz.renderEasyQuestions(data);
    quiz.calculateScore();
})
}
function hardDifficultyLevelSelector() {
    quiz.getQuestions().then(data => {
        quiz.renderHardQuestions(data);
        quiz.calculateScore();
})
}
    function buttonForScore() {
    //document.querySelector('btn').addEventListener('click', function () {
       alert('Your score is ' + quiz.calculateScore());
    //..................................
}
