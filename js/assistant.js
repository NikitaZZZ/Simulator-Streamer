const dialogs = document.getElementById('dialogs');

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
}]

function dialogsAssistant(numberDialog1, numberDialog2) {
    textUser = dialogsAssistantArray[0][numberDialog1][0];
    textLina = dialogsAssistantArray[0][numberDialog1][numberDialog2];
    dialogs.innerHTML += `
        <div class="user">${textUser}</div>
        <div class="lina">${textLina}</div>
    `;
}