let relationsWithLina = 50;
const dialogs = document.getElementById('dialogs');
const linaRelations = document.getElementsByClassName('relations')[0];
let numberDialog = 1;
let isOpen = false;
let randomNumber = 20000;
let confidenceScale = 1;

if (localStorage.getItem('relationship') !== null) {
    relationsWithLina = parseInt(localStorage.getItem("relationship"));
    console.log('rWL: ', relationsWithLina);
} else {
    updateRelationship();
}

if (localStorage.getItem('confidenceScale') !== null) {
    confidenceScale = parseInt(localStorage.getItem("confidenceScale"));
    console.log('cS: ', confidenceScale);
} else {
    updateRelationship();
}

function isOpenCheck() {
    if (isOpen === false) {
        isOpen = true;
    } else {
        isOpen = false;
    }
}

function infoCofidenceScale() {
    Swal.fire({
        icon: 'info',
        title: `Шкала доверия: ${confidenceScale}`,
    })
}

dialogsAssistantArray = [{
    1: [
        "как дела?",

        "Отлично, ведь я же с тобой разговариваю!",
        "Нормально",
        "Сойдет",
    ],
    2: [
        "что делаешь?",
        
        "Разговариваю с тобой!",
        "Общаюсь кое с кем",
        "Разговариваю",
    ],
    3: [
        "кто тебя создал?",
        
        "Меня создала прекрасная инди-компания LAR!",
        "Меня создали замечательные люди",
        "Да какая разница",
    ],
    4: [
        "как настроение?",

        "Отлично!",
        "Пойдет",
        "Не очень"
    ],

    6: [
        "пока",
        
        "Ну блин, пока :(",
        "Ты уже уходишь?",
        "Эх, а могли ведь поговорить...",
    ],
}]

questionsLina = [{
    1: {
        'answerGood': 'Как дела, солнышнко мое?',
        'answerNeutral': 'Как дела?',
    },

    2: {
        'answerGood': 'Что делаешь, радость моя?',
        'answerNeutral': 'Что делаешь?',
    },

    3: {
        'answerGood': 'Как настроение, огонек?',
        'answerNeutral': 'Как настроение?',
    }
}]

function updateRelationship() {
    linaRelations.innerHTML = `Отношения: ${relationsWithLina} <i class="fas fa-question-circle" onclick="infoCofidenceScale()"></i>`;
    localStorage.setItem('relationship', relationsWithLina);
    localStorage.setItem('confidenceScale', confidenceScale);
    console.log(confidenceScale, relationsWithLina);
}

setTimeout(() => {
    if (health < 50) {
        $('#healthAdvice').toast('show');
    }

    if (food < 50) {
        $('#foodAdvice').toast('show');
    }

    if (water < 50) {
        $('#waterAdvice').toast('show');
    }

    if (energy < 50) {
        $('#energyAdvice').toast('show');
    }
}, 5000);

function randomize() {
    randomNumber = getRandNumb(30000, 60000)
}

setInterval(() => {
    if (isOpen === false) {
        if (confidenceScale === 10) {
            let randNumb = getRandNumb(1, 3);

            document.getElementById('linaMessage').innerText = questionsLina[0][randNumb].answerGood;
            $('#linaMessageDiv').toast('show');

            linaMessage(questionsLina[0][randNumb].answerGood);
        } else if (confidenceScale === 5) {
            document.getElementById('linaMessage').innerText = questionsLina[0][randNumb].answerNeutral;
            $('#linaMessageDiv').toast('show');

            linaMessage(questionsLina[0][randNumb].answerNeutral);
        }
    } else {
        if (confidenceScale === 10) {
            linaMessage(questionsLina[0][randNumb].answerGood);
        } else if (confidenceScale === 5) {
            linaMessage(questionsLina[0][randNumb].answerNeutral);
        }
    }

    randomize();
}, randomNumber);

document.getElementById('inputMessage').addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        checkMessage();
    }
})

function linaMessage(text) {
    dialogs.innerHTML += `
        <div class="lina">${text}</div>    
    `;
}

function userMessage(text) {
    dialogs.innerHTML += `
        <div class="user">${text}</div>    
    `;
}

function checkConfidence() {
    if (relationsWithLina === 100) {
        relationsWithLina = 0;
        confidenceScale++;
        console.log('cs - ', confidenceScale);

        updateRelationship();
    }
}

function checkMessage() {
    let inputMessage = document.getElementById('inputMessage').value;
    userMessage(inputMessage);

    if (inputMessage.toLowerCase() === "как дела?") {
        relationsWithLina += 10;

        checkConfidence();
        updateRelationship();
    } else if (inputMessage.toLowerCase() === "что делаешь?") {
        relationsWithLina += 5;

        checkConfidence();
        updateRelationship();
    } else if (inputMessage.toLowerCase() === "как настроение?") {
        relationsWithLina += 15;

        checkConfidence();
        updateRelationship();
    }

    for (let i = 1; i < Object.keys(dialogsAssistantArray[0]).length; i++) {
        console.log(dialogsAssistantArray[0][i][0] == inputMessage.toLowerCase());

        if (dialogsAssistantArray[0][i][0] === inputMessage.toLowerCase()) {
            if (confidenceScale >= 1 && confidenceScale < 5) {
                linaMessage(dialogsAssistantArray[0][i][3]);
            } else if (confidenceScale >= 5 && confidenceScale < 10) {
                linaMessage(dialogsAssistantArray[0][i][2]);
            } else if (confidenceScale === 10) {
                linaMessage(dialogsAssistantArray[0][i][1]);
            }
        }
    }
}