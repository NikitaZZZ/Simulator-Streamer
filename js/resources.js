// Монеты
let money = 0;

// Уровень
let level_cpu = 1,
    level_gpu = 1,
    level_ram = 1,
    level_web_cam = 1,
    level_monitor = 1,
    level_microphone = 1;

// Создаем список денег доната
let money_array = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

// Получаем параграф зрителей/фолловеров/доната
let watchers_p = document.getElementById("watchers");
let flw = document.getElementById("followers");
let donat_p = document.getElementById("donat");
let donat_all = document.getElementById("donat-all");

// Создаем перемнные фолловеры, зрители и донат
let followers = 25612;
let watchers = 0;
let donat = 0;

// Ддля доната/фолловеров/зрителей
let true_var = false;

// Цена
let cost_cpu = 100,
    cost_gpu = 100,
    cost_ram = 100,
    cost_monitor = 100,
    cost_web_cam = 100,
    cost_microphone = 100;

// Получаем все ресуры из localStorage
let money_level_ls = localStorage.getItem("money"),
    gpu_level_ls = localStorage.getItem("gpu_level"),
    gpu_cost_ls = localStorage.getItem("gpu_cost"),
    cpu_level_ls = localStorage.getItem("cpu_level"),
    cpu_cost_ls = localStorage.getItem("cpu_cost"),
    ram_level_ls = localStorage.getItem("ram_level"),
    ram_cost_ls = localStorage.getItem("ram_cost"),
    monitor_level_ls = localStorage.getItem("monitor_level"),
    monitor_cost_ls = localStorage.getItem("monitor_cost"),
    web_cam_level_ls = localStorage.getItem("web_cam_level"),
    web_cam_cost_ls = localStorage.getItem("web_cam_cost"),
    microphone_level_ls = localStorage.getItem("microphone_level"),
    microphone_cost_ls = localStorage.getItem("microphone_cost");

// Получаем все элементы level ресурсов
let money_p = document.getElementById("money-pc"),
    gpu_level = document.getElementById("level_2"),
    cpu_level = document.getElementById("level"),
    ram_level = document.getElementById("level_3"),
    monitor_level = document.getElementById("level_4"),
    web_cam_level = document.getElementById("level_5"),
    microphone_level = document.getElementById("level_6");

// Получаем все элементы cost ресурсов
let cpu_cost = document.getElementById("cost"),
    gpu_cost = document.getElementById("cost_2"),
    ram_cost = document.getElementById("cost_3"),
    monitor_cost = document.getElementById("cost_4"),
    web_cam_cost = document.getElementById("cost_5"),
    microphone_cost = document.getElementById("cost_6");

// Преобразование переменных уровней ресурсов с типом String в тип Integer
let level_cpu_int = parseInt(cpu_level_ls);
let level_gpu_int = parseInt(gpu_level_ls);
let level_ram_int = parseInt(ram_level_ls);
let level_monitor_int = parseInt(monitor_level_ls);
let level_web_cam_int = parseInt(web_cam_level_ls);
let level_microphone_int = parseInt(microphone_level_ls);

// Проверака есть ли монеты в localStorage, если нет - создавать перменную и выводить ее.
if (money_level_ls !== null) {
    let money_level_ls_int = parseInt(money_level_ls);

    money = money_level_ls_int;
    money_p.innerHTML = `Монет - ${money}`;
} else {
    money = 400;
    money_p.innerHTML = `Монет - ${money}`;
}

// Функция обновление 
function obnov_res(){
    ram_level_ls = localStorage.getItem("ram_level");
    gpu_level_ls = localStorage.getItem("gpu_level");
    cpu_level_ls = localStorage.getItem("cpu_level");

    ram_level.innerHTML = `Ур. - ${ram_level_ls }`;
    cpu_level.innerHTML = `Ур. - ${gpu_level_ls}`;
    gpu_level.innerHTML = `Ур. - ${cpu_level_ls}`;
}

// Проверка есть ли ресурсы в localStorage, если нет - Ур. 1, Цена - 100м

