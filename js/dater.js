// Сюжет (Второй div)
let script = document.getElementById("title-thoughts");

// Кнопка выполнения задания (Второй div)
let btnTodoTask = document.getElementById("todo-task-btn");

// Кнопка открытия стрима
let btn_stream = document.getElementById("btn-stream");

// Должен ли быть стрим?
let stream_no = false;

// Задания
let task1 = document.getElementById("task1-text");
let task2 = document.getElementById("task2-text");
let task3 = document.getElementById("task3-text");
let task4 = document.getElementById("task4-text");
let task5 = document.getElementById("task5-text");
let task6 = document.getElementById("task6-text");
let task7 = document.getElementById("task7-text");

// Для остановки времени
let check_time = true;

// Для часов
let day_num = 1,
    day = day_num,
    hour = 10,
    minutes = 5;

// Задания
let tasks1 = [
    '10:10 → Позавтракать',
    '11:10 → Серф в инете',
    '12:10 → Обед',
    '13:10 → Уборка и Готовка',
    '15:10 → Ужин и Подготовка',
    '19:30 → Начать Стрим',
    '02:10 → Лечь спать'
];

let tasks2 = [
    '10:10 → Позавтракать',
    '11:10 → Уборка',
    '12:10 → Прогулка',
    '13:10 → Обед',
    '15:10 → Комп+ужин',
    '19:30 → Стрим',
    '02:10 → Лечь спать',
];

let tasks3 = [
    '10:10 → Умыться и позавтракать',
    '11:10 → Компик',
    '12:10 → По магазинам',
    '13:10 → Обед',
    '15:10 → Уборка+комп+ужин',
    '19:30 → Стрим',
    '02:10 → Лечь спать'
];

let tasks4 = [
    '10:10 → Проснуться + позавтракать',
    '11:10 → Уборка + обед',
    '12:10 → Компик',
    '13:10 → Прогулка',
    '15:10 → Ужин',
    '19:30 → Поточный',
    '02:10 → Лечь спать'
];

let tasks5 = [
	'10:10 → Завтрак',
    '11:10 → Комп',
    '12:10 → Уборка',
    '13:10 → Обед',
    '15:10 → Отдых+ужин',
    '19:30 → Стрим',
    '02:10 → Спать'
];

// Сюжеты
let scripts1 = [
    'Оу, наверное уже пора вставать, пойду сделаю завтрак',
    'Пойду в инете посижу, посмотрю что нибудь',
    'Надо бы перекусить чего-то',
    'Ладно, хватит сидеть уже за компьютером, надо убраться и ужин уже готовить',
    'Так, ужин готов, позову Олега, поужинаем, и пойду готовиться к стриму',
    'Окей, ладно, запускаю поточный',
    'Ладно, поскорей лягу в кровать'
];

let scripts2 = [
    'Лан, встаю, надо идти завтракать',
    'Чет как-то грязновато, надо бы убраться',
    'Пойду прогуляюсь с Олегом немного',
    'Надо бы пообедать',
    'Посижу немного за компьютером, потом начну готовить ужин',
    'Ух, вкусный ужин, таакс, че там по поточному',
    'Как же устала… Поскорее в кровать'
];

let scripts3 = [
    'Фуух, надо идти умываться и завтракать',
    'Пойду за компик, в дотку :3',
    'Наверное пора пройтись по магазинам!',
    'Пойдем пообедаем с Олегом',
    'Надо убрать, потом наверное за комп и буду ужин готовить',
    'Так, вкусный был ужин, теперь стрим',
    'Спааааать'
];

let scripts4 = [
    'Ой блин, проспала, надо быстро умыться и завтракать',
    'Надо бы убраться и пообедать',
    'Поиграю наверное я в кс',
    'Пройтись надо бы',
    'Надо ужин готовить уже',
    'Начинаю стрим',
    'Фух, поскорее спать'
];

let scripts5 = [
    'Встаю. Надо идти умываться и завтракать',
    'Пойду поиграю',
    'Уберусь дома пожалуй',
    'Обедааать',
    'Отдохну немного и ужин буду готовить',
    'Стриим',
    'Пойду спать, классный был стрим'
];

// Рандомное число для заданий
let random_number = getRandNumb(1, 5);

// Первый запуск часов
func_time();

// Обновлять часы каждые две секунды
setInterval(func_time, 150);

// Вычитание статистики каждые 15 сек
setInterval(() => {
    if (water === 2 && food === 2 && energy === 2) {
        Swal.fire({
            icon: 'error',
            title: 'Вы проиграли!',
            showCloseButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            text: 'Алина умерла. Вы не должны были этого допустить!',
            footer: '<a href="training.html">Как играть?</a>'
        });

        setTimeout(() => {
            location.reload()
        }, 5000);
    }

    food -= 2;
    water -= 2;

    let food_elem = document.getElementById("food"),
    water_elem = document.getElementById("water"),
    energy_elem = document.getElementById("energy");

    food_elem.innerHTML = `Еда - ${food}%`;
    water_elem.innerHTML = `Вода - ${water}%`;
    energy_elem.innerHTML = `Энергия - ${energy}%`;
}, 20000);

