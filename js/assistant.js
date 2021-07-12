let relationsWithLina = 100;
const dialogs = document.getElementById('dialogs');
const linaRelations = document.getElementsByClassName('relations')[0];

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
        "Пока",
        
        "Ну блин, пока :(",
        "Ты уже уходишь?",
        "Эх, а могли ведь поговорить...",
    ]
}]

function dialogsAssistant(numberDialog1, numberDialog2) {
    textUser = dialogsAssistantArray[0][numberDialog1][0];
    textLina = dialogsAssistantArray[0][numberDialog1][numberDialog2];

    dialogs.innerHTML += `
        <div class="user">${textUser}</div>    
        <div class="lina">${textLina}</div>    
    `;

    checkMsgsForRelations(numberDialog1);
}

function checkMsgsForRelations(numberDialog1) {
    if (numberDialog1 === 3) {
        relationsWithLina -= 20;
        linaRelations.innerHTML = `Отношения: ${relationsWithLina}`;
    }
}

setTimeout(() => {
    if (health < 50) {
        $('#healthAdvice').toast('show');
        console.log('work 1');
    }

    if (food < 50) {
        $('#foodAdvice').toast('show');
        console.log('work 2');
    }

    if (water < 50) {
        $('#waterAdvice').toast('show');
        console.log('work 3');
    }

    if (energy < 50) {
        $('#energyAdvice').toast('show');
        console.log('work 4');
    }
}, 5000);