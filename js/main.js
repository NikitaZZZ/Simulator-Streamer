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
                '<a href="https://vk.com/public_lar" id="vk-link"><i class="fab fa-vk"></i> Группа в ВКонтакте (Новости Симулятора, Беседа для вопросов/предложений)</a> <br> <br>' +
                '<p class="lead">---Разработчики---</p>' +
                '<a href="https://vk.com/virtualp1" id="vk-link"><i class="fab fa-vk"></i> Никита Зинин</a> <br>' +
                '<a href="https://vk.com/23tvrus" id="vk-link"><i class="fab fa-vk"></i> Данил Чернышев</a> <br>' +
                '<a href="https://vk.com/penniless_writer" id="vk-link"><i class="fab fa-vk"></i> Анна Пастухова</a> <br>'
        });
    }
});