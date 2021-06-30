// elements
let result_items = document.getElementById("result-items");
let result_heroes = document.getElementById("result-heroes");

// Массив с героями для рулетки (!Не открывать, чтобы не улететь в психушку)
array_heroes = [
    'Earthshaker', 
    'Sven', 
    'Tiny', 
    'Kunkka', 
    'Beastmaster', 
    'Dragon Knight',
    'Clockwerk', 
    'Omniknight', 
    'Huskar', 
    'Alchemist', 
    'Brewmaster', 
    'Treant Protector', 
    'Io',
    'Centaur Warrunner', 
    'Timbersaw', 
    'Bristleback', 
    'Task', 
    'Elder Titan', 
    'Legion Commander',
    'Earth Spirit', 
    'Phoenix', 
    'Mars', 
    'Snapfire', 
    'Axe', 
    'Pudge', 
    'Sand king', 
    'Slardar',
    'Tidehunter', 
    'Wraith king', 
    'Lifestealer', 
    'Night Stalker', 
    'Doom', 
    'Spirit breaker',
    'Lycan', 
    'Chaos Knight', 
    'Undying', 
    'Magnus', 
    'Abaddon', 
    'Underlord', 
    'Anti-Mage',
    'Drow Ranger', 
    'Juggernaut', 
    'Mirana', 
    'Morphling', 
    'Phantom Lancer', 
    'Vengeful Spirit',
    'Riki', 
    'Sniper', 
    'Templar Assassin', 
    'Luna', 
    'Bounty Hunter', 
    'Ursa', 
    'Gyrocopter',
    'Lone Druid', 
    'Naga Siren', 
    'Troll Warlord', 
    'Ember Spirit', 
    'Monkey King', 
    'Pangolier',
    'Bloodseeker', 
    'Shadow Fiend', 
    'Razor', 
    'Venomancer', 
    'Faceless Void', 
    'Phantom Assassin',
    'Viper', 
    'Clinkz', 
    'Broodmother', 
    'Weaver', 
    'Spectre', 
    'Meepo', 
    'Nyx Assassin', 
    'Slark',
    'Medusa', 
    'Terrorblade', 
    'Arc Warden', 
    'Crystal Maiden', 
    'Puck', 
    'Storm Spirit', 
    'Windranger',
    'Zeus', 
    'Lina', 
    'Shadow Shaman', 
    'Tinker', 
    "Nature's Prophet", 
    'Enchantress', 
    'Jakiro',
    'Chen', 
    'Silencer', 
    'Ogre Magi', 
    'Rubick', 
    'Disruptor', 
    'Keeper of the Light', 
    'Skywrath Mage',
    'Oracle', 
    'Dark Willow', 
    'Void Spirit', 
    'Bane', 
    'Lich', 
    'Lion', 
    'Witch Doctor',
    'Enigma', 
    'Necrophos', 
    'Warlock', 
    'Queen of Pain', 
    'Death Prophet', 
    'Pugna', 
    'Dazzle', 
    'Leshrac',
    'Dark Seer', 
    'Batrider', 
    'Ancient Apparition', 
    'Invoker', 
    'Outworld Devourer', 
    'Shadow Demon',
    'Visage', 
    'Winter Wyvern', 
    'Grimstroke',
];