// Процессор
if (cpu_level_ls !== null) {
    cpu_level.innerHTML = `Уровень ${level_cpu_int}`;
    cpu_cost.innerHTML = ` ${cpu_cost_ls}м`;
} else {
    cpu_level.innerHTML = `Уровень 1`;
    cpu_cost.innerHTML = ` ${cost_cpu}м`;
}

// Видеокарта
if (gpu_level_ls !== null) {
    gpu_level.innerHTML = `Уровень ${level_gpu_int}`;
    gpu_cost.innerHTML = ` ${gpu_cost_ls}м`;
} else if (gpu_level_ls === null) {
    gpu_level.innerHTML = `Уровень 1`;
    gpu_cost.innerHTML = ` ${cost_gpu}м`;
}

// Оперативная память
if (ram_level_ls !== null) {
    ram_level.innerHTML = `Уровень ${level_ram_int}`;
    ram_cost.innerHTML = ` - ${ram_cost_ls}м`;
} else {
    ram_level.innerHTML = `Уровень 1`;
    ram_cost.innerHTML = ` ${cost_ram}м`;
}

// Монитор
if (monitor_level_ls !== null) {
    monitor_level.innerHTML = `Уровень ${level_monitor_int}`;
    monitor_cost.innerHTML = ` ${monitor_cost_ls}м`;
} else {
    monitor_level.innerHTML = `Уровень 1`;
    monitor_cost.innerHTML = ` ${cost_monitor}м`;
}

// Веб-камера
if (web_cam_level_ls !== null) {
    web_cam_level.innerHTML = `Уровень ${level_web_cam_int}`;
    web_cam_cost.innerHTML = ` ${web_cam_cost_ls}м`
} else {
    web_cam_level.innerHTML = `Уровень 1`;
    web_cam_cost.innerHTML = ` ${cost_web_cam}м`;
}

// Микрофон
if (microphone_level_ls !== null) {
    microphone_level.innerHTML = `Уровень ${level_microphone_int}`;
    microphone_cost.innerHTML = ` - ${microphone_cost_ls}м`;
} else {
    microphone_level.innerHTML = `Уровень 1`;
    microphone_cost.innerHTML = ` ${cost_microphone}м`;
}

// Повышение уровня каждого ресурса ПК
// Процессор
function cpu_up_level() {
    let cpu_level_ls = localStorage.getItem("cpu_level");
    money_level_ls = localStorage.getItem("money");

    if (money < cost_cpu) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_cpu) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали процессор!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_cpu;
        if (cpu_level_ls === null) {
            level_cpu += 1;
            level_cpu_int = level_cpu;
            localStorage.setItem("cpu_level", level_cpu_int);
            cpu_level.innerHTML = `Ур. - ${level_cpu}`;
        } else {
            level_cpu_int += 1;
            localStorage.setItem("cpu_level", level_cpu_int);
            cpu_level.innerHTML = `Ур. - ${level_cpu_int}`;
        }
        cost_cpu += 150;
        followers_plus += 1;
        watchers_plus += 3;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("cpu_cost", cost_cpu);
        updateMoney();
        cpu_cost.innerHTML = ` - ${cost_cpu}м`;
    }
}

// Видеокарта
function gpu_up_level() {
    let gpu_level_ls = localStorage.getItem("gpu_level");
    let money_level_ls = localStorage.getItem("money");

    if (money < cost_gpu) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_gpu) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали видеокарту!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_gpu;
        if (gpu_level_ls === null) {
            level_gpu += 1;
            level_gpu_int = level_gpu;
            localStorage.setItem("gpu_level", level_gpu_int);
            gpu_level.innerHTML = `Ур. - ${level_gpu}`;
        } else {
            level_gpu_int += 1;
            localStorage.setItem("gpu_level", level_gpu_int);
            gpu_level.innerHTML = `Ур. - ${level_gpu_int}`;
        }
        cost_gpu += 150;
        followers_plus += 1;
        watchers_plus += 3;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("gpu_cost", cost_gpu);
        updateMoney();
        gpu_cost.innerHTML = ` - ${cost_gpu}м`;
    }
}

