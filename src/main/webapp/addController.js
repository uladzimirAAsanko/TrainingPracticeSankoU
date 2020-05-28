'use strict';

import {MainController} from "./mainController.js";
import {View} from './view.js';
import {Postlist} from "./postlist.js";
import {Profiles} from "./profiles.js";

class AddController {
    _page_view;
    _post;

    constructor(username) {
        this._page_view = new View(username, localStorage.getItem('add/edit'));
        this._post = {
            id: Profiles.getId(username),
            description: '',
            createdAt: null,
            author: username,
            nation: Profiles.getNation(username),
            rank: Profiles.getRank(username),
            photoLink: Profiles.getProfilePhoto(username),
            photoFlag: '',
            photoRank: '',
            like:'',

        };
        if (Profiles.getRank(username) === "2") {
            this._post.photoRank = "https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg";
        }
        if (Profiles.getRank(username) === "4") {
            this._post.photoRank = "https://sun9-25.userapi.com/c854224/v854224359/2310ac/1DGzM3uo0jo.jpg";
        }
        if (Profiles.getNation(username) === "Anclav") {
            this._post.photoFlag = "https://ae01.alicdn.com/kf/HTB1cspseGzB9uJjSZFMq6xq4XXat/3x5FT-Fallout-100D.jpg";
        }
        if (Profiles.getNation(username) === "USSR") {
            this._post.photoFlag = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg";
        }
    }



    submitPost() {
        this._insertDescription();
        if((this._post.description) === '')
            this._page_view.validationError('Post can\'t be empty');
        if(!Postlist.validate(this._post)) {
            this._page_view.validationError();
            console.log("Wrong validate")
            window.alert();
        }
        this._post.createdAt = new Date();
        window.opener.postMessage(JSON.stringify(this._post), '*');
    }





    _insertDescription() {
        this._post.description = document.getElementById('text').value;
    }
}

window.MainController = MainController;
window.AddController = AddController;
window.addController = new AddController(localStorage.getItem('username'));