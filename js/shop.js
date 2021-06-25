let settings_div = document.getElementById("settings-div");

shop();

function buyChangeBg() {
    let bg = localStorage.getItem("bg");

    if (money >= 250 && bg == null) {
        Swal.fire({
            title: 'Вы успешно купили смену фонов!',
            text: 'Она доступа в настройках.',
            icon: 'success'
        });

        money -= 250;
        localStorage.setItem("money", money);
        document.getElementById('money-shop').innerHTML = `Монет - ${money}`;
        document.getElementById('money-settings').innerHTML = `Монет - ${money}`;
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money}`;
        money_p.innerHTML = `Монет - ${money}`;

        localStorage.setItem("bg", "bg");

        shop();
    } else if (bg != null || money < 250) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'У вас не хватает монет или вы уже приобрели это!',
            footer: '<a href="training_moneys.html">Что мне нужно сделать чтобы получить монеты?</a>'
        })
    }
}

function shop() {
    let bg = localStorage.getItem("bg");
    let moneyLC = localStorage.getItem('money');

    if (moneyLC != null) {
        money = parseInt(moneyLC);
        document.getElementById('money-shop').innerHTML = `Монет - ${money}`;
        document.getElementById('money-settings').innerHTML = `Монет - ${money}`;
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money}`;
    } else {
        document.getElementById('money-shop').innerHTML = `Монет - 400`;
        document.getElementById('money-settings').innerHTML = `Монет - 400`;
        document.getElementById('money-guessHero').innerHTML = `Монет - 400`;
    }

    if (bg != null) {
        document.getElementById('change-background-product').innerHTML = `
            <div id="bg-slides" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/olen.jpg" id="img-bg-1" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="img/tree.jpg" id="img-bg-2" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="img/morning.jpg" id="img-bg-3" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="img/night.jpg" id="img-bg-4" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="img/forest.jpg" id="img-bg-5" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="img/neon.jpg" id="img-bg-6" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="img/night-cyberpunk.jpg" id="img-bg-7" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="img/main.jpg" id="img-bg-8" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#bg-slides" data-bs-slide="prev" style="background: none; border: none;">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#bg-slides"  data-bs-slide="next" style="background: none; border: none;">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>

            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('olen')">Олень</button>
            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('tree')">Девушка и дерево</button>
            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('morning')">Рассвет</button>
            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('night')">Ночной лес</button>
            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('forest')">Лес на фоне гор</button>
            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('neon')">Неон</button>
            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('night-cyberpunk')">Девушка и горы</button>
            <button class="btn btn-outline-success" id="change-bg" onclick="change_bg('main')">Стандартный фон</button>
        `;
    } else { }
}

function change_bg(name) {
    document.body.style.backgroundImage = `url("img/${name}.jpg")`

    if (name === "forest" || name === "morning") {
        document.getElementById("day").style.color = "#000";
        document.getElementById("time").style.color = "#000";
        document.getElementById("title-thoughts").style.color = "#000";
        document.getElementById("text-task").style.color = "#000";
        document.getElementById("task1-text").style.color = "#000";
        document.getElementById("task2-text").style.color = "#000";
        document.getElementById("task3-text").style.color = "#000";
        document.getElementById("task4-text").style.color = "#000";
        document.getElementById("task5-text").style.color = "#000";
        document.getElementById("task6-text").style.color = "#000";
        document.getElementById("task7-text").style.color = "#000";
        document.getElementById("title-stats").style.color = "#000";
        document.getElementById("health").style.color = "#000";
        document.getElementById("food").style.color = "#000";
        document.getElementById("water").style.color = "#000";
        document.getElementById("energy").style.color = "#000";
    } else {
        document.getElementById("day").style.color = "#fff";
        document.getElementById("time").style.color = "#fff";
        document.getElementById("title-thoughts").style.color = "#fff";
        document.getElementById("text-task").style.color = "#fff";
        document.getElementById("task1-text").style.color = "#fff";
        document.getElementById("task2-text").style.color = "#fff";
        document.getElementById("task3-text").style.color = "#fff";
        document.getElementById("task4-text").style.color = "#fff";
        document.getElementById("task5-text").style.color = "#fff";
        document.getElementById("task6-text").style.color = "#fff";
        document.getElementById("task7-text").style.color = "#fff";
        document.getElementById("title-stats").style.color = "#fff";
        document.getElementById("health").style.color = "#fff";
        document.getElementById("food").style.color = "#fff";
        document.getElementById("water").style.color = "#fff";
        document.getElementById("energy").style.color = "#fff";
    }

    localStorage.setItem("bg-name", name);
}

function healBuy() {
    if (health != 100) {
        money -= 150;
        localStorage.setItem("money", money);
        
        document.getElementById('money-shop').innerHTML = `Монет - ${money}`;
        document.getElementById('money-settings').innerHTML = `Монет - ${money}`;
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money}`;
    
        health = 100;
        reloadStats();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Вам пока не надо лечиться!',
        });
    }
}

function foodBuy() {
    if (food != 100 && energy != 100) {
        money -= 50;
        localStorage.setItem("money", money);
        
        document.getElementById('money-shop').innerHTML = `Монет - ${money}`;
        document.getElementById('money-settings').innerHTML = `Монет - ${money}`;
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money}`;
    
        food += 25;
        energy += 25;
    
        if (food > 100) {
            food = 100;
            reloadStats();
        }
    
        if (energy > 100) {
            energy = 100;
            reloadStats();
        }
    
        reloadStats();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Вам пока не нужна еда!',
        });
    }
}

function waterBuy() {
    if (water != 100 && energy != 100) {
        money -= 25;
        localStorage.setItem("money", money);
        
        document.getElementById('money-shop').innerHTML = `Монет - ${money}`;
        document.getElementById('money-settings').innerHTML = `Монет - ${money}`;
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money}`;
    
        water += 20;
        energy += 15;
    
        if (water > 100) {
            water = 100;
            reloadStats();
        }
        
        if (energy > 100) {
            energy = 100;
            reloadStats();
        }
    
    
        reloadStats();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Вам пока не нужна вода!',
        });
    }
}