// Оперативная память
function ram_up_level() {
    ram_level_ls = localStorage.getItem("ram_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_ram) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_ram) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали оперативную память!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_ram;
        cost_ram += 150;
        if (ram_level_ls === null) {
            level_ram += 1;
            level_ram_int = level_ram;
            localStorage.setItem("ram_level", level_ram_int);
            ram_level.innerHTML = `Ур. - ${level_ram}`;
        } else {
            level_ram_int += 1;
            localStorage.setItem("ram_level", level_ram_int);
            level_ram.innerHTML = `Ур. - ${level_ram_int}`;
        }
        followers_plus += 1;
        watchers_plus += 3;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("ram_cost", cost_ram);
        updateMoney();
        ram_cost.innerHTML = ` - ${cost_ram}м`;
    }
}

// Монитор
function monitor_up_level() {
    monitor_level_ls = localStorage.getItem("monitor_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_monitor) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_monitor) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали монитор!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_monitor;
        if (monitor_level_ls === null) {
            level_monitor += 1;
            level_monitor_int = level_monitor;
            localStorage.setItem("monitor_level", level_monitor_int);
            monitor_level.innerHTML = `Ур. - ${level_monitor}`;
        } else {
            level_monitor_int += 1;
            localStorage.setItem("monitor_level", level_monitor_int);
            level_monitor.innerHTML = `Ур. - ${level_monitor_int}`;
        }
        cost_monitor += 150;
        followers_plus += 1;
        watchers_plus += 1;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("monitor_cost", cost_monitor);

        updateMoney();

        monitor_cost.innerHTML = ` - ${cost_monitor}м`;
    }
}

// Веб-камера
function web_cam_up_level() {
    web_cam_level_ls = localStorage.getItem("web_cam_level");
    money_level_ls = localStorage.getItem("money");
    if (money < cost_web_cam) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У Вас не хватает монет!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    } else if (money >= cost_web_cam) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Вы успешно прокачали веб-камеру!',
            showConfirmButton: false,
            timer: 1000
        });

        money -= cost_web_cam;
        if (web_cam_level_ls === null) {
            level_web_cam += 1;
            level_web_cam_int = level_web_cam;
            localStorage.setItem("web_cam_level", level_web_cam);
            web_cam_level.innerHTML = `Ур. - ${level_web_cam}`;
        } else {
            level_web_cam_int += 1;
            localStorage.setItem("web_cam_level", level_web_cam_int);
            web_cam_level.innerHTML = `Ур. - ${level_web_cam_int}`;
        }
        cost_web_cam += 150;
        followers_plus += 3;
        watchers_plus += 3;
        watchers_minus += 3;
        localStorage.setItem("followers_plus_lc", followers_plus);
        localStorage.setItem("watchers_plus_lc", watchers_plus);
        localStorage.setItem("watchers_minus_lc", watchers_minus);
        localStorage.setItem("web_cam_cost", cost_web_cam);
        updateMoney();
        web_cam_cost.innerHTML = ` - ${cost_web_cam}м`;
    }
}