let array_items = ['Town Portal Scroll', 'Glimmer Cape', 'Hood of Defiance',
    'Hurricane Pike', 'Blade Mail', 'Necronomicon', 'Aeon Disk', 'Silver Edge', 'Kaya',
    'Moon Shard', 'Power Treads', 'Arcane Boots', 'Diffusal Blade', 'Daedalus', "Linken's Sphere",
    'Mask of Madness', 'Animal Courier', "Aghanim's Scepter", 'Mekansm', 'Bloodstone',
    'Abyssal Blade', 'Heart of Tarrasque', 'Eye of Skadi', 'Butterfly', 'Crystalys', 'Dragon Lance',
    'Soul Booster', 'Veil of Discord', 'Vanguard', 'Armlet of Mordiggian', 'Sange', 'Aether Lens',
    'Meteor Hammer', 'Yasha', 'Urn of Shadows', 'Force Staff', 'Shadow Blade', 'Assault Cuirass',
    'Tranquil Boots', 'Crimson Guard', 'Skull Basher', 'Echo Sabre', 'Phase Boots',
    'Medallion of Courage', 'Solar Crest', 'Battle Fury', 'Maelstrom', 'Dagon', 'Black king Bar',
    'Monkey king Bar', 'Drum of Endurance', "Eul's Scepter of Divinity", 'Lotus Orb', 'Ethereal Blade',
    "Heaven's Halberd", "Vladmir's Offering", 'Rod of Atos', "Shiva's Guard", 'Radiance', 'Desolator',
    'Hand of Midas', 'Orchid Malevolence', 'Kaya and Sange', 'Spirit Vessel', 'Sange and Yasha',
    'Helm of the Dominator', 'Holy Locket', 'Nullifier', 'Yasha and Kaya', 'Boots of Travel',
    'Pipe of Insight', 'Refresher Orb', 'Manta Style', 'Divine Rapier', 'Ghost Scepter',
    'Guardian Greaves', 'Scythe of Vyse', 'Satanic', 'Blink Dagger', 'Octarine Core', 'Bloodthorn',
    'Mjollnir', 'Energy Booster', 'Vitality Booster', 'Point Booster', 'Platemail',
    'Talisman of Evasion', 'Hyperstone', 'Ultimate Orb', 'Demon Edge', 'Mystic Staff', 'Reaver',
    'Eaglesong', 'Sacred Relic', 'Town Portal Scroll', 'Iron Branch', 'Ring of Protection',
    'Magic Stick', 'Magic Wand', 'Ring of Basilius', 'Clarity', 'Gauntlets of Strength',
    'Stout Shield', 'Wind Lace', 'Null Talisman', 'Headdress', 'Faerie Fire', 'Slippers of Agility',
    'Quelling Blade', 'Ring of Regen', 'Wraith Band', 'Buckler', 'Smoke of Deceit',
    'Mantle of Intelligence', 'Infused Raindrops', "Sage's Mask", 'Bracer', 'Observer Ward', 'Circlet',
    'Orb of Venom', 'Boots of Speed', 'Soul Ring', 'Sentry Ward', 'Belt of Strength', 'Blight Stone',
    'Gloves of Haste', 'Enchanted Mango', 'Band of Elvenskin', 'Blades of Attack', 'Cloak',
    'Healing Salve', 'Robe of the Magi', 'Chainmail', 'Ring of Tarrasque', 'Oblivion Staff', 'Tango',
    'Crown', 'Quarterstaff', 'Ring of Health', 'Perseverance', 'Tome of Knowledge', 'Ogre Axe',
    'Helm of Iron Will', 'Void Stone', 'Dust of Appearance', 'Blade of Alacrity', 'Javelin',
    'Gem of True Sight', 'Animal Courier', 'Staff of Wizardry', 'Broadsword', 'Morbid Mask',
    'Bottle', 'Claymore', 'Shadow Amulet', 'Mithril Hammer'];

// Рулетка Предметов
function roulette_items() {
    if (energy < 50) {
        Swal.fire({
            icon: 'warning',
            title: 'Предупреждение',
            text: 'У вас нет энергии, если вы будете играть - вы будете терять здоровье!',
            footer: '<a href="training_energy.html" target="_blank">Почему так произошло?</a>',
            confirmButtonText: 'Не играть',
            denyButtonText: 'Играть',
            showDenyButton: true,
        }).then((result) => {
            if (result.isDenied) {
                health -= 10;
                reloadStats();

                let win_int = getRandNumb(0, 155);

                let timerInterval;
                Swal.fire({
                    title: 'Крутим рулетку предметов...',
                    imageUrl: '../img/lina.png',
                    imageWidth: 300,
                    imageHeight: 200,
                    timer: 2000,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        Swal.showLoading();
                        timerInterval = setInterval(() => {
                            Swal.getContent().querySelector('b')
                                .textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.timer
                    ) {
                        Swal.fire({
                            title: `Вам выпал: ${array_items[win_int]}`
                        });
        
                        result_items.innerHTML = `Прошлый результат: ${array_items[win_int]}`
                    }
                })
            }
        });
    } else if (energy >= 50) {
        energy -= 10;
        reloadStats();

        let win_int = getRandNumb(0, 155);

        let timerInterval;
        Swal.fire({
            title: 'Крутим рулетку предметов...',
            imageUrl: '../img/lina.png',
            imageWidth: 300,
            imageHeight: 200,
            timer: 2000,
            allowOutsideClick: false,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    Swal.getContent().querySelector('b')
                        .textContent = Swal.getTimerLeft()
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.timer
            ) {
                Swal.fire({
                    title: `Вам выпал: ${array_items[win_int]}`
                });

                result_items.innerHTML = `Прошлый результат: ${array_items[win_int]}`
            }
        })
    }
}

