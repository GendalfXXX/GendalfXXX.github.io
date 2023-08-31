function isTextInput(node) {
    return ['INPUT', 'TEXTAREA'].indexOf(node.nodeName) !== -1;
}

document.addEventListener('touchstart', function(e) {
    if (!isTextInput(e.target) && isTextInput(document.activeElement)) {
        document.activeElement.blur();
    }
}, false);

// Главное окошко
let tg = window.Telegram.WebApp;
tg.expand();

let singInBtn = document.getElementById('main_btn_sing_in');
let singUpBtn = document.getElementById('main_btn_sing_up');

singInBtn.addEventListener('click', function () {
    let mainWindow = document.getElementById('main_con');
    let singInWindow = document.getElementById('sing_in_con');

    mainWindow.style.display = 'none';
    singInWindow.style.display = 'block';
});

singUpBtn.addEventListener('click', function () {
    let mainWindow = document.getElementById('main_con');
    let singUpWindow = document.getElementById('sing_up_choice_con');

    mainWindow.style.display = 'none';
    singUpWindow.style.display = 'block';
});

// Окошко входа
let backSingIn = document.getElementById('backSingIn');
let singInConfirm = document.getElementById('btn_sing_in');
let singIn_Up =  document.getElementById('btn_sing_in_up');

backSingIn.addEventListener('click', function () {
    let mainWindow = document.getElementById('main_con');
    let singInWindow = document.getElementById('sing_in_con');

    mainWindow.style.display = 'block';
    singInWindow.style.display = 'none';
});

singIn_Up.addEventListener('click', function () {
    let singUpWindow = document.getElementById('sing_up_choice_con');
    let singInWindow = document.getElementById('sing_in_con');

    singUpWindow.style.display = 'block';
    singInWindow.style.display = 'none';
});

singInConfirm.addEventListener('click', function () {
    let login = document.getElementById('sing_in_login').value;
    let password = document.getElementById('sing_in_password').value;

    if (login.length < 5) {
        document.getElementById('sing_in_login').value = '';
        document.getElementById('sing_in_password').value = '';
        return;
    }

    if (password.length < 8) {
        document.getElementById('sing_in_login').value = '';
        document.getElementById('sing_in_password').value = '';
        return;
    }

    let data = {
        state: 'singIn',
        login: login,
        password: password
    }

    tg.sendData(JSON.stringify(data))
});

// Окошко выбора регистрации
let backSingUp = document.getElementById('backSingUp');
let singUpBloger = document.getElementById('sing_up_btn_bloger');
let singUpAgent = document.getElementById('sing_up_btn_agent');
let singUpBlogerPc = document.getElementById('btn_bloger');
let singUpAgentPc = document.getElementById('btn_agent');

backSingUp.addEventListener('click', function () {
    let mainWindow = document.getElementById('main_con');
    let singUpWindow = document.getElementById('sing_up_choice_con');

    mainWindow.style.display = 'block';
    singUpWindow.style.display = 'none';
});

singUpBloger.addEventListener('click', function () {
    let singUpWindow = document.getElementById('sing_up_choice_con');
    let singUpBlogerInput = document.getElementById('singUp_bloger_con');

    singUpWindow.style.display = 'none';
    singUpBlogerInput.style.display = 'block';
});

singUpAgent.addEventListener('click', function () {
    let singUpWindow = document.getElementById('sing_up_choice_con');
    let singUpAgentInput = document.getElementById('singUp_agent_con');

    singUpWindow.style.display = 'none';
    singUpAgentInput.style.display = 'block';
});

singUpBlogerPc.addEventListener('click', function () {
    let singUpWindow = document.getElementById('sing_up_choice_con');
    let singUpBlogerInput = document.getElementById('singUp_bloger_con');

    singUpWindow.style.display = 'none';
    singUpBlogerInput.style.display = 'block';
});

