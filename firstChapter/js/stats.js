// Получение элементов в статистике и создания переменных статистики
let health_elem = document.getElementById("health"),
    food_elem = document.getElementById("food"),
    water_elem = document.getElementById("water"),
    energy_elem = document.getElementById("energy");

let health = 100,
    food = 100,
    water = 100,
    energy = 100;

if (localStorage.getItem('food') === null) {
    health = 100,
    food = 100,
    water = 100,
    energy = 100;

    updateStatsLc();
} else {
    statsLcUpdate();
    reloadStats();
}

// Вывод элементов на сайт
health_elem.innerHTML = `Здоровье - ${health}%`;
food_elem.innerHTML = `Еда - ${food}%`;
water_elem.innerHTML = `Вода - ${water}%`;
energy_elem.innerHTML = `Энергия - ${energy}%`;

// Функция обновления статистики
function reloadStats() {
    let health_elem = document.getElementById("health"),
    food_elem = document.getElementById("food"),
    water_elem = document.getElementById("water"),
    energy_elem = document.getElementById("energy");

    health_elem.innerHTML = `Здоровье - ${health}%`;
    food_elem.innerHTML = `Еда - ${food}%`;
    water_elem.innerHTML = `Вода - ${water}%`;
    energy_elem.innerHTML = `Энергия - ${energy}%`;
}

if (localStorage.getItem('stats') === null) {
    localStorage.setItem('stats', JSON.stringify(stats));
}

function streamerStatsUpdateUp() {    
    localStorage.setItem('stats', JSON.stringify(stats));
}

function decreaseFoodAlert() {
    if (stats.levelFoodDecrease !== 2 && money >= 250) {
        Swal.fire({
            title: 'Прокачать стриме',
            icon: 'info',
            text: 'После покупки этой способности уменьшение еды снизиться на 1',
            showDenyButton: true,
            allowOutsideClick: false,
            allowEscapeClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                stats.levelFoodDecrease += 1;
                stats.foodDecrease -= 1;
                money -= 250;

                updateMoney();
                streamerStatsUpdateUp();
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Прокачать стримера',
            text: 'У вас максимальный уровень прокачки еды или не хватает монет!',
        });
    }
}

function decreaseWaterAlert() {
    if (stats.levelWaterDecrease !== 3 && money >= 250) {
        Swal.fire({
            title: 'Прокачать стриме',
            icon: 'info',
            text: 'После покупки этой способности уменьшение еды снизиться на 1',
            showDenyButton: true,
            allowOutsideClick: false,
            allowEscapeClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                stats.levelWaterDecrease += 1;
                stats.waterDecrease -= 1;
                money -= 250;
    
                updateMoney();
                streamerStatsUpdateUp();
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Прокачать стримера',
            text: 'У вас максимальный уровень прокачки еды или не хватает монет!',
        });
    }
}

function decreaseEnergyAlert() {
    if (stats.levelEnergyDecrease !== 5 && money >= 250) {
        Swal.fire({
            title: 'Прокачать стриме',
            icon: 'info',
            text: 'После покупки этой способности уменьшение еды снизиться на 1',
            showDenyButton: true,
            allowOutsideClick: false,
            allowEscapeClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                stats.levelEnergyDecrease += 1;
                stats.energyDecrease -= 1;
                money -= 250;
    
                updateMoney();
                streamerStatsUpdateUp();
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Прокачать стримера',
            text: 'У вас максимальный уровень прокачки еды или не хватает монет!',
        });
    }
}
