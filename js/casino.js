let selectSpells = 1;
let spellsLeft = 4;
let round = 0;
let counterEnemy = 1;

// Heroes
let random_hero1 = getRandNumb(0, 2);
let random_hero2 = getRandNumb(0, 2);
let random_hero3 = getRandNumb(0, 2);

let heroes = document.getElementById("heroes");

let heroUser = [{
    name: '',
    image: '',
    hp: 0,
    startHp: 0,
    mana: 0,
    startMana: 0,
    level: 1,
    spellPoints: 1,
    
    spells: {
        firstSpell: '',
        secondSpell: '',
        thirdSpell: '',
        ultimate: '',
    },
}];

let array_heroes_casino = [
    Alchemist = {
        firstSpell: {
            name: 'Acid Spray',
            type: 'DPS',
            damage1: 20,
            damage2: 25,
            damage3: 30,
            damage4: 35,
            cooldown1: 22,
            cooldown2: 22,
            cooldown3: 22,
            cooldown4: 22,
            mana1: 130,
            mana2: 140,
            mana3: 150,
            mana4: 160,
            act1: 16,
            act2: 16,
            act3: 16,
            act4: 16,
            level: 0,
            description: 'Распыляет в указанной области облако кислоты, которое наносит врагам периодический урон.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_acid_spray.png',
        },

        secondSpell: {
            name: 'Unstable Concoction',
            type: 'Stun',
            damage1: 150,
            damage2: 220,
            damage3: 290,
            damage4: 360,
            cooldown1: 16,
            cooldown2: 16,
            cooldown3: 16,
            cooldown4: 16,
            mana1: 90,
            mana2: 100,
            mana3: 110,
            mana4: 120,
            act1: 1.8,
            act2: 2.5,
            act3: 3.3,
            act4: 4,
            level: 0,
            description: 'Герой бросает во врага колбу с гремучей смесью, которая взрывается при попадании, оглушив противника и нанеся ему урон.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_unstable_concoction.png',
        },

        thirdSpell: {
            name: 'Greevils Greed',
            type: 'ImprovementGold',
            extraGold1: 7,
            extraGold2: 10,
            extraGold3: 14,
            extraGold4: 18,
            mana1: 0,
            mana2: 0,
            mana3: 0,
            mana4: 0,
            cooldown1: 0,
            cooldown2: 0,
            cooldown3: 0,
            cooldown4: 0,
            act1: 0,
            act2: 0,
            act3: 0,
            act4: 0,
            level: 0,
            description: 'Позволяет синтезировать больше золота из врагов.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_goblins_greed.png',
        },

        ultimate: {
            name: 'Chemical Rage',
            type: 'ImprovementDamage',
            ultimate: true,
            damagePlus1: 40,
            damagePlus2: 80,
            damagePlus3: 110,
            cooldown1: 55,
            cooldown2: 55,
            cooldown3: 55,
            mana1: 50,
            mana2: 100,
            mana3: 150,
            act1: 25,
            act2: 25,
            act3: 25,
            level: 0,
            description: 'Особая химическая смесь разъяряет героя, отчего урон его атакой увеличивается.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/alchemist_chemical_rage.png',
        },

        name: 'Alchemist',
        image: 'https://dota2.ru/img/heroes/alchemist/portrait.jpg',
        startHp: 700,
        startMana: 375,
    },

    Juggernaut = {
        firstSpell: {
            name: 'Blade Fury',
            type: 'DPS',
            damage1: 85,
            damage2: 110,
            damage3: 135,
            damage4: 160,
            cooldown1: 42,
            cooldown2: 34,
            cooldown3: 26,
            cooldown4: 18,
            mana1: 120,
            mana2: 110,
            mana3: 100,
            mana4: 90,
            act1: 5,
            act2: 5,
            act3: 5,
            act4: 5,
            level: 0,
            description: 'Герой крутится в вихре сокрушительных ударов клинком, нанося урон врагам.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_blade_fury.png',
        },

        secondSpell: {
            name: 'Healing Ward',
            type: 'ImprovementHeal',
            damage1: 30,
            damage2: 40,
            damage3: 50,
            damage4: 60,
            cooldown1: 60,
            cooldown2: 60,
            cooldown3: 60,
            cooldown4: 60,
            mana1: 140,
            mana2: 140,
            mana3: 140,
            mana4: 140,
            act1: 25,
            act2: 25,
            act3: 25,
            act4: 25,
            level: 0,
            description: 'Призывает тотем, лечащий героя. Действует 25 сек.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_healing_ward.png',
        },

        thirdSpell: {
            name: 'Blade Dance',
            type: 'ImprovementDamage',
            damage1: 100,
            damage2: 200,
            damage3: 250,
            damage4: 300,
            chance1: 20,
            chance2: 25,
            chance3: 30,
            chance4: 35,
            mana1: 0,
            mana2: 0,
            mana3: 0,
            mana4: 0,
            cooldown1: 0,
            cooldown2: 0,
            cooldown3: 0,
            cooldown4: 0,
            act1: 0,
            act2: 0,
            act3: 0,
            act4: 0,
            level: 0,
            description: 'Даёт герою шанс нанести атакой критический урон.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_blade_dance.png',
        },

        ultimate: {
            name: 'Omnislash',
            type: 'DPS',
            ultimate: true,
            damagePlus1: 200,
            damagePlus2: 220,
            damagePlus3: 240,
            cooldown1: 140,
            cooldown2: 140,
            cooldown3: 140,
            act1: 3,
            act2: 3.3,
            act3: 3.5,
            mana1: 200,
            mana2: 275,
            mana3: 350,
            level: 0,
            description: 'Герой прыгает к указанному врагу, а затем с повышенной скоростью атакует его.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/juggernaut_omni_slash.png',
        },

        name: 'Juggernaut',
        image: 'https://dota2.ru/img/heroes/juggernaut/portrait.jpg',
        startHp: 600,
        startMana: 243,
    },

    Queen_Of_Pain = {
        firstSpell: {
            name: 'Shadow Strike',
            type: 'DPS',
            damage1: 30,
            damage2: 50,
            damage3: 70,
            damage4: 90,
            act1: 15,
            act2: 15,
            act3: 15,
            act4: 15,
            cooldown1: 16,
            cooldown2: 12,
            cooldown3: 8,
            cooldown4: 4,
            mana1: 110,
            mana2: 120,
            mana3: 130,
            mana4: 140,
            level: 0,
            description: 'Бросает кинжал, который наносит урон при попадании и отравляет цель на 15.0 сек. Жертва передвигается медленнее и каждые 3.0 сек. получает урон от яда.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_shadow_strike.png',
        },

        secondSpell: {
            name: 'Blink Strike',
            type: 'Escape',
            cooldown1: 12,
            cooldown2: 10,
            cooldown3: 8,
            cooldown4: 6,
            act1: 0,
            act2: 0,
            act3: 0,
            act4: 0,
            mana1: 60,
            mana2: 60,
            mana3: 60,
            mana4: 60,
            level: 0,
            description: 'Телепортация на короткую дистанцию, позволяющая избежать урон.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_blink.png',
        },

        thirdSpell: {
            name: 'Scream Of Pain',
            type: 'Damage',
            damage1: 75,
            damage2: 150,
            damage3: 225,
            damage4: 300,
            cooldown1: 7,
            cooldown2: 7,
            cooldown3: 7,
            cooldown4: 7,
            mana1: 85,
            mana2: 100,
            mana3: 115,
            mana4: 130,
            act1: 0,
            act2: 0,
            act3: 0,
            act4: 0,
            level: 0,
            description: 'Герой издаёт пронзительный вопль, нанося урон всем врагам.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_scream_of_pain.png',
        },

        ultimate: {
            name: 'Sonic Wave',
            type: 'Damage',
            ultimate: true,
            damage1: 100,
            damage2: 150,
            damage3: 200,
            cooldown1: 125,
            cooldown2: 125,
            cooldown3: 125,
            mana1: 250,
            mana2: 400,
            mana3: 550,
            act1: 0,
            act2: 0,
            act3: 0,
            level: 0,
            description: 'Создаёт перед героем гигантскую звуковую волну, наносящую им огромный урон.',
            image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/abilities/queenofpain_sonic_wave.png',
        },

        name: 'Queen Of Pain',
        image: 'https://dota2.ru/img/heroes/queen_of_pain/portrait.jpg',
        startHp: 560,
        startMana: 375,
    },
];

let enemies = [
    {
        name: '',
        image: '',
        hp: 0,
        startHp: 0,
        mana: 0,
        startMana: 0,
        level: 1,
        spellPoints: 1,

        spells: {

        },
    },
    {
        name: '',
        image: '',
        hp: 0,
        startHp: 0,
        mana: 0,
        startMana: 0,
        level: 1,
        spellPoints: 1,

        spells: {

        },
    },
    {
        name: '',
        image: '',
        hp: 0,
        startHp: 0,
        mana: 0,
        startMana: 0,
        level: 1,
        spellPoints: 1,

        spells: {

        },
    }
];

heroes.innerHTML = `
    <p class="lead text-center" id="choice-hero-casino">Выберите героя: </p>

    <div class="d-flex justify-content-center">
        <div class="card bg-dark" style="width: 18rem; cursor: pointer;" onclick="heroName('${array_heroes_casino[random_hero1].name}', '${array_heroes_casino[random_hero1].image}', ${array_heroes_casino[random_hero1].startHp}, ${array_heroes_casino[random_hero1].startMana}); choice_spell()" id="hero-casino-1">
            <img src="${array_heroes_casino[random_hero1].image}" class="card-img-top" alt="${array_heroes_casino[random_hero1].name}">
            <div class="card-body">
                <h5 class="card-title text-center">${array_heroes_casino[random_hero1].name}</h5>
            </div>
        </div>

        <div class="card bg-dark" style="width: 18rem; cursor: pointer;" onclick="heroName('${array_heroes_casino[random_hero2].name}', '${array_heroes_casino[random_hero2].image}', ${array_heroes_casino[random_hero2].startHp}, ${array_heroes_casino[random_hero2].startMana}); choice_spell()" id="hero-casino-2">
            <img src="${array_heroes_casino[random_hero2].image}" class="card-img-top" alt="${array_heroes_casino[random_hero2].name}">
            <div class="card-body">
                <h5 class="card-title text-center">${array_heroes_casino[random_hero2].name}</h5>
            </div>
        </div>

        <div class="card bg-dark" style="width: 18rem; cursor: pointer;" onclick="heroName('${array_heroes_casino[random_hero3].name}', '${array_heroes_casino[random_hero3].image}', ${array_heroes_casino[random_hero3].startHp}, ${array_heroes_casino[random_hero3].startMana}); choice_spell()" id="hero-casino-3">
            <img src="${array_heroes_casino[random_hero3].image}" class="card-img-top" alt="${array_heroes_casino[random_hero3].name}">
            <div class="card-body">
                <h5 class="card-title text-center">${array_heroes_casino[random_hero3].name}</h5>
            </div>
        </div>
    </div>
`;

