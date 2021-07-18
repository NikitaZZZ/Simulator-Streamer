let relationsWithLina = 100;
const dialogs = document.getElementById('dialogs');
const linaRelations = document.getElementsByClassName('relations')[0];
let numberDialog = 1;

dialogsAssistantArray = [{
    1: [
        "Как дела?",

        "Отлично, ведь я же с тобой разговариваю!",
        "Нормально",
        "Сойдет",
    ],
    2: [
        "Что делаешь?",
        
        "Разговариваю с тобой!",
        "Общаюсь кое с кем",
        "Разговариваю",
    ],
    3: [
        "Кто тебя создал?",
        
        "Меня создала прекрасная инди-компания LAR!",
        "Меня создали замечательные люди",
        "Да какая разница",
    ],
    4: [
        "Пока",
        
        "Ну блин, пока :(",
        "Ты уже уходишь?",
        "Эх, а могли ведь поговорить...",
    ],
    5: [
        "Пока",
        
        "Ну блин, пока :(",
        "Ты уже уходишь?",
        "Эх, а могли ведь поговорить...",
    ],


    'bye': [
        "Пока",
        
        "Ну блин, пока :(",
        "Ты уже уходишь?",
        "Эх, а могли ведь поговорить...",
    ],
}]

let btnDialog1 = document.getElementById('btnDialog1');
let btnDialog2 = document.getElementById('btnDialog2');

btnDialog1.onclick = () => { dialogsAssistant(numberDialog, getRandNumb(1, 3)) }
btnDialog2.onclick = () => { dialogsAssistant(numberDialog+1, getRandNumb(1, 3)) }

function dialogsAssistant(numberDialog1, numberDialog2) {
    numberDialog++;

    textUser = dialogsAssistantArray[0][numberDialog1][0];
    textLina = dialogsAssistantArray[0][numberDialog1][numberDialog2];

    dialogs.innerHTML += `
        <div class="user">${textUser}</div>    
        <div class="lina">${textLina}</div>    
    `;

    btnDialog1.innerHTML = dialogsAssistantArray[0][numberDialog][0];
    btnDialog2.innerHTML = dialogsAssistantArray[0][numberDialog+1][0];

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