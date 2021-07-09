// Получение элементов по id
let btn_answer1 = document.getElementById("btn-answer1"),
    btn_answer2 = document.getElementById("btn-answer2"),
    btn_answer3 = document.getElementById("btn-answer3"),
    btn_answer4 = document.getElementById("btn-answer4"),
    img_hero = document.getElementById("hero");

// Рандомное число для выбора героя
let rand_heroes;
let rand_heroes_num;
let rand_heroes_num2;
let rand_heroes_num3;
let rand_heroes_num4;
let rand_correctAnswer;

// Универсальный объект героев
let hero_universal_object;
let img_src;

// Массив картинок героев
let array_heroes_images = [
    'https://dota2.ru/img/heroes/earthshaker/portrait.jpg',
    'https://dota2.ru/img/heroes/sven/portrait.jpg',
    'https://dota2.ru/img/heroes/tiny/portrait.jpg',
    'https://dota2.ru/img/heroes/kunkka/portrait.jpg',
    'https://dota2.ru/img/heroes/beastmaster/portrait.jpg',
    'https://dota2.ru/img/heroes/dragon_knight/portrait.jpg',
    'https://dota2.ru/img/heroes/clockwerk/portrait.jpg',
    'https://dota2.ru/img/heroes/omniknight/portrait.jpg',
    'https://dota2.ru/img/heroes/huskar/portrait.jpg',
    'https://dota2.ru/img/heroes/alchemist/portrait.jpg',
    'https://dota2.ru/img/heroes/brewmaster/portrait.jpg',
    'https://dota2.ru/img/heroes/treant_protector/portrait.jpg',
    'https://dota2.ru/img/heroes/io/portrait.jpg',
    'https://dota2.ru/img/heroes/centaur_warrunner/portrait.jpg',
    'https://dota2.ru/img/heroes/timbersaw/portrait.jpg',
    'https://dota2.ru/img/heroes/bristleback/portrait.jpg',
    'https://dota2.ru/img/heroes/tusk/portrait.jpg',
    'https://dota2.ru/img/heroes/elder_titan/portrait.jpg',
    'https://dota2.ru/img/heroes/legion_commander/portrait.jpg',
    'https://dota2.ru/img/heroes/earth_spirit/portrait.jpg',
    'https://dota2.ru/img/heroes/phoenix/portrait.jpg',
    'https://dota2.ru/img/heroes/mars/portrait.jpg',
    'https://dota2.ru/img/heroes/snapfire/portrait.jpg',
    'https://dota2.ru/img/heroes/axe/portrait.jpg',
    'https://dota2.ru/img/heroes/pudge/portrait.jpg',
    'https://dota2.ru/img/heroes/sand_king/portrait.jpg',
    'https://dota2.ru/img/heroes/slardar/portrait.jpg',
    'https://dota2.ru/img/heroes/tidehunter/portrait.jpg',
    'https://dota2.ru/img/heroes/wraith_king/portrait.jpg',
    'https://dota2.ru/img/heroes/lifestealer/portrait.jpg',
    'https://dota2.ru/img/heroes/night_stalker/portrait.jpg',
    'https://dota2.ru/img/heroes/doom/portrait.jpg',
    'https://dota2.ru/img/heroes/spirit_breaker/portrait.jpg',
    'https://dota2.ru/img/heroes/lycan/portrait.jpg',
    'https://dota2.ru/img/heroes/chaos_knight/portrait.jpg',
    'https://dota2.ru/img/heroes/undying/portrait.jpg',
    'https://dota2.ru/img/heroes/magnus/portrait.jpg',
    'https://dota2.ru/img/heroes/abaddon/portrait.jpg',
    'https://dota2.ru/img/heroes/underlord/portrait.jpg',
    'https://dota2.ru/img/heroes/anti_mage/portrait.jpg',
    'https://dota2.ru/img/heroes/drow_ranger/portrait.jpg',
    'https://dota2.ru/img/heroes/juggernaut/portrait.jpg',
    'https://dota2.ru/img/heroes/mirana/portrait.jpg',
    'https://dota2.ru/img/heroes/morphling/portrait.jpg',
    'https://dota2.ru/img/heroes/phantom_lancer/portrait.jpg',
    'https://dota2.ru/img/heroes/vengeful_spirit/portrait.jpg',
    'https://dota2.ru/img/heroes/riki/portrait.jpg',
    'https://dota2.ru/img/heroes/sniper/portrait.jpg',
    'https://dota2.ru/img/heroes/templar_assassin/portrait.jpg',
    'https://dota2.ru/img/heroes/luna/portrait.jpg',
    'https://dota2.ru/img/heroes/bounty_hunter/portrait.jpg',
    'https://dota2.ru/img/heroes/ursa/portrait.jpg',
    'https://dota2.ru/img/heroes/gyrocopter/portrait.jpg',
    'https://dota2.ru/img/heroes/lone_druid/portrait.jpg',
    'https://dota2.ru/img/heroes/naga_siren/portrait.jpg',
    'https://dota2.ru/img/heroes/troll_warlord/portrait.jpg',
    'https://dota2.ru/img/heroes/ember_spirit/portrait.jpg',
    'https://dota2.ru/img/heroes/monkey_king/portrait.jpg',
    'https://dota2.ru/img/heroes/pangolier/portrait.jpg',
    'https://dota2.ru/img/heroes/bloodseeker/portrait.jpg',
    'https://dota2.ru/img/heroes/shadow_fiend/portrait.jpg',
    'https://dota2.ru/img/heroes/razor/portrait.jpg',
    'https://dota2.ru/img/heroes/venomancer/portrait.jpg',
    'https://dota2.ru/img/heroes/faceless_void/portrait.jpg',
    'https://dota2.ru/img/heroes/phantom_assassin/portrait.jpg',
    'https://dota2.ru/img/heroes/viper/portrait.jpg',
    'https://dota2.ru/img/heroes/clinkz/portrait.jpg',
    'https://dota2.ru/img/heroes/broodmother/portrait.jpg',
    'https://dota2.ru/img/heroes/weaver/portrait.jpg',
    'https://dota2.ru/img/heroes/spectre/portrait.jpg',
    'https://dota2.ru/img/heroes/meepo/portrait.jpg',
    'https://dota2.ru/img/heroes/nyx_assassin/portrait.jpg',
    'https://dota2.ru/img/heroes/slark/portrait.jpg',
    'https://dota2.ru/img/heroes/medusa/portrait.jpg',
    'https://dota2.ru/img/heroes/terrorblade/portrait.jpg',
    'https://dota2.ru/img/heroes/arc_warden/portrait.jpg',
    'https://dota2.ru/img/heroes/crystal_maiden/portrait.jpg',
    'https://dota2.ru/img/heroes/puck/portrait.jpg',
    'https://dota2.ru/img/heroes/storm_spirit/portrait.jpg',
    'https://dota2.ru/img/heroes/windranger/portrait.jpg',
    'https://dota2.ru/img/heroes/zeus/portrait.jpg',
    'https://dota2.ru/img/heroes/lina/portrait.jpg',
    'https://dota2.ru/img/heroes/shadow_shaman/portrait.jpg',
    'https://dota2.ru/img/heroes/tinker/portrait.jpg',
    'https://dota2.ru/img/heroes/natures_prophet/portrait.jpg',
    'https://dota2.ru/img/heroes/enchantress/portrait.jpg',
    'https://dota2.ru/img/heroes/jakiro/portrait.jpg',
    'https://dota2.ru/img/heroes/chen/portrait.jpg',
    'https://dota2.ru/img/heroes/silencer/portrait.jpg',
    'https://dota2.ru/img/heroes/ogre_magi/portrait.jpg',
    'https://dota2.ru/img/heroes/rubick/portrait.jpg',
    'https://dota2.ru/img/heroes/disruptor/portrait.jpg',
    'https://dota2.ru/img/heroes/keeper_of_the_light/portrait.jpg',
    'https://dota2.ru/img/heroes/skywrath_mage/portrait.jpg',
    'https://dota2.ru/img/heroes/oracle/portrait.jpg',
    'https://dota2.ru/img/heroes/dark_willow/portrait.jpg',
    'https://dota2.ru/img/heroes/void_spirit/portrait.jpg',
    'https://dota2.ru/img/heroes/bane/portrait.jpg',
    'https://dota2.ru/img/heroes/lich/portrait.jpg',
    'https://dota2.ru/img/heroes/lion/portrait.jpg',
    'https://dota2.ru/img/heroes/witch_doctor/portrait.jpg',
    'https://dota2.ru/img/heroes/enigma/portrait.jpg',
    'https://dota2.ru/img/heroes/necrophos/portrait.jpg',
    'https://dota2.ru/img/heroes/warlock/portrait.jpg',
    'https://dota2.ru/img/heroes/queen_of_pain/portrait.jpg',
    'https://dota2.ru/img/heroes/death_prophet/portrait.jpg',
    'https://dota2.ru/img/heroes/pugna/portrait.jpg',
    'https://dota2.ru/img/heroes/dazzle/portrait.jpg',
    'https://dota2.ru/img/heroes/leshrac/portrait.jpg',
    'https://dota2.ru/img/heroes/dark_seer/portrait.jpg',
    'https://dota2.ru/img/heroes/batrider/portrait.jpg',
    'https://dota2.ru/img/heroes/ancient_apparition/portrait.jpg',
    'https://dota2.ru/img/heroes/invoker/portrait.jpg',
    'https://dota2.ru/img/heroes/outworld_devourer/portrait.jpg',
    'https://dota2.ru/img/heroes/shadow_demon/portrait.jpg',
    'https://dota2.ru/img/heroes/visage/portrait.jpg',
    'https://dota2.ru/img/heroes/winter_wyvern/portrait.jpg',
    'https://dota2.ru/img/heroes/grimstroke/portrait.jpg',
]