function heroName(name, image, startHp, startMana) {
    heroUser[0].name = name;
    heroUser[0].image = image;
    heroUser[0].hp = startHp;
    heroUser[0].mana = startMana;
    heroUser[0].startHp = startHp;
    heroUser[0].startMana = startMana;
}

function counterPlus(numberSpell, random_spell1, random_spell2, random_spell3, random_spell4) {
    switch (selectSpells) {
        case 1: 
            if (numberSpell === 1) {
                heroUser[0].spells.firstSpell = array_heroes_casino[random_spell1].firstSpell; 
            } else if (numberSpell === 2) {
                heroUser[0].spells.firstSpell = array_heroes_casino[random_spell2].secondSpell; 
            } else if (numberSpell === 3) {
                heroUser[0].spells.firstSpell = array_heroes_casino[random_spell3].thirdSpell; 
            } else if (numberSpell === 4) {
                heroUser[0].spells.firstSpell = array_heroes_casino[random_spell4].ultimate; 
            }
        break;
        case 2: 
            if (numberSpell === 1) {
                heroUser[0].spells.secondSpell = array_heroes_casino[random_spell1].firstSpell; 
            } else if (numberSpell === 2) {
                heroUser[0].spells.secondSpell = array_heroes_casino[random_spell2].secondSpell; 
            } else if (numberSpell === 3) {
                heroUser[0].spells.secondSpell = array_heroes_casino[random_spell3].thirdSpell; 
            } else if (numberSpell === 4) {
                heroUser[0].spells.secondSpell = array_heroes_casino[random_spell4].ultimate; 
            }
        break;
        case 3: 
            if (numberSpell === 1) {
                heroUser[0].spells.thirdSpell = array_heroes_casino[random_spell1].firstSpell; 
            } else if (numberSpell === 2) {
                heroUser[0].spells.thirdSpell = array_heroes_casino[random_spell2].secondSpell; 
            } else if (numberSpell === 3) {
                heroUser[0].spells.thirdSpell = array_heroes_casino[random_spell3].thirdSpell; 
            } else if (numberSpell === 4) {
                heroUser[0].spells.thirdSpell = array_heroes_casino[random_spell4].ultimate; 
            }
        break;
        case 4: 
            if (numberSpell === 1) {
                heroUser[0].spells.ultimate = array_heroes_casino[random_spell1].firstSpell; 
            } else if (numberSpell === 2) {
                heroUser[0].spells.ultimate = array_heroes_casino[random_spell2].secondSpell; 
            } else if (numberSpell === 3) {
                heroUser[0].spells.ultimate = array_heroes_casino[random_spell3].thirdSpell; 
            } else if (numberSpell === 4) {
                heroUser[0].spells.ultimate = array_heroes_casino[random_spell4].ultimate; 
            }
        break;
    }

    selectSpells++;
    choice_spell();
}

