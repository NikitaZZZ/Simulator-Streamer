/* Чем больше уровень ресурсов - тем больше прибавление/вычитание фолловеров/зрителей/доната */
let followers_plus;
let watchers_plus;
let watchers_minus;

// Получаем параграф монет
let money_p_stream = document.getElementById("stream-money");

// Получаем зрители/фолловеры из localStorage
let followers_plus_lc_str = localStorage.getItem("followers_plus_lc");
let watchers_plus_lc_str = localStorage.getItem("watchers_plus_lc");
let watchers_minus_lc_str = localStorage.getItem("watchers_minus_lc");

// Преобразуем переменные зрители/фолловеры из String в Integer
let followers_plus_lc = parseInt(followers_plus_lc_str);
let watchers_plus_lc = parseInt(watchers_plus_lc_str);
let watchers_minus_lc = parseInt(watchers_minus_lc_str);

//Функция прибавление фолловеров
function followers_plus_check_func() {
    if (followers_plus_lc_str === null 
        && watchers_plus_lc_str === null 
        && watchers_minus_lc_str === null) 
    {
        followers += followers_plus;
        flw.innerHTML = `Фолловеров - ${followers}`;
    } else {
        followers += followers_plus_lc;
        flw.innerHTML = `Фолловеров - ${followers}`;
    }
}

// Функция прибавление зрителей
function watchers_plus_check_func() {
    if (followers_plus_lc_str === null 
        && watchers_plus_lc_str === null 
        && watchers_minus_lc_str === null) 
    {
        watchers += watchers_plus;
        watchers_p.innerHTML = `Зрителей - ${watchers}`;
    }  else {
        watchers += watchers_plus_lc;
        watchers_p.innerHTML = `Зрителей - ${watchers}`;
    }
}

// Функция вычитания зрителей
function watchers_minus_check_func() {
    if (watchers >= 50) {
        if (followers_plus_lc_str === null 
            && watchers_plus_lc_str === null 
            && watchers_minus_lc_str === null) 
        {
            watchers -= watchers_minus;
            watchers_p.innerHTML = `Зрителей - ${watchers_minus}`;
        }  else {
            watchers -= watchers_minus_lc + 5;
            watchers_p.innerHTML = `Зрителей - ${watchers}`;
        }
    } else if (watchers >= 100) {
        if (followers_plus_lc_str === null 
            && watchers_plus_lc_str === null 
            && watchers_minus_lc_str === null) 
        {
            watchers -= watchers_minus;
            watchers_p.innerHTML = `Зрителей - ${watchers}`;
        }  else {
            watchers -= watchers_minus_lc + 10;
            watchers_p.innerHTML = `Зрителей - ${watchers}`;
        }
    } else {
        if (followers_plus_lc_str === null 
            && watchers_plus_lc_str === null 
            && watchers_minus_lc_str === null) 
        {
            watchers -= watchers_minus;
            watchers_p.innerHTML = `Зрителей - ${watchers}`;
        }  else {
            watchers -= watchers_minus_lc;
            watchers_p.innerHTML = `Зрителей - ${watchers}`;
        }
    }
}

// Проверка есть ли переменные для прибавление/вычитания фолловеров/зрителей
if (followers_plus_lc_str === null 
    && watchers_plus_lc_str === null 
    && watchers_minus_lc_str === null) { 
    followers_plus = 1;
    watchers_plus = 8;
    watchers_minus = 3;

    localStorage.setItem("followers_plus_lc", followers_plus);
    localStorage.setItem("watchers_plus_lc", watchers_plus);
    localStorage.setItem("watchers_minus_lc", watchers_minus);
} else { 
    followers_plus = followers_plus_lc;
    watchers_plus = watchers_plus_lc;
    watchers_minus = watchers_minus_lc;
}


// Прибавление фолловеров каждые 10 секунд
setInterval(() => {
    if (true_var === true) {
        followers_plus_check_func();
    } else { }
}, 10000);
       
// Прибавление зрителей каждые 3 секунды
setInterval(() => {
    if (true_var === true) {
        watchers_plus_check_func();
    } else { }
}, 3000);

// Вычитание зрителей каждые 6 секунды
setInterval(() => {
    if (true_var === true) {
        watchers_minus_check_func();
    } else { }
}, 6000);


// Донат каждые 15 секунд
setInterval(() => {
    if (true_var === true) {
        let number = getRandNumb(1, 10);
        let number_int = parseInt(number);
        
        donat = donat + money_array[number_int];
        donat_p.innerHTML = `Задонатили - ${money_array[number_int]} монет`;
        donat_all.innerHTML = `Всего задонатили - ${donat} монет`;
        money += money_array[number_int];

        let moneyAllLc = localStorage.getItem('money-all');
        if (moneyAllLc === null) {
            moneyForLc = money_array[number_int];
        } else {
            moneyForLc = parseInt(moneyAllLc) + money_array[number_int];
        }
    
        localStorage.setItem('money-all', moneyForLc);
        updateStatsStreamer();

        localStorage.setItem("money", money);

        let money_lc = localStorage.getItem("money");
        let money_lc_int = parseInt(money_lc);

        money_p.innerHTML = `Монеты - ${money_lc_int}`;
        money_p_stream.innerHTML = `Монеты - ${money_lc_int}`;
    } else {  }
}, 25000);

let btn_answer1_2 = document.getElementById("btn-answer1-2");
let btn_answer2_2 = document.getElementById("btn-answer2-2");
let btn_answer3_2 = document.getElementById("btn-answer3-2");
let btn_answer4_2 = document.getElementById("btn-answer4-2");
let img_hero_2 = document.getElementById("hero2");

