// Получение элементов в статистике и создания переменных статистики
let health_elem = document.getElementById("health"),
    food_elem = document.getElementById("food"),
    water_elem = document.getElementById("water"),
    energy_elem = document.getElementById("energy");

let health = 100,
    food = 100,
    water = 100,
    energy = 100;

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

function streamerStatsUpdateUp() {
    const foodDecreaseLc = localStorage.getItem('foodDecrease');
    const waterDecreaseLc = localStorage.getItem('waterDecrease');
    const energyDecreaseLc = localStorage.getItem('energyDecrease');

    foodDecrease = parseInt(foodDecreaseLc);
    waterDecrease = parseInt(waterDecreaseLc);
    energyDecrease = parseInt(energyDecreaseLc);
}

function decreaseFoodAlert() {
    const foodDecreaseLc = localStorage.getItem('foodDecrease');
    
}

function decreaseWaterAlert() {
    const waterDecreaseLc = localStorage.getItem('waterDecrease');

}

function decreaseEnergyAlert() {
    const energyDecreaseLc = localStorage.getItem('energyDecrease');

}