function choice_spell() {
    // Speels
    let random_spell1 = getRandNumb(0, 2);
    let random_spell2 = getRandNumb(0, 2);
    let random_spell3 = getRandNumb(0, 2);
    let random_spell4 = getRandNumb(0, 2);

    if (selectSpells !== 5) {
        heroes.innerHTML = `
            <div id="spells" class="row m-auto">
                <p class="lead text-center" id="choice-hero-casino">Выберите скиллы (${selectSpells} из ${spellsLeft}): </p>

                <div class="card bg-dark" style="width: 30rem; cursor: pointer;" onclick="counterPlus(${1}, ${random_spell1}, ${random_spell2}, ${random_spell3}, ${random_spell4})" id="spell-casino-1">                 
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${array_heroes_casino[random_spell1].firstSpell.image}" style="width: 150px; height: 150px;" class="card-img-top mt-3" alt="${array_heroes_casino[random_spell1].firstSpell.name}}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-center">${array_heroes_casino[random_spell1].firstSpell.name}</h5>
                                <p class="card-text">${array_heroes_casino[random_spell1].firstSpell.description}</p>
                                <p class="card-text text-warning">${array_heroes_casino[random_spell1].firstSpell.chance1 !== undefined ? `\ Шанс: ${array_heroes_casino[random_spell3].firstSpell.chance1}% / ${array_heroes_casino[random_spell1].firstSpell.chance2}% / ${array_heroes_casino[random_spell1].firstSpell.chance3}% / ${array_heroes_casino[random_spell1].firstSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">Мана: ${array_heroes_casino[random_spell1].firstSpell.mana1}/${array_heroes_casino[random_spell1].firstSpell.mana2}/${array_heroes_casino[random_spell1].firstSpell.mana3}/${array_heroes_casino[random_spell1].firstSpell.mana4}</p>
                                <p class="card-text"><small class="text-muted">Перезарядка: ${array_heroes_casino[random_spell1].firstSpell.cooldown1}/${array_heroes_casino[random_spell1].firstSpell.cooldown2}/${array_heroes_casino[random_spell1].firstSpell.cooldown3}/${array_heroes_casino[random_spell1].firstSpell.cooldown4}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card bg-dark" style="width: 30rem; cursor: pointer;" onclick="counterPlus(${2}, ${random_spell1}, ${random_spell2}, ${random_spell3}, ${random_spell4})" id="spell-casino-1">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${array_heroes_casino[random_spell2].secondSpell.image}" style="width: 150px; height: 150px;" class="card-img-top mt-3" alt="${array_heroes_casino[random_spell2].secondSpell.name}}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-center">${array_heroes_casino[random_spell2].secondSpell.name}</h5>
                                <p class="card-text">${array_heroes_casino[random_spell2].secondSpell.description}</p>
                                <p class="card-text text-warning">${array_heroes_casino[random_spell2].secondSpell.chance1 !== undefined ? `\ Шанс: ${array_heroes_casino[random_spell2].secondSpell.chance1}% / ${array_heroes_casino[random_spell2].secondSpell.chance2}% / ${array_heroes_casino[random_spell2].secondSpell.chance3}% / ${array_heroes_casino[random_spell2].secondSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">Мана: ${array_heroes_casino[random_spell2].secondSpell.mana1}/${array_heroes_casino[random_spell2].secondSpell.mana2}/${array_heroes_casino[random_spell2].secondSpell.mana3}/${array_heroes_casino[random_spell2].secondSpell.mana4}</p>
                                <p class="card-text"><small class="text-muted">Перезарядка: ${array_heroes_casino[random_spell2].secondSpell.cooldown1}/${array_heroes_casino[random_spell2].secondSpell.cooldown2}/${array_heroes_casino[random_spell2].secondSpell.cooldown3}/${array_heroes_casino[random_spell2].secondSpell.cooldown4}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card bg-dark" style="width: 30rem; cursor: pointer;" onclick="counterPlus(${3}, ${random_spell1}, ${random_spell2}, ${random_spell3}, ${random_spell4})" id="spell-casino-1">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${array_heroes_casino[random_spell3].thirdSpell.image}" style="width: 150px; height: 150px;" class="card-img-top mt-3" alt="${array_heroes_casino[random_spell3].thirdSpell.name}}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-center">${array_heroes_casino[random_spell3].thirdSpell.name}</h5>
                                <p class="card-text">${array_heroes_casino[random_spell3].thirdSpell.description}</p>
                                <p class="card-text text-warning">${array_heroes_casino[random_spell3].thirdSpell.chance1 !== undefined ? `\ Шанс: ${array_heroes_casino[random_spell3].thirdSpell.chance1}% / ${array_heroes_casino[random_spell3].thirdSpell.chance2}% / ${array_heroes_casino[random_spell3].thirdSpell.chance3}% / ${array_heroes_casino[random_spell3].thirdSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">Мана: ${array_heroes_casino[random_spell3].thirdSpell.mana1}/${array_heroes_casino[random_spell3].thirdSpell.mana2}/${array_heroes_casino[random_spell3].thirdSpell.mana3}/${array_heroes_casino[random_spell3].thirdSpell.mana4}</p>
                                <p class="card-text"><small class="text-muted">Перезарядка: ${array_heroes_casino[random_spell3].thirdSpell.cooldown1}/${array_heroes_casino[random_spell3].thirdSpell.cooldown2}/${array_heroes_casino[random_spell3].thirdSpell.cooldown3}/${array_heroes_casino[random_spell3].thirdSpell.cooldown4}</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card bg-dark" style="width: 30rem; cursor: pointer;" onclick="counterPlus(${4}, ${random_spell1}, ${random_spell2}, ${random_spell3}, ${random_spell4})" id="spell-casino-1">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${array_heroes_casino[random_spell4].ultimate.image}" style="width: 150px; height: 150px;" class="card-img-top mt-3" alt="${array_heroes_casino[random_spell4].ultimate.name}}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title text-center">${array_heroes_casino[random_spell4].ultimate.name}</h5>
                                <p class="card-text">${array_heroes_casino[random_spell4].ultimate.description}</p>
                                <p class="card-text text-warning">${array_heroes_casino[random_spell4].ultimate.chance1 !== undefined ? `\ Шанс: ${array_heroes_casino[random_spell4].ultimate.chance1}% / ${array_heroes_casino[random_spell4].ultimate.chance2}% / ${array_heroes_casino[random_spell4].ultimate.chance3}% / ${array_heroes_casino[random_spell4].ultimate.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${array_heroes_casino[random_spell4].ultimate.mana1}/${array_heroes_casino[random_spell4].ultimate.mana2}/${array_heroes_casino[random_spell4].ultimate.mana3}</p>
                                <p class="card-text"><small class="text-muted">Перезарядка: ${array_heroes_casino[random_spell4].ultimate.cooldown1}/${array_heroes_casino[random_spell4].ultimate.cooldown2}/${array_heroes_casino[random_spell4].ultimate.cooldown3}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        mainGame();
    }
}

function startRoundTimer() {
    let time = 15;

    const timeBeforeStart = setInterval(() => {
        time--;
        document.getElementById('timerRound').innerHTML = `${time} секунд до начала - Раунд ${round}`;
    }, 1000);

    setTimeout(() => {
        clearInterval(timeBeforeStart);
        roundStart(round);
    }, 15000);
}

function roundStart(round) {
    document.getElementById('music').src = "music/roundCasino.mp3";

    const randUseSpell = getRandNumb(0, 3);

    const firstSpellEnemy1 = enemies[0].spells.firstSpell;
    const secondSpellEnemy1 = enemies[0].spells.secondSpell;
    const thirdSpellEnemy1 = enemies[0].spells.thirdSpell;
    const ultimateSpellEnemy1 = enemies[0].spells.ultimate;

    const firstSpellEnemy2 = enemies[0].spells.firstSpell;
    const secondSpellEnemy2 = enemies[0].spells.secondSpell;
    const thirdSpellEnemy2 = enemies[0].spells.thirdSpell;
    const ultimateSpellEnemy2 = enemies[0].spells.ultimate;

    const firstSpellEnemy3 = enemies[0].spells.firstSpell;
    const secondSpellEnemy3 = enemies[0].spells.secondSpell;
    const thirdSpellEnemy3 = enemies[0].spells.thirdSpell;
    const ultimateSpellEnemy3 = enemies[0].spells.ultimate;

    const firstSpellUser = heroUser[0].spells.firstSpell;
    const secondSpellUser = heroUser[0].spells.secondSpell;
    const thirdSpellUser = heroUser[0].spells.thirdSpell;
    const ultimateSpellUser = heroUser[0].spells.ultimate;

    let startHp = heroUser[0].startHp;

    if (counterEnemy === 1) {
        // Enemy 1 Attack
        if (firstSpellEnemy1.type !== 'ImprovementDamage' || 
            firstSpellEnemy1.type !== 'ImprovementHeal' || 
            firstSpellEnemy1.type !== 'ImprovementHeal' || 
            firstSpellEnemy1.type !== 'Escape' && randUseSpell === 0) {
            firstSpellEnemy1.level += 1;
            if (round === 1) {
                heroUser[0].hp -= firstSpellEnemy1.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage1 / enemies[0].spells.firstSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= firstSpellEnemy1.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage2 / enemies[0].spells.firstSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= firstSpellEnemy1.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[0].spells.firstSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= firstSpellEnemy1.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage4 / enemies[0].spells.firstSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${firstSpellEnemy1.name}`;
        } else if (secondSpellEnemy1.type !== 'ImprovementDamage' || 
            secondSpellEnemy1.type !== 'ImprovementHeal' || 
            secondSpellEnemy1.type !== 'ImprovementHeal' || 
            secondSpellEnemy1.type !== 'Escape' && randUseSpell === 1) {
            secondSpellEnemy1.level += 1;
            if (round === 1) {
                heroUser[0].hp -= secondSpellEnemy1.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage1 / enemies[0].spells.secondSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= secondSpellEnemy1.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage2 / enemies[0].spells.secondSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= secondSpellEnemy1.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage3 / enemies[0].spells.secondSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= secondSpellEnemy1.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage4 / enemies[0].spells.secondSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${secondSpellEnemy1.name}`;
        } else if (thirdSpellEnemy1.type !== 'ImprovementDamage' || 
            thirdSpellEnemy1.type !== 'ImprovementHeal' || 
            thirdSpellEnemy1.type !== 'ImprovementHeal' || 
            thirdSpellEnemy1.type !== 'Escape' && randUseSpell === 2) {
            thirdSpellEnemy1.level += 1;
            if (round === 1) {
                heroUser[0].hp -= thirdSpellEnemy1.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage1 / enemies[0].spells.thirdSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= thirdSpellEnemy1.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage2 / enemies[0].spells.thirdSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= thirdSpellEnemy1.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage3 / enemies[0].spells.thirdSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= thirdSpellEnemy1.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage4 / enemies[0].spells.thirdSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${thirdSpellEnemy1.name}`;
        } else if (ultimateSpellEnemy1.type !== 'ImprovementDamage' || 
            ultimateSpellEnemy1.type !== 'ImprovementHeal' || 
            ultimateSpellEnemy1.type !== 'ImprovementHeal' || 
            ultimateSpellEnemy1.type !== 'Escape' && enemies[0].level >= 6 && randUseSpell === 3) {
            ultimateSpellEnemy1.level += 1;
            if (round === 1) {
                heroUser[0].hp -= ultimateSpellEnemy1.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage1 / enemies[0].spells.ultimate.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= ultimateSpellEnemy1.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage2 / enemies[0].spells.ultimate.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= ultimateSpellEnemy1.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage3 / enemies[0].spells.ultimate.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= ultimateSpellEnemy1.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage4 / enemies[0].spells.ultimate.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${ultimateSpellEnemy1.name}`;
        }

        setTimeout(() => {
            if (firstSpellUser.level >= 1) {
                if (firstSpellUser.ultimate !== true) {
                    document.getElementById('useSpell1').style.display = "block";
                } else if (firstSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell1').style.display = "block";
                }
    
                document.getElementById('useSpell1').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= firstSpellUser.mana1) {
                            enemies[0].hp -= firstSpellUser.damage1;
                            heroUser[0].mana -= firstSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage1 / enemies[0].spells.firstSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= firstSpellUser.mana2) {
                            enemies[0].hp -= firstSpellUser.damage2;
                            heroUser[0].mana -= firstSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage2 / enemies[0].spells.firstSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= firstSpellUser.mana3) {
                            enemies[0].hp -= firstSpellUser.damage3;
                            heroUser[0].mana -= firstSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[0].spells.firstSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= firstSpellUser.mana4) {
                            enemies[0].hp -= firstSpellUser.damage4;
                            heroUser[0].mana -= firstSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[0].spells.firstSpell.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    }
                });
            }
    
            if (secondSpellUser.level >= 1) {
                if (secondSpellUser.ultimate !== true) {
                    document.getElementById('useSpell2').style.display = "block";
                } else if (secondSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell2').style.display = "block";
                }
    
                document.getElementById('useSpell2').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= secondSpellUser.mana1) {
                            enemies[0].hp -= secondSpellUser.damage1;
                            heroUser[0].mana -= secondSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage1 / enemies[0].spells.secondSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= secondSpellUser.mana2) {
                            enemies[0].hp -= secondSpellUser.damage2;
                            heroUser[0].mana -= secondSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage2 / enemies[0].spells.secondSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= secondSpellUser.mana3) {
                            enemies[0].hp -= secondSpellUser.damage3;
                            heroUser[0].mana -= secondSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage3 / enemies[0].spells.secondSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= secondSpellUser.mana4) {
                            enemies[0].hp -= secondSpellUser.damage4;
                            heroUser[0].mana -= secondSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage4 / enemies[0].spells.secondSpell.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });
            }
    
            if (thirdSpellUser.level >= 1) {
                if (thirdSpellUser.ultimate !== true) {
                    document.getElementById('useSpell3').style.display = "block";
                } else if (thirdSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell3').style.display = "block";
                }
    
                document.getElementById('useSpell3').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= thirdSpellUser.mana1) {
                            enemies[0].hp -= thirdSpellUser.damage1;
                            heroUser[0].mana -= thirdSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage1 / enemies[0].spells.thirdSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= thirdSpellUser.mana2) {
                            enemies[0].hp -= thirdSpellUser.damage2;
                            heroUser[0].mana -= thirdSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage2 / enemies[0].spells.thirdSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= thirdSpellUser.mana3) {
                            enemies[0].hp -= thirdSpellUser.damage3;
                            heroUser[0].mana -= thirdSpellUser.mana3;
                            
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage3 / enemies[0].spells.thirdSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= thirdSpellUser.mana3) {
                            enemies[0].hp -= thirdSpellUser.damage4;
                            heroUser[0].mana -= thirdSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage4 / enemies[0].spells.thirdSpell.damage4)}%`;
    
                            document.getElementById('enemyHp').style.width -= `${thirdSpellUser.damage4}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });    
            }
    
            if (ultimateSpellUser.level >= 1) {
                if (ultimateSpellUser.ultimate !== true) {
                    document.getElementById('useUltimate').style.display = "block";
                } else if (ultimateSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useUltimate').style.display = "block";
                }
    
                document.getElementById('useUltimate').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana1) {
                            enemies[0].hp -= ultimateSpellUser.damage1;
                            heroUser[0].mana -= ultimateSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage1 / enemies[0].spells.ultimate.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana2) {
                            enemies[0].hp -= ultimateSpellUser.damage2;
                            heroUser[0].mana -= ultimateSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage2 / enemies[0].spells.ultimate.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana3) {
                            enemies[0].hp -= ultimateSpellUser.damage3;
                            heroUser[0].mana -= ultimateSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage3 / enemies[0].spells.ultimate.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana4) {
                            enemies[0].hp -= ultimateSpellUser.damage4;
                            heroUser[0].mana -= ultimateSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[0].hp}/${enemies[0].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage4 / enemies[0].spells.ultimate.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });   
            }
        }, 2000);
    } else if (counterEnemy === 2) {
        if (firstSpellEnemy2.type !== 'ImprovementDamage' || 
            firstSpellEnemy2.type !== 'ImprovementHeal' || 
            firstSpellEnemy2.type !== 'ImprovementHeal' || 
            firstSpellEnemy2.type !== 'Escape' && randUseSpell === 0) {
            firstSpellEnemy2.level += 1;
            if (round === 1) {
                heroUser[0].hp -= firstSpellEnemy2.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage1 / enemies[1].spells.firstSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= firstSpellEnemy2.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage2 / enemies[1].spells.firstSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= firstSpellEnemy2.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[1].spells.firstSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= firstSpellEnemy2.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage4 / enemies[1].spells.firstSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${firstSpellEnemy2.name}`;
        } else if (secondSpellEnemy2.type !== 'ImprovementDamage' || 
            secondSpellEnemy2.type !== 'ImprovementHeal' || 
            secondSpellEnemy2.type !== 'ImprovementHeal' || 
            secondSpellEnemy2.type !== 'Escape' && randUseSpell === 1) {
            secondSpellEnemy2.level += 1;
            if (round === 1) {
                heroUser[0].hp -= secondSpellEnemy2.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage1 / enemies[1].spells.secondSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= secondSpellEnemy2.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage2 / enemies[1].spells.secondSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= secondSpellEnemy2.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage3 / enemies[1].spells.secondSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= secondSpellEnemy2.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage4 / enemies[1].spells.secondSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${secondSpellEnemy2.name}`;
        } else if (thirdSpellEnemy2.type !== 'ImprovementDamage' || 
            thirdSpellEnemy2.type !== 'ImprovementHeal' || 
            thirdSpellEnemy2.type !== 'ImprovementHeal' || 
            thirdSpellEnemy2.type !== 'Escape' && randUseSpell === 2) {
            thirdSpellEnemy2.level += 1;
            if (round === 1) {
                heroUser[0].hp -= thirdSpellEnemy2.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage1 / enemies[1].spells.thirdSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= thirdSpellEnemy2.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage2 / enemies[1].spells.thirdSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= thirdSpellEnemy2.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage3 / enemies[1].spells.thirdSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= thirdSpellEnemy2.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage4 / enemies[1].spells.thirdSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${thirdSpellEnemy2.name}`;
        } else if (ultimateSpellEnemy2.type !== 'ImprovementDamage' || 
            ultimateSpellEnemy2.type !== 'ImprovementHeal' || 
            ultimateSpellEnemy2.type !== 'ImprovementHeal' || 
            ultimateSpellEnemy2.type !== 'Escape' && enemies[0].level >= 6 && randUseSpell === 3) {
            ultimateSpellEnemy2.level += 1;
            if (round === 1) {
                heroUser[0].hp -= ultimateSpellEnemy2.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage1 / enemies[1].spells.ultimate.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= ultimateSpellEnemy2.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage2 / enemies[1].spells.ultimate.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= ultimateSpellEnemy2.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage3 / enemies[1].spells.ultimate.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= ultimateSpellEnemy2.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage4 / enemies[1].spells.ultimate.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${ultimateSpellEnemy2.name}`;
        }

        setTimeout(() => {
            if (firstSpellUser.level >= 1) {
                if (firstSpellUser.ultimate !== true) {
                    document.getElementById('useSpell1').style.display = "block";
                } else if (firstSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell1').style.display = "block";
                }
    
                document.getElementById('useSpell1').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= firstSpellUser.mana1) {
                            enemies[1].hp -= firstSpellUser.damage1;
                            heroUser[0].mana -= firstSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage1 / enemies[1].spells.firstSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= firstSpellUser.mana2) {
                            enemies[1].hp -= firstSpellUser.damage2;
                            heroUser[0].mana -= firstSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage2 / enemies[1].spells.firstSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= firstSpellUser.mana3) {
                            enemies[1].hp -= firstSpellUser.damage3;
                            heroUser[0].mana -= firstSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[1].spells.firstSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= firstSpellUser.mana4) {
                            enemies[1].hp -= firstSpellUser.damage4;
                            heroUser[0].mana -= firstSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[1].spells.firstSpell.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    }
                });
            }
    
            if (secondSpellUser.level >= 1) {
                if (secondSpellUser.ultimate !== true) {
                    document.getElementById('useSpell2').style.display = "block";
                } else if (secondSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell2').style.display = "block";
                }
    
                document.getElementById('useSpell2').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= secondSpellUser.mana1) {
                            enemies[1].hp -= secondSpellUser.damage1;
                            heroUser[0].mana -= secondSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage1 / enemies[1].spells.secondSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= secondSpellUser.mana2) {
                            enemies[1].hp -= secondSpellUser.damage2;
                            heroUser[0].mana -= secondSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage2 / enemies[1].spells.secondSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= secondSpellUser.mana3) {
                            enemies[1].hp -= secondSpellUser.damage3;
                            heroUser[0].mana -= secondSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage3 / enemies[1].spells.secondSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= secondSpellUser.mana4) {
                            enemies[1].hp -= secondSpellUser.damage4;
                            heroUser[0].mana -= secondSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage4 / enemies[1].spells.secondSpell.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });
            }
    
            if (thirdSpellUser.level >= 1) {
                if (thirdSpellUser.ultimate !== true) {
                    document.getElementById('useSpell3').style.display = "block";
                } else if (thirdSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell3').style.display = "block";
                }
    
                document.getElementById('useSpell3').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= thirdSpellUser.mana1) {
                            enemies[1].hp -= thirdSpellUser.damage1;
                            heroUser[0].mana -= thirdSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage1 / enemies[1].spells.thirdSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= thirdSpellUser.mana2) {
                            enemies[1].hp -= thirdSpellUser.damage2;
                            heroUser[0].mana -= thirdSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage2 / enemies[1].spells.thirdSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= thirdSpellUser.mana3) {
                            enemies[1].hp -= thirdSpellUser.damage3;
                            heroUser[0].mana -= thirdSpellUser.mana3;
                            
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage3 / enemies[1].spells.thirdSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= thirdSpellUser.mana3) {
                            enemies[1].hp -= thirdSpellUser.damage4;
                            heroUser[0].mana -= thirdSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage4 / enemies[1].spells.thirdSpell.damage4)}%`;
    
                            document.getElementById('enemyHp').style.width -= `${thirdSpellUser.damage4}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });    
            }
    
            if (ultimateSpellUser.level >= 1) {
                if (ultimateSpellUser.ultimate !== true) {
                    document.getElementById('useUltimate').style.display = "block";
                } else if (ultimateSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useUltimate').style.display = "block";
                }
    
                document.getElementById('useUltimate').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana1) {
                            enemies[1].hp -= ultimateSpellUser.damage1;
                            heroUser[0].mana -= ultimateSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage1 / enemies[1].spells.ultimate.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana2) {
                            enemies[1].hp -= ultimateSpellUser.damage2;
                            heroUser[0].mana -= ultimateSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage2 / enemies[1].spells.ultimate.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana3) {
                            enemies[1].hp -= ultimateSpellUser.damage3;
                            heroUser[0].mana -= ultimateSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage3 / enemies[1].spells.ultimate.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana4) {
                            enemies[1].hp -= ultimateSpellUser.damage4;
                            heroUser[0].mana -= ultimateSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[1].hp}/${enemies[1].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage4 / enemies[1].spells.ultimate.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });   
            }
        }, 2000);
    } else if (counterEnemy === 3) {
        if (firstSpellEnemy3.type !== 'ImprovementDamage' || 
            firstSpellEnemy3.type !== 'ImprovementHeal' || 
            firstSpellEnemy3.type !== 'ImprovementHeal' || 
            firstSpellEnemy3.type !== 'Escape' && randUseSpell === 0) {
            firstSpellEnemy3.level += 1;
            if (round === 1) {
                heroUser[0].hp -= firstSpellEnemy3.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage1 / enemies[2].spells.firstSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= firstSpellEnemy3.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage2 / enemies[2].spells.firstSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= firstSpellEnemy3.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[2].spells.firstSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= firstSpellEnemy3.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage4 / enemies[2].spells.firstSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${firstSpellEnemy3.name}`;
        } else if (secondSpellEnemy3.type !== 'ImprovementDamage' || 
            secondSpellEnemy3.type !== 'ImprovementHeal' || 
            secondSpellEnemy3.type !== 'ImprovementHeal' || 
            secondSpellEnemy3.type !== 'Escape' && randUseSpell === 1) {
            secondSpellEnemy3.level += 1;
            if (round === 1) {
                heroUser[0].hp -= secondSpellEnemy3.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage1 / enemies[2].spells.secondSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= secondSpellEnemy3.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage2 / enemies[2].spells.secondSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= secondSpellEnemy3.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage3 / enemies[2].spells.secondSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= secondSpellEnemy3.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage4 / enemies[2].spells.secondSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${secondSpellEnemy3.name}`;
        } else if (thirdSpellEnemy3.type !== 'ImprovementDamage' || 
            thirdSpellEnemy3.type !== 'ImprovementHeal' || 
            thirdSpellEnemy3.type !== 'ImprovementHeal' || 
            thirdSpellEnemy3.type !== 'Escape' && randUseSpell === 2) {
            thirdSpellEnemy3.level += 1;
            if (round === 1) {
                heroUser[0].hp -= thirdSpellEnemy3.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage1 / enemies[2].spells.thirdSpell.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= thirdSpellEnemy3.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage2 / enemies[2].spells.thirdSpell.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= thirdSpellEnemy3.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage3 / enemies[2].spells.thirdSpell.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= thirdSpellEnemy3.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage4 / enemies[2].spells.thirdSpell.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${thirdSpellEnemy3.name}`;
        } else if (ultimateSpellEnemy3.type !== 'ImprovementDamage' || 
            ultimateSpellEnemy3.type !== 'ImprovementHeal' || 
            ultimateSpellEnemy3.type !== 'ImprovementHeal' || 
            ultimateSpellEnemy3.type !== 'Escape' && enemies[2].level >= 6 && randUseSpell === 3) {
            ultimateSpellEnemy3.level += 1;
            if (round === 1) {
                heroUser[0].hp -= ultimateSpellEnemy3.damage1;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage1 / enemies[2].spells.ultimate.damage1)}%`;
            } else if (round === 2) {
                heroUser[0].hp -= ultimateSpellEnemy3.damage2;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage2 / enemies[2].spells.ultimate.damage2)}%`;
            } else if (round === 3) {
                heroUser[0].hp -= ultimateSpellEnemy3.damage3;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage3 / enemies[2].spells.ultimate.damage3)}%`;
            } else if (round >= 4) {
                heroUser[0].hp -= ultimateSpellEnemy3.damage4;
                document.getElementById('heroHp').style.width = `${parseInt(document.getElementById('heroHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage4 / enemies[2].spells.ultimate.damage4)}%`;
            }

            document.getElementById('heroHp').innerHTML = `${heroUser[0].hp}/${startHp}`;
            document.getElementById('heroHp').style.width = `${heroUser[0].hp}%`;
            document.getElementById('timerRound').innerHTML = `Противник использует: ${ultimateSpellEnemy3.name}`;
        }

        setTimeout(() => {
            if (firstSpellUser.level >= 1) {
                if (firstSpellUser.ultimate !== true) {
                    document.getElementById('useSpell1').style.display = "block";
                } else if (firstSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell1').style.display = "block";
                }
    
                document.getElementById('useSpell1').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= firstSpellUser.mana1) {
                            enemies[2].hp -= firstSpellUser.damage1;
                            heroUser[0].mana -= firstSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage1 / enemies[2].spells.firstSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= firstSpellUser.mana2) {
                            enemies[2].hp -= firstSpellUser.damage2;
                            heroUser[0].mana -= firstSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage2 / enemies[2].spells.firstSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= firstSpellUser.mana3) {
                            enemies[2].hp -= firstSpellUser.damage3;
                            heroUser[0].mana -= firstSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[2].spells.firstSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= firstSpellUser.mana4) {
                            enemies[2].hp -= firstSpellUser.damage4;
                            heroUser[0].mana -= firstSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.firstSpell.damage3 / enemies[2].spells.firstSpell.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell1').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                heroUser[0].level += 1;
                                heroUser[0].spellPoints += 1;
                                mainGame();
                            }, 5000);
                        }
                    }
                });
            }
    
            if (secondSpellUser.level >= 1) {
                if (secondSpellUser.ultimate !== true) {
                    document.getElementById('useSpell2').style.display = "block";
                } else if (secondSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell2').style.display = "block";
                }
    
                document.getElementById('useSpell2').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= secondSpellUser.mana1) {
                            enemies[2].hp -= secondSpellUser.damage1;
                            heroUser[0].mana -= secondSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage1 / enemies[2].spells.secondSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= secondSpellUser.mana2) {
                            enemies[2].hp -= secondSpellUser.damage2;
                            heroUser[0].mana -= secondSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage2 / enemies[2].spells.secondSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= secondSpellUser.mana3) {
                            enemies[2].hp -= secondSpellUser.damage3;
                            heroUser[0].mana -= secondSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage3 / enemies[2].spells.secondSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= secondSpellUser.mana4) {
                            enemies[2].hp -= secondSpellUser.damage4;
                            heroUser[0].mana -= secondSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.secondSpell.damage4 / enemies[2].spells.secondSpell.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell2').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });
            }
    
            if (thirdSpellUser.level >= 1) {
                if (thirdSpellUser.ultimate !== true) {
                    document.getElementById('useSpell3').style.display = "block";
                } else if (thirdSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useSpell3').style.display = "block";
                }
    
                document.getElementById('useSpell3').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= thirdSpellUser.mana1) {
                            enemies[2].hp -= thirdSpellUser.damage1;
                            heroUser[0].mana -= thirdSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage1 / enemies[2].spells.thirdSpell.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= thirdSpellUser.mana2) {
                            enemies[2].hp -= thirdSpellUser.damage2;
                            heroUser[0].mana -= thirdSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage2 / enemies[2].spells.thirdSpell.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= thirdSpellUser.mana3) {
                            enemies[2].hp -= thirdSpellUser.damage3;
                            heroUser[0].mana -= thirdSpellUser.mana3;
                            
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage3 / enemies[2].spells.thirdSpell.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= thirdSpellUser.mana3) {
                            enemies[2].hp -= thirdSpellUser.damage4;
                            heroUser[0].mana -= thirdSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.thirdSpell.damage4 / enemies[2].spells.thirdSpell.damage4)}%`;
    
                            document.getElementById('enemyHp').style.width -= `${thirdSpellUser.damage4}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useSpell3').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });    
            }
    
            if (ultimateSpellUser.level >= 1) {
                if (ultimateSpellUser.ultimate !== true) {
                    document.getElementById('useUltimate').style.display = "block";
                } else if (ultimateSpellUser.ultimate === true && heroUser[0].level >= 6) {
                    document.getElementById('useUltimate').style.display = "block";
                }
    
                document.getElementById('useUltimate').addEventListener('click', () => {
                    if (round === 1) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana1) {
                            enemies[2].hp -= ultimateSpellUser.damage1;
                            heroUser[0].mana -= ultimateSpellUser.mana1;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage1 / enemies[2].spells.ultimate.damage1)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 2) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana2) {
                            enemies[2].hp -= ultimateSpellUser.damage2;
                            heroUser[0].mana -= ultimateSpellUser.mana2;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage2 / enemies[2].spells.ultimate.damage2)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round === 3) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana3) {
                            enemies[2].hp -= ultimateSpellUser.damage3;
                            heroUser[0].mana -= ultimateSpellUser.mana3;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage3 / enemies[2].spells.ultimate.damage3)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    } else if (round >= 4) {
                        if (heroUser[0].mana >= ultimateSpellUser.mana4) {
                            enemies[2].hp -= ultimateSpellUser.damage4;
                            heroUser[0].mana -= ultimateSpellUser.mana4;
    
                            document.getElementById('enemyHp').innerHTML = `${enemies[2].hp}/${enemies[2].startHp}`;
                            document.getElementById('enemyHp').style.width = `${parseInt(document.getElementById('enemyHp').style.width) - Math.round(heroUser[0].spells.ultimate.damage4 / enemies[2].spells.ultimate.damage4)}%`;
    
                            document.getElementById('heroMana').innerHTML = `${heroUser[0].mana}/${heroUser[0].startMana}`;
                            document.getElementById('useUltimate').style.display = "none";
    
                            setTimeout(() => {
                                counterEnemy === 4 ? counterEnemy = 1 : counterEnemy++;
                                mainGame();
                            }, 10000);
                        }
                    }
                });   
            }
        }, 2000);
    }
}