// Микрофон
function microphone_up_level() {
    // Получаем все элементы cost ресурсов
    let cpu_cost = document.getElementById("cost"),
    gpu_cost = document.getElementById("cost_2"),
    ram_cost = document.getElementById("cost_3"),
    monitor_cost = document.getElementById("cost_4"),
    web_cam_cost = document.getElementById("cost_5"),
    microphone_cost = document.getElementById("cost_6");

    microphone_level_ls = localStorage.getItem("microphone_level");
    money_level_ls = localStorage.getItem("money");
    microphone_cost_ls = localStorage.getItem("microphone_cost");
    
    if (microphone_cost_ls === null) { 
        if (money < cost_microphone) {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'У Вас не хватает монет!',
                footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
            })
        } else if (money >= cost_microphone) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Вы успешно прокачали микрофон!',
                showConfirmButton: false,
                timer: 1000
            });
    
            money -= cost_microphone;
            if (microphone_level_ls === null) {
                level_microphone += 1;
                level_microphone_int = level_microphone;
                localStorage.setItem("microphone_level", level_microphone_int);
                microphone_level.innerHTML = `Ур. - ${level_microphone}`;
            } else {
                level_microphone_int += 1;
                localStorage.setItem("microphone_level", level_microphone_int);
                microphone_level.innerHTML = `Ур. - ${level_microphone_int}`;
            }
            
            cost_microphone += 150;
            followers_plus += 1;
            watchers_plus += 3;
            watchers_minus += 3;
            localStorage.setItem("followers_plus_lc", followers_plus);
            localStorage.setItem("watchers_plus_lc", watchers_plus);
            localStorage.setItem("watchers_minus_lc", watchers_minus);
            localStorage.setItem("microphone_cost", cost_microphone);
            updateMoney();
            microphone_cost.innerHTML = ` - ${cost_microphone}м`;
        }
    } else if (microphone_cost_ls !== null) {
        if (money < microphone_cost_ls) {
            Swal.fire({
                icon: 'error',
                title: 'Ошибка!',
                text: 'У Вас не хватает монет!',
                footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
            })
        } else if (money >= cost_microphone) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Вы успешно прокачали микрофон!',
                showConfirmButton: false,
                timer: 1000
            });
    
            money -= cost_microphone;
            if (microphone_level_ls === null) {
                level_microphone += 1;
                level_microphone_int = level_microphone;
                localStorage.setItem("microphone_level", level_microphone_int);
                microphone_level.innerHTML = `Ур. - ${level_microphone}`;
            } else {
                level_microphone_int += 1;
                localStorage.setItem("microphone_level", level_microphone_int);
                microphone_level.innerHTML = `Ур. - ${level_microphone_int}`;
            }
            
            cost_microphone += 150;
            followers_plus += 1;
            watchers_plus += 3;
            watchers_minus += 3;
            localStorage.setItem("followers_plus_lc", followers_plus);
            localStorage.setItem("watchers_plus_lc", watchers_plus);
            localStorage.setItem("watchers_minus_lc", watchers_minus);
            localStorage.setItem("microphone_cost", cost_microphone);
            updateMoney();
            microphone_cost.innerHTML = ` - ${cost_microphone}м`;
        }
    }
}

function cpuInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Процессор',
        html: `
            Увеличивает кол-во прибавление зрителей и фолловеров на стриме. <br />
            <b>Фолловеров: +1</b> <br />
            <b>Зрителей: +2</b> <br />
        `
    });
}

function gpuInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Видеокарта',
        html: `
            Увеличивает кол-во прибавление зрителей и фолловеров на стриме. <br />
            <b>Фолловеров: +1</b> <br />
            <b>Зрителей: +2</b> <br />
        `
    });
}

function ramInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Оперативная память',
        html: `
            Увеличивает кол-во прибавление зрителей и фолловеров на стриме. <br />
            <b>Фолловеров: +1</b> <br />
            <b>Зрителей: +2</b> <br />
        `
    });
}

function monitorInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Монитор',
        html: `
            Увеличивает кол-во прибавление зрителей и фолловеров на стриме. <br />
            <b>Фолловеров: +1</b> <br />
            <b>Зрителей: +1</b> <br />
        `
    });
}

function webCamInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Веб-камера',
        html: `
            Увеличивает кол-во прибавление зрителей и фолловеров на стриме. <br />
            <b>Фолловеров: +3</b> <br />
            <b>Зрителей: +3</b> <br />
        `
    });
}

function microphoneInfo() {
    Swal.fire({
        icon: 'info',
        title: 'Микрофон',
        html: `
            Увеличивает кол-во прибавление зрителей и фолловеров на стриме. <br />
            <b>Фолловеров: +1</b> <br />
            <b>Зрителей: +3</b> <br />
        `
    });
}