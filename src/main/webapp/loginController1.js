'use strict';

import {View} from './view.js';

class LoginController1 {
    _page_view;
    static _uinf = [
        {
            login: 'Maxim Isaуev',
            password: 'password1'
        },
        {
            login: 'Сержант Дорнан',
            password: 'password2'
        }
    ];

    constructor() {
        this._page_view = new View(null, 'login');
    }

    logIn() {
        let login = this._page_view.getLogin();
        let password = this._page_view.getPassword();
        if(login === '' || password === '')
            this._page_view.loginError();
        if(this._authorize(login, password)) {
            localStorage.setItem('username', login);
            window.location.href = '../index.html';
        }
        else
            this._page_view.loginError();
    }

    _authorize(login, password) {
        let user = LoginController1._uinf.find(item => item.login === login);
        if(user === undefined)
            return false;
        return user.password === password;
    }
}

window.LoginController = LoginController1;
window.loginController = new LoginController1();