// Генерируем рандомное число для создания врага
let random_enemy1 = getRandNumb(0, 2);
let random_enemy2 = getRandNumb(0, 2);
let random_enemy3 = getRandNumb(0, 2);

// Генерируем рандомное число для создания скиллов врага 1
let random_enemy_spell1 = getRandNumb(0, 2);
let random_enemy_spell2 = getRandNumb(0, 2);
let random_enemy_spell3 = getRandNumb(0, 2);
let random_enemy_ultimate = getRandNumb(0, 2);

// Генерируем рандомное число для создания скиллов врага 2 
let random_enemy2_spell1 = getRandNumb(0, 2);
let random_enemy2_spell2 = getRandNumb(0, 2);
let random_enemy2_spell3 = getRandNumb(0, 2);
let random_enemy2_ultimate = getRandNumb(0, 2);

// Генерируем рандомное число для создания скиллов врага 3
let random_enemy3_spell1 = getRandNumb(0, 2);
let random_enemy3_spell2 = getRandNumb(0, 2);
let random_enemy3_spell3 = getRandNumb(0, 2);
let random_enemy3_ultimate = getRandNumb(0, 2);

// Первый враг
enemies[0].name = array_heroes_casino[random_enemy1].name;
enemies[0].image = array_heroes_casino[random_enemy1].image;
enemies[0].startHp = array_heroes_casino[random_enemy1].startHp;
enemies[0].startMana = array_heroes_casino[random_enemy1].startMana;
enemies[0].hp = enemies[0].startHp;
enemies[0].mana = enemies[0].startMana;

