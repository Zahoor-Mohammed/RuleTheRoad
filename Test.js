const question =[
    {
        question: "If an ambulance or fire service vehicle approaches you from behind with siren on or lights flashing, what must you do?",
        answers: [
            {text:"Crossing for pedestrians and cyclists.", correct:false},
            {text:"Warning for a railroad crossing with barriers.", correct:true},
            {text:"Dead end street.", correct:false},
            {text:"Warning for a railroad crossing without barriers.", correct:false},
        ]
    },
    {
        question: "Near a pedestrian crossing, when the pedestrians are waiting to cross the road, you should.",
        answers: [
            {text:"Sound horn and proceed", correct:false},
            {text:"Slow down, sound horn and pass", correct:false},
            {text:"proceed with high speed", correct:true},
            {text:"Stop the vehicle and wait till the pedestraians cross the road and then proceed", correct:false},
        ]
    },
    {
        question: "On a road designated as one way",
        answers: [
            {text:"Parking is Prohibited", correct:false},
            {text:"Overtaking is prohibited", correct:false},
            {text:"Should not drive in reverse gear.", correct:true},
            {text:"Do Stunts and Racing", correct:false},
        ]
    },
    {
        question: "You can overtake a vehicle in front",
        answers: [
            {text:"Through the right side of that vehicle", correct:true},
            {text:"Through the left side", correct:false},
            {text:"Through the left side, if the road is wide", correct:false},
            {text:"Through Flying", correct:false},
        ]
    },
    {
        question: "In a road without footpath, the pedestrians",
        answers: [
            {text:"Should walk on the left side of the road", correct:false},
            {text:"Should walk on the right side of the road", correct:true},
            {text:"May walk on either side of the road", correct:false},
            {text:"Can walk from center of the road", correct:false},
        ]
    },
    {
        question: "Free passages should be givn to the following types of vehicles",
        answers: [
            {text:"Polic vehicles", correct:false},
            {text:"Ambulance and fire service vehicles", correct:true},
            {text:"Express, super / Express buses", correct:false},
            {text:"No one", correct:false},
        ]
    },
    {
        question: "How can you distinguish a transport vehicle",
        answers: [
            {text:"By looking at the tyre size.", correct:false},
            {text:"By color of the vehicle", correct:false},
            {text:"By looking at the number plate of the vehicle", correct:true},
            {text:"By looking at the sky", correct:false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score =0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;
    
    currentQuestion.answers.forEach(answers =>{
        const buttons = document.createElement("button")
        buttons.innerHTML = answers.text;
        buttons.classList.add('Abtn');
        answerButton.appendChild(buttons);

        if (answers.correct) {
            buttons.dataset.correct = answers.correct;
        }
        buttons.addEventListener("click",selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(buttons =>{
        if(buttons.dataset.correct === 'true'){
            console.log(score);
            buttons.classList.add("correct")
            
            console.log(score);
        }
        buttons.disabled = true;
    })
    nextButton.style.display = "block"
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${question.length}!`
    nextButton.innerHTML = "Play Again!"
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion()
    }
    else{
        showScore()
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})
startQuiz()