function generation2() {
    let rand_for_heroes_num1 = getRandNumb(0, 5);
    let rand_for_heroes_num2 = getRandNumb(0, 12);
    let rand_for_heroes_num3 = getRandNumb(0, 11);
    let rand_for_heroes_num4 = getRandNumb(0, 15);

    let rand_heroes_num = (getRandNumb(0, 101) + rand_for_heroes_num1);
    let rand_heroes_num2 = (getRandNumb(0, 90) + rand_for_heroes_num2);
    let rand_heroes_num3 = (getRandNumb(0, 99) + rand_for_heroes_num3);
    let rand_heroes_num4 = (getRandNumb(0, 85) + rand_for_heroes_num4);
    let rand_correctAnswer = getRandNumb(0, 5);

    if (rand_correctAnswer === 1) {
        img_src = rand_heroes_num;
    } else if (rand_correctAnswer === 2) {
        img_src = rand_heroes_num2;
    } else if (rand_correctAnswer === 3) {
        img_src = rand_heroes_num3;
    } else if (rand_correctAnswer === 4) {
        img_src = rand_heroes_num4;
    }

    hero_universal_object = {
        imgSrc: array_heroes_images[img_src],
        firstAnswer: array_heroes[rand_heroes_num],
        secondAnswer: array_heroes[rand_heroes_num2],
        thirdAnswer: array_heroes[rand_heroes_num3],
        fourthAnswer: array_heroes[rand_heroes_num4],
        correctAnswer: rand_correctAnswer
    }

    let money_lc = localStorage.getItem("money");

    if (money_lc === null) {
        document.getElementById('stream-money').innerHTML = `Монет - ${money}`;
    } else {
        document.getElementById('stream-money').innerHTML = `Монет - ${money_lc}`;
    }

    checkHeroes2();
}

function checkHeroes2() {
    if (hero_universal_object.firstAnswer === hero_universal_object.secondAnswer) {
        generation2();
    } else if (hero_universal_object.firstAnswer === hero_universal_object.thirdAnswer) {
        generation2();
    } else if (hero_universal_object.firstAnswer === hero_universal_object.fourthAnswer) {
        generation2();
    } else if (hero_universal_object.secondAnswer === hero_universal_object.firstAnswer) {
        generation2();
    } else if (hero_universal_object.secondAnswer === hero_universal_object.thirdAnswer) {
        generation2();
    } else if (hero_universal_object.secondAnswer === hero_universal_object.fourthAnswer) {
        generation2();
    } else if (hero_universal_object.thirdAnswer === hero_universal_object.firstAnswer) {
        generation2();
    } else if (hero_universal_object.thirdAnswer === hero_universal_object.secondAnswer) {
        generation2();
    } else if (hero_universal_object.thirdAnswer === hero_universal_object.fourthAnswer) {
        generation2();
    } else if (hero_universal_object.fourthAnswer === hero_universal_object.firstAnswer) {
        generation2();
    } else if (hero_universal_object.fourthAnswer === hero_universal_object.secondAnswer) {
        generation2();
    } else if (hero_universal_object.fourthAnswer === hero_universal_object.thirdAnswer) {
        generation2();
    } else if (hero_universal_object.firstAnswer === undefined 
        || hero_universal_object.secondAnswer === undefined 
        || hero_universal_object.thirdAnswer === undefined 
        || hero_universal_object.fourthAnswer === undefined) {
            generation2();
    } else {
        img_hero_2.src = hero_universal_object.imgSrc;
        btn_answer1_2.innerHTML = hero_universal_object.firstAnswer;
        btn_answer2_2.innerHTML = hero_universal_object.secondAnswer;
        btn_answer3_2.innerHTML = hero_universal_object.thirdAnswer;
        btn_answer4_2.innerHTML = hero_universal_object.fourthAnswer;
    }
}

function checkHero2(button) {
    if (button === hero_universal_object.correctAnswer) {
        swal.fire({
            title: "Правильно!",
            icon: "success"
        });

        money += 5;

        let moneyAllLc = localStorage.getItem('money-all');
        if (moneyAllLc === null) {
            moneyForLc = money;
        } else {
            moneyForLc = parseInt(moneyAllLc) + 5;
        }

        localStorage.setItem('money-all', moneyForLc);
        updateStatsStreamer();
        
        localStorage.setItem("money", money);

        let money_lc = localStorage.getItem("money");

        document.getElementById('money-shop').innerHTML = `Монет - ${money_lc}`;
        document.getElementById('stream-money').innerHTML = `Монет - ${money_lc}`;
        document.getElementById('money-settings').innerHTML = `Монет - ${money_lc}`;
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money_lc}`;

        generation2();
    } else if (button !== hero_universal_object.correctAnswer) {
        swal.fire({
            title: "Неправильно!",
            icon: "error"
        });

        money -= 2;
        localStorage.setItem("money", money);

        let money_lc = localStorage.getItem("money");

        document.getElementById('money-shop').innerHTML = `Монет - ${money_lc}`;
        document.getElementById('stream-money').innerHTML = `Монет - ${money_lc}`;
        document.getElementById('money-settings').innerHTML = `Монет - ${money_lc}`;
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money_lc}`;
    }
}

setInterval(() => {
    if (hour === 2 && minutes === 25) {
        Swal.fire({
            title: 'Время стрима закончилось',
            icon: 'warning',
            showCancelButton: false,
        })

        $('#modal-stream').modal('hide');
    }
}, 2000)