// Второй враг
enemies[1].name = array_heroes_casino[random_enemy2].name;
enemies[1].image = array_heroes_casino[random_enemy2].image;
enemies[1].startHp = array_heroes_casino[random_enemy2].startHp;
enemies[1].startMana = array_heroes_casino[random_enemy2].startMana;
enemies[1].hp = enemies[1].startHp;
enemies[1].mana = enemies[1].startMana;

// Третий враг
enemies[2].name = array_heroes_casino[random_enemy3].name;
enemies[2].image = array_heroes_casino[random_enemy3].image;
enemies[2].startHp = array_heroes_casino[random_enemy3].startHp;
enemies[2].startMana = array_heroes_casino[random_enemy3].startMana;
enemies[2].hp = enemies[2].startHp;
enemies[2].mana = enemies[2].startMana;

function generationEnemy() {
    // Скиллы первого врага
    let firstSpell = enemies[0].spells.firstSpell = array_heroes_casino[random_enemy_spell1].firstSpell;
    let secondSpell = enemies[0].spells.secondSpell = array_heroes_casino[random_enemy_spell2].secondSpell;
    let thirdSpell = enemies[0].spells.thirdSpell = array_heroes_casino[random_enemy_spell3].thirdSpell;
    let ultimate = enemies[0].spells.ultimate = array_heroes_casino[random_enemy_ultimate].ultimate;
    
    // Скиллы второго врага
    let firstSpell2 = enemies[1].spells.firstSpell = array_heroes_casino[random_enemy2_spell1].firstSpell;
    let secondSpell2 = enemies[1].spells.secondSpell = array_heroes_casino[random_enemy2_spell2].secondSpell;
    let thirdSpell2 = enemies[1].spells.thirdSpell = array_heroes_casino[random_enemy2_spell3].thirdSpell;
    let ultimateSpell2 = enemies[1].spells.ultimate = array_heroes_casino[random_enemy2_ultimate].ultimate;
    
    // Скиллы третьего врага
    let firstSpell3 = enemies[2].spells.firstSpell = array_heroes_casino[random_enemy3_spell1].firstSpell;
    let secondSpell3 = enemies[2].spells.secondSpell = array_heroes_casino[random_enemy3_spell2].secondSpell;
    let thirdSpell3 = enemies[2].spells.thirdSpell = array_heroes_casino[random_enemy3_spell3].thirdSpell;
    let ultimateSpell3 = enemies[2].spells.ultimate = array_heroes_casino[random_enemy3_ultimate].ultimate;

    switch (counterEnemy) {
        case 1: 
            document.getElementById('enemies').innerHTML = `
                <div class="d-flex justify-content-center">
                    <div class="card mb-3" style="background: none; border: none;" id="enemy-hero">
                        <div class="row g-0">
                            <div class="col-md-4" style="width: 160px; height: 212px;">
                                <img src="${enemies[0].image}" class="card-img-top" alt="${enemies[0].name}">
                                <div class="progress">
                                    <div class="progress-bar bg-danger" id="enemyHp" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${enemies[0].hp}/${enemies[0].startHp}</div>
                                </div>
                                <div class="level-enemy bg-warning">
                                    <span class="text-dark" style="padding-left: 0.5em;" id="level-text-enemy">Уровень: ${enemies[0].level}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell1">
                        <img src="${firstSpell.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${firstSpell.name}" data-bs-toggle="collapse" data-bs-target="#firstSpellEnemy">

                        <div id="firstSpellEnemy" class="accordion-collapse collapse" aria-labelledby="firstSpell" data-bs-parent="#firstSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${firstSpell.name}</h5>
                                <p class="card-text">${firstSpell.description}</p>
                                <p class="card-text text-warning">${firstSpell.chance1 !== undefined ? `\ Шанс: ${firstSpell.chance1}% / ${firstSpell.chance2}% / ${firstSpell.chance3}% / ${firstSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${firstSpell.mana4 !== undefined ? `\ Мана: ${firstSpell.mana1} / ${firstSpell.mana2} / ${firstSpell.mana3} / ${firstSpell.mana4} ` : `Мана: ${firstSpell.mana1} / ${firstSpell.mana2} / ${firstSpell.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${firstSpell.cooldown4 !== undefined ? `\ Перезарядка: ${firstSpell.cooldown1}/${firstSpell.cooldown2}/${firstSpell.cooldown3}/${firstSpell.cooldown4}` : `Перезарядка: ${firstSpell.cooldown1}/${firstSpell.cooldown2}/${firstSpell.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell2">
                        <img src="${secondSpell.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${secondSpell.name}" data-bs-toggle="collapse" data-bs-target="#secondSpellEnemy">

                        <div id="secondSpellEnemy" class="accordion-collapse collapse" aria-labelledby="secondSpell" data-bs-parent="#secondSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${secondSpell.name}</h5>
                                <p class="card-text">${secondSpell.description}</p>
                                <p class="card-text text-warning">${secondSpell.chance1 !== undefined ? `\ Шанс: ${secondSpell.chance1}% / ${secondSpell.chance2}% / ${secondSpell.chance3}% / ${secondSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${secondSpell.mana4 !== undefined ? `\ Мана: ${secondSpell.mana1} / ${secondSpell.mana2} / ${secondSpell.mana3} / ${secondSpell.mana4} ` : `Мана: ${secondSpell.mana1} / ${secondSpell.mana2} / ${secondSpell.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${secondSpell.cooldown4 !== undefined ? `\ Перезарядка: ${secondSpell.cooldown1}/${secondSpell.cooldown2}/${secondSpell.cooldown3}/${secondSpell.cooldown4}` : `Перезарядка: ${secondSpell.cooldown1}/${secondSpell.cooldown2}/${secondSpell.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell3">
                        <img src="${thirdSpell.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${thirdSpell.name}" data-bs-toggle="collapse" data-bs-target="#thirdSpellEnemy">

                        <div id="thirdSpellEnemy" class="accordion-collapse collapse" aria-labelledby="thirdSpell" data-bs-parent="#thirdSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${thirdSpell.name}</h5>
                                <p class="card-text">${thirdSpell.description}</p>
                                <p class="card-text text-warning">${thirdSpell.chance1 !== undefined ? `\ Шанс: ${thirdSpell.chance1}% / ${thirdSpell.chance2}% / ${thirdSpell.chance3}% / ${thirdSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${thirdSpell.mana4 !== undefined ? `\ Мана: ${thirdSpell.mana1} / ${thirdSpell.mana2} / ${thirdSpell.mana3} / ${thirdSpell.mana4} ` : `Мана: ${thirdSpell.mana1} / ${thirdSpell.mana2} / ${thirdSpell.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${thirdSpell.cooldown4 !== undefined ? `\ Перезарядка: ${thirdSpell.cooldown1}/${thirdSpell.cooldown2}/${thirdSpell.cooldown3}/${thirdSpell.cooldown4}` : `Перезарядка: ${thirdSpell.cooldown1}/${thirdSpell.cooldown2}/${thirdSpell.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell4">
                        <img src="${ultimate.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${ultimate.name}" data-bs-toggle="collapse" data-bs-target="#ultimateEnemy">

                        <div id="ultimateEnemy" class="accordion-collapse collapse" aria-labelledby="ultimateEnemy" data-bs-parent="#ultimateEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${ultimate.name}</h5>
                                <p class="card-text">${ultimate.description}</p>
                                <p class="card-text text-warning">${ultimate.chance1 !== undefined ? `\ Шанс: ${ultimate.chance1}% / ${ultimate.chance2}% / ${ultimate.chance3}%` : ''}</p>
                                <p class="card-text text-primary">${ultimate.mana4 !== undefined ? `\ Мана: ${ultimate.mana1} / ${ultimate.mana2} / ${ultimate.mana3} / ${ultimate.mana4} ` : `Мана: ${ultimate.mana1} / ${ultimate.mana2} / ${ultimate.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${ultimate.cooldown4 !== undefined ? `\ Перезарядка: ${ultimate.cooldown1}/${ultimate.cooldown2}/${ultimate.cooldown3}/${ultimate.cooldown4}` : `Перезарядка: ${ultimate.cooldown1}/${ultimate.cooldown2}/${ultimate.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        ; break;

        case 2: 
            document.getElementById('enemies').innerHTML = `
                <div class="d-flex justify-content-center">
                    <div class="card mb-3" style="background: none; border: none;" id="enemy-hero">
                        <div class="row g-0">
                            <div class="col-md-4" style="width: 160px; height: 212px;">
                                <img src="${enemies[1].image}" class="card-img-top" alt="${enemies[1].name}">
                                <div class="progress">
                                    <div class="progress-bar bg-danger" id="enemyHp" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${enemies[1].hp}/${enemies[1].startHp}</div>
                                </div>
                                <div class="level-enemy bg-warning">
                                    <span class="text-dark" style="padding-left: 0.5em;" id="level-text-enemy">Уровень: ${enemies[1].level}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell1">
                        <img src="${firstSpell2.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${firstSpell2.name}" data-bs-toggle="collapse" data-bs-target="#firstSpell2Enemy">

                        <div id="firstSpell2Enemy" class="accordion-collapse collapse" aria-labelledby="firstSpell" data-bs-parent="#firstSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${firstSpell2.name}</h5>
                                <p class="card-text">${firstSpell2.description}</p>
                                <p class="card-text text-warning">${firstSpell2.chance1 !== undefined ? `\ Шанс: ${firstSpell2.chance1}% / ${firstSpell2.chance2}% / ${firstSpell2.chance3}% / ${firstSpell2.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${firstSpell2.mana4 !== undefined ? `\ Мана: ${firstSpell2.mana1} / ${firstSpell2.mana2} / ${firstSpell2.mana3} / ${firstSpell2.mana4} ` : `Мана: ${firstSpell2.mana1} / ${firstSpell2.mana2} / ${firstSpell2.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${firstSpell2.cooldown4 !== undefined ? `\ Перезарядка: ${firstSpell2.cooldown1}/${firstSpell2.cooldown2}/${firstSpell2.cooldown3}/${firstSpell2.cooldown4}` : `Перезарядка: ${firstSpell2.cooldown1}/${firstSpell2.cooldown2}/${firstSpell2.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell2">
                        <img src="${secondSpell2.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${secondSpell2.name}" data-bs-toggle="collapse" data-bs-target="#secondSpell2Enemy">

                        <div id="secondSpell2Enemy" class="accordion-collapse collapse" aria-labelledby="secondSpell" data-bs-parent="#secondSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${secondSpell2.name}</h5>
                                <p class="card-text">${secondSpell2.description}</p>
                                <p class="card-text text-warning">${secondSpell2.chance1 !== undefined ? `\ Шанс: ${secondSpell2.chance1}% / ${secondSpell2.chance2}% / ${secondSpell2.chance3}% / ${secondSpell2.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${secondSpell2.mana4 !== undefined ? `\ Мана: ${secondSpell2.mana1} / ${secondSpell2.mana2} / ${secondSpell2.mana3} / ${secondSpell2.mana4} ` : `Мана: ${secondSpell2.mana1} / ${secondSpell2.mana2} / ${secondSpell2.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${secondSpell2.cooldown4 !== undefined ? `\ Перезарядка: ${secondSpell2.cooldown1}/${secondSpell2.cooldown2}/${secondSpell2.cooldown3}/${secondSpell2.cooldown4}` : `Перезарядка: ${secondSpell2.cooldown1}/${secondSpell2.cooldown2}/${secondSpell2.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell3">
                        <img src="${thirdSpell2.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${thirdSpell2.name}" data-bs-toggle="collapse" data-bs-target="#thirdSpell2Enemy">

                        <div id="thirdSpell2Enemy" class="accordion-collapse collapse" aria-labelledby="thirdSpell" data-bs-parent="#thirdSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${thirdSpell2.name}</h5>
                                <p class="card-text">${thirdSpell2.description}</p>
                                <p class="card-text text-warning">${thirdSpell2.chance1 !== undefined ? `\ Шанс: ${thirdSpell2.chance1}% / ${thirdSpell2.chance2}% / ${thirdSpell2.chance3}% / ${thirdSpell2.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${thirdSpell2.mana4 !== undefined ? `\ Мана: ${thirdSpell2.mana1} / ${thirdSpell2.mana2} / ${thirdSpell2.mana3} / ${thirdSpell2.mana4} ` : `Мана: ${thirdSpell2.mana1} / ${thirdSpell2.mana2} / ${thirdSpell2.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${thirdSpell2.cooldown4 !== undefined ? `\ Перезарядка: ${thirdSpell2.cooldown1}/${thirdSpell2.cooldown2}/${thirdSpell2.cooldown3}/${thirdSpell2.cooldown4}` : `Перезарядка: ${thirdSpell2.cooldown1}/${thirdSpell2.cooldown2}/${thirdSpell2.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell4">
                        <img src="${ultimateSpell2.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${ultimateSpell2.name}" data-bs-toggle="collapse" data-bs-target="#ultimate2Enemy">

                        <div id="ultimate2Enemy" class="accordion-collapse collapse" aria-labelledby="ultimateEnemy" data-bs-parent="#ultimateEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${ultimateSpell2.name}</h5>
                                <p class="card-text">${ultimateSpell2.description}</p>
                                <p class="card-text text-warning">${ultimateSpell2.chance1 !== undefined ? `\ Шанс: ${ultimateSpell2.chance1}% / ${ultimateSpell2.chance2}% / ${ultimateSpell2.chance3}%` : ''}</p>
                                <p class="card-text text-primary">${ultimateSpell2.mana4 !== undefined ? `\ Мана: ${ultimateSpell2.mana1} / ${ultimateSpell2.mana2} / ${ultimateSpell2.mana3} / ${ultimateSpell2.mana4} ` : `Мана: ${ultimateSpell2.mana1} / ${ultimateSpell2.mana2} / ${ultimateSpell2.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${ultimateSpell2.cooldown4 !== undefined ? `\ Перезарядка: ${ultimateSpell2.cooldown1}/${ultimateSpell2.cooldown2}/${ultimateSpell2.cooldown3}/${ultimateSpell2.cooldown4}` : `Перезарядка: ${ultimateSpell2.cooldown1}/${ultimateSpell2.cooldown2}/${ultimateSpell2.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        ; break;

        case 3: 
            document.getElementById('enemies').innerHTML = `
                <div class="d-flex justify-content-center">
                    <div class="card mb-3" style="background: none; border: none;" id="enemy-hero">
                        <div class="row g-0">
                            <div class="col-md-4" style="width: 160px; height: 212px;">
                                <img src="${enemies[2].image}" class="card-img-top" alt="${enemies[2].name}">
                                <div class="progress">
                                    <div class="progress-bar bg-danger" id="enemyHp" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${enemies[2].hp}/${enemies[2].startHp}</div>
                                </div>
                                <div class="level-enemy bg-warning">
                                    <span class="text-dark" style="padding-left: 0.5em;" id="level-text-enemy">Уровень: ${enemies[2].level}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell1">
                        <img src="${firstSpell3.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${firstSpell3.name}" data-bs-toggle="collapse" data-bs-target="#firstSpell3Enemy">

                        <div id="firstSpell3Enemy" class="accordion-collapse collapse" aria-labelledby="firstSpell" data-bs-parent="#firstSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${firstSpell3.name}</h5>
                                <p class="card-text">${firstSpell3.description}</p>
                                <p class="card-text text-warning">${firstSpell3.chance1 !== undefined ? `\ Шанс: ${firstSpell3.chance1}% / ${firstSpell3.chance2}% / ${firstSpell3.chance3}% / ${firstSpell3.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${firstSpell3.mana4 !== undefined ? `\ Мана: ${firstSpell3.mana1} / ${firstSpell3.mana2} / ${firstSpell3.mana3} / ${firstSpell3.mana4} ` : `Мана: ${firstSpell3.mana1} / ${firstSpell3.mana2} / ${firstSpell3.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${firstSpell3.cooldown4 !== undefined ? `\ Перезарядка: ${firstSpell3.cooldown1}/${firstSpell3.cooldown2}/${firstSpell3.cooldown3}/${firstSpell3.cooldown4}` : `Перезарядка: ${firstSpell.cooldown1}/${firstSpell3.cooldown2}/${firstSpell3.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell2">
                        <img src="${secondSpell3.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${secondSpell3.name}" data-bs-toggle="collapse" data-bs-target="#secondSpell3Enemy">

                        <div id="secondSpell3Enemy" class="accordion-collapse collapse" aria-labelledby="secondSpell" data-bs-parent="#secondSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${secondSpell3.name}</h5>
                                <p class="card-text">${secondSpell3.description}</p>
                                <p class="card-text text-warning">${secondSpell3.chance1 !== undefined ? `\ Шанс: ${secondSpell3.chance1}% / ${secondSpell3.chance2}% / ${secondSpell3.chance3}% / ${secondSpell3.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${secondSpell3.mana4 !== undefined ? `\ Мана: ${secondSpell3.mana1} / ${secondSpell3.mana2} / ${secondSpell3.mana3} / ${secondSpell3.mana4} ` : `Мана: ${secondSpell3.mana1} / ${secondSpell3.mana2} / ${secondSpell3.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${secondSpell3.cooldown4 !== undefined ? `\ Перезарядка: ${secondSpell3.cooldown1}/${secondSpell3.cooldown2}/${secondSpell3.cooldown3}/${secondSpell3.cooldown4}` : `Перезарядка: ${secondSpell3.cooldown1}/${secondSpell3.cooldown2}/${secondSpell3.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell3">
                        <img src="${thirdSpell3.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${thirdSpell3.name}" data-bs-toggle="collapse" data-bs-target="#thirdSpell3Enemy">

                        <div id="thirdSpell3Enemy" class="accordion-collapse collapse" aria-labelledby="thirdSpell" data-bs-parent="#thirdSpellEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${thirdSpell3.name}</h5>
                                <p class="card-text">${thirdSpell3.description}</p>
                                <p class="card-text text-warning">${thirdSpell3.chance1 !== undefined ? `\ Шанс: ${thirdSpell3.chance1}% / ${thirdSpell3.chance2}% / ${thirdSpell3.chance3}% / ${thirdSpell3.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${thirdSpell3.mana4 !== undefined ? `\ Мана: ${thirdSpell3.mana1} / ${thirdSpell3.mana2} / ${thirdSpell3.mana3} / ${thirdSpell3.mana4} ` : `Мана: ${thirdSpell3.mana1} / ${thirdSpell3.mana2} / ${thirdSpell3.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${thirdSpell3.cooldown4 !== undefined ? `\ Перезарядка: ${thirdSpell3.cooldown1}/${thirdSpell3.cooldown2}/${thirdSpell3.cooldown3}/${thirdSpell3.cooldown4}` : `Перезарядка: ${thirdSpell3.cooldown1}/${thirdSpell3.cooldown2}/${thirdSpell3.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="card" style="background: none; border: none;" id="spell4">
                        <img src="${ultimateSpell3.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" class="card-img-top" alt="${ultimateSpell3.name}" data-bs-toggle="collapse" data-bs-target="#ultimate3Enemy">

                        <div id="ultimate3Enemy" class="accordion-collapse collapse" aria-labelledby="ultimateEnemy" data-bs-parent="#ultimateEnemy">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${ultimateSpell3.name}</h5>
                                <p class="card-text">${ultimateSpell3.description}</p>
                                <p class="card-text text-warning">${ultimateSpell3.chance1 !== undefined ? `\ Шанс: ${ultimateSpell3.chance1}% / ${ultimateSpell3.chance2}% / ${ultimateSpell3.chance3}%` : ''}</p>
                                <p class="card-text text-primary">${ultimateSpell3.mana4 !== undefined ? `\ Мана: ${ultimateSpell3.mana1} / ${ultimateSpell3.mana2} / ${ultimateSpell3.mana3} / ${ultimateSpell3.mana4} ` : `Мана: ${ultimateSpell3.mana1} / ${ultimateSpell3.mana2} / ${ultimateSpell3.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${ultimateSpell3.cooldown4 !== undefined ? `\ Перезарядка: ${ultimateSpell3.cooldown1}/${ultimateSpell3.cooldown2}/${ultimateSpell3.cooldown3}/${ultimateSpell3.cooldown4}` : `Перезарядка: ${ultimateSpell3.cooldown1}/${ultimateSpell3.cooldown2}/${ultimateSpell3.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        ; break;
    }
}

function mainGame() {    
    const firstSpell = heroUser[0].spells.firstSpell;
    const secondSpell = heroUser[0].spells.secondSpell;
    const thirdSpell = heroUser[0].spells.thirdSpell;
    const ultimate = heroUser[0].spells.ultimate;
    const heroName = heroUser[0].name;
    const heroImage = heroUser[0].image;
    const heroHp = heroUser[0].hp;
    const heroStartHp = heroUser[0].startHp;
    const heroMana = heroUser[0].mana;
    const heroStartMana = heroUser[0].startMana;
    let heroLevel = heroUser[0].level;

    round++;

    if (round > 1) {
        document.getElementById('heroUserLevel').innerHTML = `Уровень: ${heroLevel}`;
    }

    document.getElementById('music').src = "music/mainCasino.mp3";
    
    heroes.innerHTML = `
        <div class="card text-center" style="background: none; border: none;">
            <div class="card-body">
                <div class="d-flex justify-content-center" id="enemies"></div>

                <h2 class="text-center">VS</h2>

                <div class="d-flex justify-content-center mt-3">
                    <div class="card" style="background: none; border: none;" id="user-hero">
                        <div class="row g-0">
                            <div class="col-md-4" style="width: 160px; height: 212px;">
                                <img src="${heroImage}" class="card-img-top" alt="${heroName}">
                                <div class="card-img-overlay">
                                    <span class="badge bg-warning text-dark" style="cursor: pointer;" id="heroUserLevel" onclick="upLevel()">Уровень: ${heroLevel}</span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id="heroHp">${heroHp}/${heroStartHp}</div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id="heroMana">${heroMana}/${heroStartMana}</div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="card" style="background: none; border: none;" id="spell1">
                        <button class="btn btn-outline-warning" style="display: none;" id="levelUpSpell1" onclick="spellLevelUp(1)"><i class="fas fa-plus"></i></button>
                        <button class="btn btn-outline-success" style="display: none;" id="useSpell1"><i class="fas fa-mouse"></i></button>
                        <img src="${firstSpell.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" id="level-image-1" class="card-img-top" alt="${firstSpell.name}" data-bs-toggle="collapse" data-bs-target="#firstSpell">
                        <span class="bg-dark" style="padding-left: 0.5em;" id="level-text-1">Уровень: ${firstSpell.level}</span>
        
                        <div id="firstSpell" class="accordion-collapse collapse" aria-labelledby="firstSpell" data-bs-parent="#firstSpell">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${firstSpell.name}</h5>
                                <p class="card-text">${firstSpell.description}</p>
                                <p class="card-text text-warning">${firstSpell.chance1 !== undefined ? `\ Шанс: ${firstSpell.chance1}% / ${firstSpell.chance2}% / ${firstSpell.chance3}% / ${firstSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${firstSpell.mana4 !== undefined ? `\ Мана: ${firstSpell.mana1} / ${firstSpell.mana2} / ${firstSpell.mana3} / ${firstSpell.mana4} ` : `Мана: ${firstSpell.mana1} / ${firstSpell.mana2} / ${firstSpell.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${firstSpell.cooldown4 !== undefined ? `\ Перезарядка: ${firstSpell.cooldown1}/${firstSpell.cooldown2}/${firstSpell.cooldown3}/${firstSpell.cooldown4}` : `Перезарядка: ${firstSpell.cooldown1}/${firstSpell.cooldown2}/${firstSpell.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>
                
                    <div class="card" style="background: none; border: none;" id="spell2">
                        <button class="btn btn-outline-warning" style="display: none;" id="levelUpSpell2" onclick="spellLevelUp(2)"><i class="fas fa-plus"></i></button>
                        <button class="btn btn-outline-success" style="display: none;" id="useSpell2"><i class="fas fa-mouse"></i></button>
                        <img src="${secondSpell.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" id="level-image-2" class="card-img-top" alt="${secondSpell.name}" data-bs-toggle="collapse" data-bs-target="#secondSpell">
                        <span class="bg-dark" style="padding-left: 0.5em;" id="level-text-2">Уровень: ${secondSpell.level}</span>
        
                        <div id="secondSpell" class="accordion-collapse collapse" aria-labelledby="secondSpell" data-bs-parent="#secondSpell">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${secondSpell.name}</h5>
                                <p class="card-text">${secondSpell.description}</p>
                                <p class="card-text text-warning">${secondSpell.chance1 !== undefined ? `\ Шанс: ${secondSpell.chance1}% / ${secondSpell.chance2}% / ${secondSpell.chance3}% / ${secondSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${secondSpell.mana4 !== undefined ? `\ Мана: ${secondSpell.mana1} / ${secondSpell.mana2} / ${secondSpell.mana3} / ${secondSpell.mana4} ` : `Мана: ${secondSpell.mana1} / ${secondSpell.mana2} / ${secondSpell.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${secondSpell.cooldown4 !== undefined ? `\ Перезарядка: ${secondSpell.cooldown1}/${secondSpell.cooldown2}/${secondSpell.cooldown3}/${secondSpell.cooldown4}` : `Перезарядка: ${secondSpell.cooldown1}/${secondSpell.cooldown2}/${secondSpell.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>
        
                    <div class="card" style="background: none; border: none;" id="spell3">
                        <button class="btn btn-outline-warning" style="display: none;" id="levelUpSpell3" onclick="spellLevelUp(3)"><i class="fas fa-plus"></i></button>
                        <button class="btn btn-outline-success" style="display: none;" id="useSpell3"><i class="fas fa-mouse"></i></button>
                        <img src="${thirdSpell.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" id="level-image-3" class="card-img-top" alt="${thirdSpell.name}" data-bs-toggle="collapse" data-bs-target="#thirdSpell">
                        <span class="bg-dark" style="padding-left: 0.5em;" id="level-text-3">Уровень: ${thirdSpell.level}</span>
        
                        <div id="thirdSpell" class="accordion-collapse collapse" aria-labelledby="thirdSpell" data-bs-parent="#thirdSpell">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${thirdSpell.name}</h5>
                                <p class="card-text">${thirdSpell.description}</p>
                                <p class="card-text text-warning">${thirdSpell.chance1 !== undefined ? `\ Шанс: ${thirdSpell.chance1}% / ${thirdSpell.chance2}% / ${thirdSpell.chance3}% / ${thirdSpell.chance4}% ` : ''}</p>
                                <p class="card-text text-primary">${thirdSpell.mana4 !== undefined ? `\ Мана: ${thirdSpell.mana1} / ${thirdSpell.mana2} / ${thirdSpell.mana3} / ${thirdSpell.mana4} ` : `Мана: ${thirdSpell.mana1} / ${thirdSpell.mana2} / ${thirdSpell.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${thirdSpell.cooldown4 !== undefined ? `\ Перезарядка: ${thirdSpell.cooldown1}/${thirdSpell.cooldown2}/${thirdSpell.cooldown3}/${thirdSpell.cooldown4}` : `Перезарядка: ${thirdSpell.cooldown1}/${thirdSpell.cooldown2}/${thirdSpell.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>
        
                    <div class="card" style="background: none; border: none;" id="spell4">
                        <button class="btn btn-outline-warning" style="display: none;" id="levelUpUltimate" onclick="spellLevelUp(4)"><i class="fas fa-plus"></i></button>
                        <button class="btn btn-outline-success" style="display: none;" id="useUltimate"><i class="fas fa-mouse"></i></button>
                        <img src="${ultimate.image}" style="width: 150px; height: 150px; cursor: pointer; filter: saturate(0) brightness(0.6);" id="level-image-4" class="card-img-top" alt="${ultimate.name}" data-bs-toggle="collapse" data-bs-target="#ultimate">
                        <span class="bg-dark" style="padding-left: 0.5em;" id="level-text-4">Уровень: ${ultimate.level}</span>
        
                        <div id="ultimate" class="accordion-collapse collapse" aria-labelledby="ultimate" data-bs-parent="#ultimate">
                            <div class="accordion-body bg-dark" style="width: 15rem;">
                                <h5 class="card-title">${ultimate.name}</h5>
                                <p class="card-text">${ultimate.description}</p>
                                <p class="card-text text-warning">${ultimate.chance1 !== undefined ? `\ Шанс: ${ultimate.chance1}% / ${ultimate.chance2}% / ${ultimate.chance3}%` : ''}</p>
                                <p class="card-text text-primary">${ultimate.mana4 !== undefined ? `\ Мана: ${ultimate.mana1} / ${ultimate.mana2} / ${ultimate.mana3} / ${ultimate.mana4} ` : `Мана: ${ultimate.mana1} / ${ultimate.mana2} / ${ultimate.mana3} ` }</p>
                                <p class="card-text"><small class="text-muted">${ultimate.cooldown4 !== undefined ? `\ Перезарядка: ${ultimate.cooldown1}/${ultimate.cooldown2}/${ultimate.cooldown3}/${ultimate.cooldown4}` : `Перезарядка: ${ultimate.cooldown1}/${ultimate.cooldown2}/${ultimate.cooldown3}`}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer" style="color: #fff; border: none;" id="timerRound">
                30 секунд до начала - Раунд 1
            </div>
        </div>
    `;

    if (heroUser[0].spells.firstSpell.level > 0) {
        document.getElementById('level-image-1').style.filter = "none";
    }

    if (heroUser[0].spells.secondSpell.level > 0) {
        document.getElementById('level-image-2').style.filter = "none";
    }

    if (heroUser[0].spells.thirdSpell.level > 0) {
        document.getElementById('level-image-3').style.filter = "none";
    }

    if (heroUser[0].spells.ultimate.level > 0) {
        document.getElementById('level-image-4').style.filter = "none";
    }

    generationEnemy();

    startRoundTimer();
}

function upLevel() {
    if (heroUser[0].spellPoints > 0) {
        if (heroUser[0].spells.firstSpell.ultimate !== true) {
            document.getElementById('levelUpSpell1').style.display = 'block'
        } else if (heroUser[0].spells.firstSpell.ultimate === true && heroUser[0].level >= 6) {
            document.getElementById('levelUpSpell1').style.display = 'block'
        }

        if (heroUser[0].spells.secondSpell.ultimate !== true) {
            document.getElementById('levelUpSpell2').style.display = 'block'
        } else if (heroUser[0].spells.secondSpell.ultimate === true && heroUser[0].level >= 6) {
            document.getElementById('levelUpSpell2').style.display = 'block'
        }

        if (heroUser[0].spells.thirdSpell.ultimate !== true) {
            document.getElementById('levelUpSpell3').style.display = 'block'
        } else if (heroUser[0].spells.thirdSpell.ultimate === true && heroUser[0].level >= 6) {
            document.getElementById('levelUpSpell3').style.display = 'block'
        }

        if (heroUser[0].spells.ultimate.ultimate !== true) {
            document.getElementById('levelUpUltimate').style.display = 'block'
        } else if (heroUser[0].spells.ultimate.ultimate === true && heroUser[0].level >= 6) {
            document.getElementById('levelUpUltimate').style.display = 'block'
        }
    }
}

function spellLevelUp(spellUp) {
    let firstSpell = heroUser[0].spells.firstSpell;
    let secondSpell = heroUser[0].spells.secondSpell;
    let thirdSpell = heroUser[0].spells.thirdSpell;
    let ultimateSpell = heroUser[0].spells.ultimate;

    let levelTextSpell1 = document.getElementById('level-text-1');
    let levelTextSpell2 = document.getElementById('level-text-2');
    let levelTextSpell3 = document.getElementById('level-text-3');
    let levelTextSpell4 = document.getElementById('level-text-4');

    let levelImageSpell1 = document.getElementById('level-image-1');
    let levelImageSpell2 = document.getElementById('level-image-2');
    let levelImageSpell3 = document.getElementById('level-image-3');
    let levelImageSpell4 = document.getElementById('level-image-4');

    switch (spellUp) {
        case 1: firstSpell.level += 1; levelTextSpell1.innerHTML = `Уровень: ${firstSpell.level}`; levelImageSpell1.style.filter = "none"; break;
        case 2: secondSpell.level += 1; levelTextSpell2.innerHTML = `Уровень: ${secondSpell.level}`; levelImageSpell2.style.filter = "none"; break;
        case 3: thirdSpell.level += 1; levelTextSpell3.innerHTML = `Уровень: ${thirdSpell.level}`; levelImageSpell3.style.filter = "none"; break;
        case 4: ultimateSpell.level += 1; levelTextSpell4.innerHTML = `Уровень: ${ultimateSpell.level}`; levelImageSpell4.style.filter = "none"; break;
    }

    document.getElementById('levelUpSpell1').style.display = 'none';
    document.getElementById('levelUpSpell2').style.display = 'none';
    document.getElementById('levelUpSpell3').style.display = 'none';
    document.getElementById('levelUpUltimate').style.display = 'none';

    heroUser[0].spellPoints -= 1;
}