// Рулетка Героев
function roulette_heroes() {
    if (energy < 50) {
        Swal.fire({
            icon: 'warning',
            title: 'Предупреждение!',
            text: 'У вас нет энергии, если вы будете играть - вы будете терять здоровье!',
            footer: '<a href="training_energy.html" target="_blank">Почему так произошло?</a>',
            confirmButtonText: 'Не играть',
            denyButtonText: 'Играть',
            showDenyButton: true,
        }).then((result) => {
            if (result.isDenied) {
                health -= 10;
                reloadStats();

                let win_int = getRandNumb(0, 119);

                let timerInterval;
                Swal.fire({
                    title: 'Крутим рулетку героев...',
                    imageUrl: '../img/lina.png',
                    imageWidth: 300,
                    imageHeight: 200,
                    timer: 2000,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        Swal.showLoading();
                        timerInterval = setInterval(() => {
                            Swal.getContent().querySelector('b')
                                .textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.timer
                    ) {
                        Swal.fire({
                            title: `Вам выпал: ${array_heroes[win_int]}`
                        });
        
                        result_heroes.innerHTML = `Прошлый результат: ${array_heroes[win_int]}`
                    }
                })
            }
        });
    } else if (energy >= 50) {
        energy -= 10;
        reloadStats();

        let win_int = getRandNumb(0, 119);

        let timerInterval;
        Swal.fire({
            title: 'Крутим рулетку героев...',
            imageUrl: '../img/lina.png',
            imageWidth: 300,
            imageHeight: 200,
            timer: 2000,
            allowOutsideClick: false,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    Swal.getContent().querySelector('b')
                        .textContent = Swal.getTimerLeft()
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.timer
            ) {
                Swal.fire({
                    title: `Вам выпал: ${array_heroes[win_int]}`
                });

                result_heroes.innerHTML = `Прошлый результат: ${array_heroes[win_int]}`
            }
        })
    }
}

// Рулетка Предметов для окна стрима
function roulette_items2() {
    let win_int = getRandNumb(0, 155);
    let timerInterval;
    
    energy -= 10;
    reloadStats();

    Swal.fire({
        title: 'Крутим рулетку предметов...',
        timer: 2000,
        allowOutsideClick: false,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector('b')
                    .textContent = Swal.getTimerLeft()
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer
        ) {
            Swal.fire({
                title: `Вам выпал: ${array_items[win_int]}`
            });
            document.getElementById("result-items1").innerHTML = `Результат: ${array_items[win_int]}`;
        }
    });

    money += 5;
    localStorage.setItem("money", money);
    money_p.innerHTML = `Монет - ${money}`;
    money_p_stream.innerHTML = `Монет - ${money}`;

    watchers += 1;
    watchers_p.innerHTML = `Зрителей - ${watchers}`;
}

// Рулетка Героев для окна стрима
function roulette_heroes2() {
    watchers += 1;
    watchers_p.innerHTML = `Зрителей - ${watchers}`;

    money += 5;
    localStorage.setItem("money", money);
    money_p.innerHTML = `Монет - ${money}`;
    money_p_stream.innerHTML = `Монет - ${money}`;

    energy -= 10;
    reloadStats();

    let timerInterval;
    Swal.fire({
        title: 'Крутим рулетку героев...',
        timer: 2000,
        allowOutsideClick: false,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector('b')
                    .textContent = Swal.getTimerLeft()
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer
        ) {
            Swal.fire({
                title: `Вам выпал: ${array_heroes[win_int]}`
            });
            document.getElementById("result-heroes2").innerHTML = `Результат: ${array_heroes[win_int]}`;
        }
    });

    let win_int = getRandNumb(0, 119);
}