setInterval(() => {
    health -= 1;

    document.getElementById("health").innerHTML = `Здоровье - ${health}%`;
}, 35000)

// Механика часов
function func_time() {
    // Получаем div где будет находиться таймер и вставляем туда время
    let timer_div = document.getElementById("time");
    timer_div.innerHTML = `${hour}:${minutes}`;

    document.getElementById('day').innerHTML = `День ${day}`;

    // Преобразуем минуты и часы типа String в тип Integer
    let minutes_int = parseInt(minutes);
    let hour_int = parseInt(hour);

    // Каждый раз прибавляем к минутам 5
    if (check_time === true) {
        minutes = minutes_int + 5;
    } else { }

    // Если минуты достигают 60-ти, тогда +1 час
    if (minutes === 60) {
        hour = hour_int + 1;
        minutes = 0;
        energy -= 20;
    }

    // Новый день
    if (hour === 23 && minutes === 55) {
        hour = '0' + 0;
        day_num += 1;
        day = day_num;
        
        // Рандомное число
        random_number = getRandNumb(0, 5);

        // Убрать кнопку стрима 
        btn_stream.style.visibility = "hidden"
        stream_no = false;
    }

    // Если на часах меньше 10, добавлять в начале 0
    if (hour_int < 10) {
        hour_int = "0" + hour_int;
    }

    // Если на минутах меньше 10, добавлять в начале 0
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Стрим
    if (stream_no === false){
        if (hour === 19 && minutes === 30) {
            btn_stream.style.visibility = "visible";
        }
    } else {
        btn_stream.style.visibility = "hidden";
    }

    // Проверки (Случайные события)
    if (hour == 12 && minutes == 30){
        // Генераторы цифр
        let randomize_sl_sob = getRandNumb(0, 1);

        if (randomize_sl_sob == 1){
            let randomize_theme = getRandNumb(0, 4);

            if (randomize_theme == 0){
                health -= 50;
                water -= 25;
                energy -= 50;
                reloadStats();
    
                stream_no = true;
    
                task6.innerHTML = ``;

                Swal.fire({
                    icon: "warning",
                    title: 'У вас: ' + theme_1,
                    text: sob_zdr_1,
                    footer: '<a href="random_events.html" target="_blank">Подробнее о случайных событиях вы можете узнать здесь</a>'
                });
            }
    
            if (randomize_theme == 1) {
                cpu = localStorage.getItem("cpu_level");
                gpu = localStorage.getItem("gpu_level");
                ram = localStorage.getItem("ram_level");
    
                let cpu_int = parseInt(cpu);
                let gpu_int = parseInt(gpu);
                let ram_int = parseInt(ram);
    
                if (cpu_int != 1){
                    cpu_int = cpu_int - 1;
                    localStorage.setItem("cpu_level", cpu_int);
                    reloadStats();
                }
    
                if (gpu_int != 1){
                    gpu_int = gpu_int - 1;
                    localStorage.setItem("gpu_level", gpu_int);
                    reloadStats();
                }
                    
                if (ram_int != 1){
                    ram_int = ram_int - 1;
                    localStorage.setItem("ram_level", ram_int);
                    reloadStats();
                }
    
                stream_no = true;
    
                task6.innerHTML = ``;

                Swal.fire({
                    icon: "warning",
                    title: 'У вас: ' + theme_2,
                    text: sob_tech_1,
                    footer: '<a href="random_events.html" target="_blank">Подробнее о случайных событиях вы можете узнать здесь</a>'
                });
            }
    
            if (randomize_theme == 2) {
                stream_no = true;
                task6.innerHTML = ``;

                health -= 70;
                water -= 40;
                reloadStats();
    
                Swal.fire({
                    icon: 'warning',
                    title: 'У вас: ' + theme_3,
                    text: sob_ys_1,
                    footer: '<a href="random_events.html" target="_blank">Подробнее о случайных событиях вы можете узнать здесь</a>'
                });
            }
    
            if (randomize_theme == 3) {
                health -= 40;
                
                reloadStats();
                stream_no = true;

                task6.innerHTML = ``;
    
                Swal.fire({
                    icon: 'warning',
                    title: theme_4,
                    text: sob_ran_1,
                    footer: '<a href="random_events.html" target="_blank">Подробнее о случайных событиях вы можете узнать здесь</a>'
                });
            }
        } else { }
    }

    switch (random_number) {
        case 1:
            if (hour === 10 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts1[0]}`;
                task1.innerHTML = `${tasks1[0]}`;
                task2.innerHTML = `${tasks1[1]}`;
                task3.innerHTML = `${tasks1[2]}`;
                task4.innerHTML = `${tasks1[3]}`;
                task5.innerHTML = `${tasks1[4]}`;
                task6.innerHTML = `${tasks1[5]}`;
                task7.innerHTML = `${tasks1[6]}`;
            } else if (hour === 11 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts1[1]}`;
            } else if (hour === 12 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts1[2]}`;
            } else if (hour === 13 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts1[3]}`;
            } else if (hour === 15 && minutes === 10) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Так, ужин готов, позову Олега, поужинаем и пойду отдохну`;
                } else {
                    script.innerHTML = `${scripts1[4]}`;
                }
            } else if (hour === 19 && minutes === 30) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Ух, вкусный ужин, пойду за компиком посижу`;
                } else {
                    script.innerHTML = `${scripts1[5]}`;
                }
            } else if (hour === 02 && minutes === 10) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду спать`;
                } else {
                    script.innerHTML = `${scripts1[6]}`;
                }
            }
        ; break;
        case 2: 
            if (hour === 10 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts2[0]}`;
                task1.innerHTML = `${tasks2[0]}`;
                task2.innerHTML = `${tasks2[1]}`;
                task3.innerHTML = `${tasks2[2]}`;
                task4.innerHTML = `${tasks2[3]}`;
                task5.innerHTML = `${tasks2[4]}`;
                task6.innerHTML = `${tasks2[5]}`;
                task7.innerHTML = `${tasks2[6]}`;
            } else if (hour === 11 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts2[1]}`;
            } else if (hour === 12 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts2[2]}`;
            } else if (hour === 13 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts2[3]}`;
            } else if (hour === 15 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts2[4]}`;
            } else if (hour === 19 && minutes === 30) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду приберусь, что ли`;
                } else {
                    script.innerHTML = `${scripts2[5]}`;
                }
            } else if (hour === 02 && minutes === 10) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду спать`;
                } else {
                    script.innerHTML = `${scripts2[6]}`;
                }
            }
        ; break;
        case 3:
            if (hour === 10 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts3[0]}`;
                task1.innerHTML = `${tasks3[0]}`;
                task2.innerHTML = `${tasks3[1]}`;
                task3.innerHTML = `${tasks3[2]}`;
                task4.innerHTML = `${tasks3[3]}`;
                task5.innerHTML = `${tasks3[4]}`;
                task6.innerHTML = `${tasks3[5]}`;
                task7.innerHTML = `${tasks3[6]}`;
            } else if (hour === 11 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts3[1]}`;
            } else if (hour === 12 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts3[2]}`;
            } else if (hour === 13 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts3[3]}`;
            } else if (hour === 15 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts3[4]}`;
            } else if (hour === 19 && minutes === 30) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду прогуляюсь немного`;
                } else {
                    script.innerHTML = `${scripts3[5]}`;
                }
            } else if (hour === 02 && minutes === 10) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду спать`;
                } else {
                    script.innerHTML = `${scripts3[6]}`;
                }
            }
        ; break;
        case 4:
            if (hour === 10 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts4[0]}`;
                task1.innerHTML = `${tasks4[0]}`;
                task2.innerHTML = `${tasks4[1]}`;
                task3.innerHTML = `${tasks4[2]}`;
                task4.innerHTML = `${tasks4[3]}`;
                task5.innerHTML = `${tasks4[4]}`;
                task6.innerHTML = `${tasks4[5]}`;
                task7.innerHTML = `${tasks4[6]}`;
            } else if (hour === 11 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts4[1]}`;
            } else if (hour === 12 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts4[2]}`;
            } else if (hour === 13 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts4[3]}`;
            } else if (hour === 15 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts4[4]}`;
            } else if (hour === 19 && minutes === 30) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду прилягу`;
                } else {
                    script.innerHTML = `${scripts4[5]}`;
                }
            } else if (hour === 02 && minutes === 10) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду спать`;
                } else {
                    script.innerHTML = `${scripts4[6]}`;
                }
            }
        ; break;
        case 5:
            if (hour === 10 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts5[0]}`;
                task1.innerHTML = `${tasks5[0]}`;
                task2.innerHTML = `${tasks5[1]}`;
                task3.innerHTML = `${tasks5[2]}`;
                task4.innerHTML = `${tasks5[3]}`;
                task5.innerHTML = `${tasks5[4]}`;
                task6.innerHTML = `${tasks5[5]}`;
                task7.innerHTML = `${tasks5[6]}`;
            } else if (hour === 11 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts5[1]}`;
            } else if (hour === 12 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts5[2]}`;
            } else if (hour === 13 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts5[3]}`;
            } else if (hour === 15 && minutes === 10) {
                check_time = false;
                script.innerHTML = `${scripts5[4]}`;
            } else if (hour === 19 && minutes === 30) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду стримчик посмотрю чей нибудь`;
                } else {
                    script.innerHTML = `${scripts5[5]}`;
                }
            } else if (hour === 02 && minutes === 10) {
                check_time = false;
                if (stream_no === true) {
                    script.innerHTML = `Пойду спать`;
                } else {
                    script.innerHTML = `${scripts5[6]}`;
                }
            }
        ; break;
    }
}