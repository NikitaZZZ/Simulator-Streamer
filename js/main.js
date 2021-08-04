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

updateInfoStreamer();
updateStatsStreamer();

const moneyInfoStreamer = localStorage.getItem('money');
if (moneyInfoStreamer !== null) { document.getElementById('money-info-streamer').innerHTML = `Монет - ${moneyInfoStreamer}м` }

function updateInfoStreamer() {
    const nameStreamer = localStorage.getItem('name-streamer');
    const ageStreamer = localStorage.getItem('age-streamer');
    const sexStreamer = localStorage.getItem('sex-streamer');
    
    if (nameStreamer !== null && ageStreamer !== null && sexStreamer !== null) {
        document.getElementById('name-streamer').innerHTML = `Имя: ${nameStreamer}`;
        document.getElementById('age-streamer').innerHTML = `Возраст: ${ageStreamer}`;
        document.getElementById('sex-streamer').innerHTML = `Пол: ${sexStreamer}`;
    }
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
        document.getElementById('money-all').innerHTML = `Монет заработано всего: 400`;
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



Swal.fire({
    title: 'Enter password',
    html: `<input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    allowOutsideClick: false,
    showCancelButton: false,
    showCloseButton: false,
    allowEscapeKey: false,
    preConfirm: () => {
      const password = Swal.getPopup().querySelector('#password').value
      if (!password) {
        Swal.showValidationMessage(`Please enter password`)
      }
      return { password: password }
    }
}).then((result) => {
    if (result.value.password == 'kapustadrakon') {
        Swal.fire({
            text: 'Yes!'
        });
    } else {
        Swal.showValidationMessage(`Please enter password`)
    }
})
  
  