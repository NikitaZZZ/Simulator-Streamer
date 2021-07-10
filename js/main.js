// rand number
function getRandNumb(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

// vue link 
new Vue ({
    el: '#main',
    methods: {
        jump: (link) => {
            location.href = link;
        },

        swl_info: (text) => {
            Swal.fire({
                title: text,
                icon: "info"
            })
        }
    }
});

// Кнопка вызова окна 'Обратной связи'
document.addEventListener("keypress", (e) => {
    if (e.key === "с" || e.key === "c" 
    || e.key === "C" || e.key === "С") {
        Swal.fire({
            title: 'Обратная связь с разработчиками (Баги, предложения)',
            icon: 'info',
            html:
                '<a href="https://vk.com/public_lar" target="_blank" id="vk-link"><i class="fab fa-vk"></i> Группа в ВКонтакте (Новости Симулятора, Беседа для вопросов/предложений)</a> <br> <br>' +
                '<p class="lead">---Разработчики---</p>' +
                '<a href="https://vk.com/virtualp1" target="_blank" id="vk-link"><i class="fab fa-vk"></i> Никита Зинин</a> <br>' +
                '<a href="https://vk.com/23tvrus" target="_blank" id="vk-link"><i class="fab fa-vk"></i> Данил Чернышев</a> <br>' +
                '<a href="https://vk.com/penniless_writer" target="_blank" id="vk-link"><i class="fab fa-vk"></i> Анна Пастухова</a> <br>'
        });
    }
});

updateInfoStreamer();
updateStatsStreamer();

const moneyInfoStreamer = localStorage.getItem('money');
if (moneyInfoStreamer !== null) { document.getElementById('money-info-streamer').innerHTML = `Монет - ${moneyInfoStreamer}м` }

function updateInfoStreamer() {
    const nameStreamer = localStorage.getItem('name-streamer');
    const ageStreamer = localStorage.getItem('age-streamer');
    const sexStreamer = localStorage.getItem('sex-streamer');
    
    document.getElementById('name-streamer').innerHTML = `Имя: ${nameStreamer}`;
    document.getElementById('age-streamer').innerHTML = `Возраст: ${ageStreamer}`;
    document.getElementById('sex-streamer').innerHTML = `Пол: ${sexStreamer}`;
}

function updateStatsStreamer() {
    const aliveDayAll = localStorage.getItem('alive-day-all');
    const moneyAll = localStorage.getItem('money-all');

    if (aliveDayAll === null) {
        document.getElementById('alive-day-all').innerHTML = `Прожитой дней всего: 1`;
    } else {
        document.getElementById('alive-day-all').innerHTML = `Прожитой дней всего: ${aliveDayAll}`;
    }

    if (moneyAll === null) {
        document.getElementById('alive-day-all').innerHTML = `Монет заработано всего: 400`;
    } else {
        document.getElementById('money-all').innerHTML = `Монет заработано всего: ${moneyAll}`;
    }
}

function saveInfoStreamer() {
    const nameStreamerInput = document.getElementById('name-streamer-input').value;
    const ageStreamerInput = document.getElementById('age-streamer-input').value;
    const sexStreamerInput = document.getElementById('sex-streamer-select').value;

    localStorage.setItem('name-streamer', nameStreamerInput);
    localStorage.setItem('age-streamer', ageStreamerInput);
    localStorage.setItem('sex-streamer', sexStreamerInput);

    updateInfoStreamer();
}