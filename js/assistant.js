// TODO: Проверку набранного сообщения
// TODO: добавить рандомные сообщение, которые будет посылать Лина

let relationsWithLina = 50;
const dialogs = document.getElementById('dialogs');
const linaRelations = document.getElementsByClassName('relations')[0];
let numberDialog = 1;
let isOpen = false;
let randomNumber = 20000;
let confidenceScale = 1;

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
        "пока",
        
        "Ну блин, пока :(",
        "Ты уже уходишь?",
        "Эх, а могли ведь поговорить...",
    ],

    5: [
        "пока",
        
        "Ну блин, пока :(",
        "Ты уже уходишь?",
        "Эх, а могли ведь поговорить...",
    ],
}]

// let btnDialog1 = document.getElementById('btnDialog1');
// let btnDialog2 = document.getElementById('btnDialog2');

// btnDialog1.onclick = () => { dialogsAssistant(numberDialog, getRandNumb(1, 3)) }
// btnDialog2.onclick = () => { dialogsAssistant(numberDialog+1, getRandNumb(1, 3)) }

function dialogsAssistant(numberDialog1, numberDialog2) {
    numberDialog++;

    textUser = dialogsAssistantArray[0][numberDialog1][0];
    textLina = dialogsAssistantArray[0][numberDialog1][numberDialog2];

    dialogs.innerHTML += `
        <div class="user">${textUser}</div>    
        <div class="lina">${textLina}</div>    
    `;

    // btnDialog1.innerHTML = dialogsAssistantArray[0][numberDialog][0];
    // btnDialog2.innerHTML = dialogsAssistantArray[0][numberDialog+1][0];

    checkMsgsForRelations(numberDialog1);
}

function checkMsgsForRelations(numberDialog1) {
    if (numberDialog1 === 'bye') {
        relationsWithLina -= 20;
        linaRelations.innerHTML = `Отношения: ${relationsWithLina}`;
    }
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
        if (relationsWithLina >= 70 && confidenceScale === 10) {
            document.getElementById('linaMessage').innerText = `Как дела, солнышко мое?`;
            $('#linaMessageDiv').toast('show');

            linaMessage('Как дела, солнышко мое?');
        }
    } else {
        if (relationsWithLina >= 70 && confidenceScale === 10) {
            linaMessage('Как дела, солнышко мое?');
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

function checkMessage() {
    let inputMessage = document.getElementById('inputMessage').value;
    userMessage(inputMessage);

    for (let i = 1; i < 6; i++) {
        if (dialogsAssistantArray[0][i][0] === inputMessage.toLowerCase()) {
            switch (confidenceScale) {
                case 1: linaMessage(dialogsAssistantArray[0][i][3]);; break;
                case 5: linaMessage(dialogsAssistantArray[0][i][2]);; break;
                case 10: linaMessage(dialogsAssistantArray[0][i][1]);; break;
            }
        }
    }
}