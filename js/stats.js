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