// Первый запуск
generation();

function update_money() {
    let money_lc = localStorage.getItem("money");

    if (money_lc === null) {
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money}`;
        document.getElementById('money').innerHTML = `Монет - ${money}`;
    } else {
        document.getElementById('money-guessHero').innerHTML = `Монет - ${money_lc}`;
        document.getElementById('money').innerHTML = `Монет - ${money_lc}`;
    }
}

function generation() {
    let rand_for_heroes_num = getRandNumb(0, 4);
    let rand_for_heroes_num2 = getRandNumb(0, 11);
    let rand_for_heroes_num3 = getRandNumb(0, 10);
    let rand_for_heroes_num4 = getRandNumb(0, 14);

    let rand_heroes_num = (getRandNumb(0, 100) + rand_for_heroes_num);
    let rand_heroes_num2 = (getRandNumb(0, 89) + rand_for_heroes_num2);
    let rand_heroes_num3 = (getRandNumb(0, 98) + rand_for_heroes_num3);
    let rand_heroes_num4 = (getRandNumb(0, 94) + rand_for_heroes_num4);

    let rand_correctAnswer = getRandNumb(1, 4);

    if (rand_correctAnswer == 1) {
        img_src = rand_heroes_num;
    } else if (rand_correctAnswer == 2) {
        img_src = rand_heroes_num2;
    } else if (rand_correctAnswer == 3) {
        img_src = rand_heroes_num3;
    } else if (rand_correctAnswer == 4) {
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
    document.getElementById('money-guessHero').innerHTML = `Монет - ${money_lc}`;

    checkHeroes();
}

function checkHeroes() {
    if (hero_universal_object.firstAnswer == hero_universal_object.secondAnswer) {
        generation();
    } else if (hero_universal_object.firstAnswer == hero_universal_object.thirdAnswer) {
        generation();
    } else if (hero_universal_object.firstAnswer == hero_universal_object.fourthAnswer) {
        generation();
    } else if (hero_universal_object.secondAnswer == hero_universal_object.firstAnswer) {
        generation();
    } else if (hero_universal_object.secondAnswer == hero_universal_object.thirdAnswer) {
        generation();
    } else if (hero_universal_object.secondAnswer == hero_universal_object.fourthAnswer) {
        generation();
    } else if (hero_universal_object.thirdAnswer == hero_universal_object.firstAnswer) {
        generation();
    } else if (hero_universal_object.thirdAnswer == hero_universal_object.secondAnswer) {
        generation();
    } else if (hero_universal_object.thirdAnswer == hero_universal_object.fourthAnswer) {
        generation();
    } else if (hero_universal_object.fourthAnswer == hero_universal_object.firstAnswer) {
        generation();
    } else if (hero_universal_object.fourthAnswer == hero_universal_object.secondAnswer) {
        generation();
    } else if (hero_universal_object.fourthAnswer == hero_universal_object.thirdAnswer) {
        generation();
    } else if (hero_universal_object.firstAnswer == undefined 
        || hero_universal_object.secondAnswer == undefined 
        || hero_universal_object.thirdAnswer == undefined 
        || hero_universal_object.fourthAnswer == undefined) {
            generation();
    } else {
        img_hero.src = hero_universal_object.imgSrc;
        btn_answer1.innerHTML = hero_universal_object.firstAnswer;
        btn_answer2.innerHTML = hero_universal_object.secondAnswer;
        btn_answer3.innerHTML = hero_universal_object.thirdAnswer;
        btn_answer4.innerHTML = hero_universal_object.fourthAnswer;
    }
}

function checkHero(button) {
    if (energy < 50) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Вы не можете больше играть!',
            footer: '<a href="training_energy.html" target="_blank">Почему так произошло?</a>'
        });
    } else {
        energy -= 10;
        reloadStats();
    
        if (button === hero_universal_object.correctAnswer) {
            swal.fire({
                title: "Правильно!",
                icon: "success"
            });

            money += 5;
            localStorage.setItem("money", money);

            let moneyAllLc = localStorage.getItem('money-all');
            if (moneyAllLc === null) {
                moneyForLc = money;
            } else {
                moneyForLc = parseInt(moneyAllLc) + 5;
            }
        
            localStorage.setItem('money-all', moneyForLc);
            updateStatsStreamer();
    
            let money_lc = localStorage.getItem("money");
    
            document.getElementById('money-settings').innerHTML = `Монет - ${money_lc}`;
            document.getElementById('money-shop').innerHTML = `Монет - ${money_lc}`;
            document.getElementById('money-guessHero').innerHTML = `Монет - ${money_lc}`;
    
            generation();
        } else if (button !== hero_universal_object.correctAnswer) {
            swal.fire({
                title: "Неправильно!",
                icon: "error"
            });
    
            money -= 2;
            localStorage.setItem("money", money);
    
            let money_lc = localStorage.getItem("money");
    
            document.getElementById('money-settings').innerHTML = `Монет - ${money_lc}`;
            document.getElementById('money-shop').innerHTML = `Монет - ${money_lc}`;
            document.getElementById('money-guessHero').innerHTML = `Монет - ${money_lc}`;
        }
    }
}