singUpAgentPc.addEventListener('click', function () {
    let singUpWindow = document.getElementById('sing_up_choice_con');
    let singUpAgentInput = document.getElementById('singUp_agent_con');

    singUpWindow.style.display = 'none';
    singUpAgentInput.style.display = 'block';
});

// Окошко ввода данных блогера
let backSingUpBloger = document.getElementById('backSingUpBloger');
let confirmSingUpBloger = document.getElementById('confirmBlogerBtn');

backSingUpBloger.addEventListener('click', function () {
    let singUpWindow = document.getElementById('sing_up_choice_con');
    let singUpBlogerInput = document.getElementById('singUp_bloger_con');

    singUpWindow.style.display = 'block';
    singUpBlogerInput.style.display = 'none';
});

confirmSingUpBloger.addEventListener('click', function () {
    let login = document.getElementById('loginSingUpBloger');
    login.style.border = '1px solid #DCDCDC';

    let password = document.getElementById('passwordSingUpBloger');
    password.style.border = '1px solid #DCDCDC';

    let contact = document.getElementById('connectSingUpBloger');
    contact.style.border = '1px solid #DCDCDC';

    let channel = document.getElementById('channelSingUpBloger');
    channel.style.border = '1px solid #DCDCDC';

    let radioButton = document.getElementById('confirm_about');
    radioButton.style.color = '';

    if (login.value.length < 5) {
        login.value = '';
        password.value = '';
        login.style.border = '1px solid #FF6A6A';
        return;
    }

    if (password.value.length < 8) {
        login.value = '';
        password.value = '';
        password.style.border = '1px solid #FF6A6A';
        return;
    }

    if (contact.value.length < 5) {
        contact.value = '';
        contact.style.border = '1px solid #FF6A6A';
        return;
    }

    if (channel.value.length < 5) {
        channel.value = '';
        channel.style.border = '1px solid #FF6A6A';
        return;
    }

    if (document.getElementById('confirmSingUpBloger').checked) {
        let data = {
            state: 'singUpBloger',
            login: login.value,
            password: password.value,
            contact: contact.value,
            channel: channel.value
        }

        tg.sendData(JSON.stringify(data))
        return;
    }

    radioButton.style.color = '#FF6A6A';
    return;
});

// Окошко ввода данных агент
let backSingUpAgent = document.getElementById('backSingUpAgent');
let confirmSingUpAgent = document.getElementById('confirmAgentBtn');

backSingUpAgent.addEventListener('click', function () {
    let singUpWindow = document.getElementById('sing_up_choice_con');
    let singUpAgentInput = document.getElementById('singUp_agent_con');

    singUpWindow.style.display = 'block';
    singUpAgentInput.style.display = 'none';
});

confirmSingUpAgent.addEventListener('click', function () {
    let login = document.getElementById('loginSingUpAgent');
    login.style.border = '1px solid #DCDCDC';

    let password = document.getElementById('passwordSingUpAgent');
    password.style.border = '1px solid #DCDCDC';

    let contact = document.getElementById('connectSingUpAgent');
    contact.style.border = '1px solid #DCDCDC';

    let radioButton = document.getElementById('confirm');
    radioButton.style.color = '';

    if (login.value.length < 5) {
        login.value = '';
        password.value = '';
        login.style.border = '1px solid #FF6A6A';
        return;
    }

    if (password.value.length < 8) {
        login.value = '';
        password.value = '';
        password.style.border = '1px solid #FF6A6A';
        return;
    }

    if (contact.value.length < 5) {
        contact.value = '';
        contact.style.border = '1px solid #FF6A6A';
        return;
    }

    if (document.getElementById('confirmSingUpAgent').checked) {
        console.log('Кнопка')
        let data = {
            state: 'singUpAgent',
            login: login.value,
            password: password.value,
            contact: contact.value,
        }

        tg.sendData(JSON.stringify(data))
        return;
    }
    radioButton.style.color = '#FF6A6A';
    return;
});