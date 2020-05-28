'use strict';

import {Postlist} from "./postlist.js";

export class FormView {
    _input;

    constructor(type) {
        this._input = document.querySelector('.input');
        if(['add', 'edit'].includes(type))
            this._fillPage(type);
    }


    _fillPage(type) {
        console.log(type);
        let str = type[0].toUpperCase() + type.substring(1) + ' post';
        let post = JSON.parse(localStorage.getItem('editedPost'), Postlist.postReviver);
        document.querySelectorAll('[data-target]').forEach((phElement) => {
            let key = phElement.getAttribute('data-target');
            if (key === 'type') phElement.textContent = str;
            if(type === 'add'){ return;}
            else phElement.textContent = String(post[key] || '');
        });
    }







    clearAuthorInput() {
        document.getElementById('author').value = '';
    }


}