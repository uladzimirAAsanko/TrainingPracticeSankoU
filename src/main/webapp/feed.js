'use strict';

import {Postlist} from "./postlist.js";

export class Feed {
    _postTemplate;
    _postContainer;
    _btn;
    _user;
    _wasEmpty;

    constructor(username) {
        this._postTemplate = document.getElementById('post-template');
        this._postContainer = document.getElementById('posts');
        this._btn = document.getElementById('load');
        this._user = username;
        this._wasEmpty = false;
    }

    showFeed(posts) {
        if(posts.length !== 0) {
            if(this._wasEmpty === true) this._deleteMessage();

            posts.forEach((post) => {
                if (Postlist.validate(post) && document.getElementById(post.id) === null) this.addItem(post);
            });
            this._wasEmpty = false;
        }
        else {
            this._showEmptyPage();
            this._wasEmpty = true;
        }
    }

    _deleteMessage() {
        let emptyMsg = document.getElementById('emptyMessage');
        this._postContainer.removeChild(emptyMsg);
        this._btn.style.visibility = '';
    }

    _showEmptyPage() {
        if(this._wasEmpty === true) return;

        let div = document.createElement('div');
        div.setAttribute('id', 'emptyMessage');
        div.textContent = 'Posts not found';
        this._postContainer.insertBefore(div, this._btn);
        this._btn.style.visibility = 'hidden';
    }

    clearFeed() {
        this._btn = this._btn.cloneNode(true);
        this._btn.addEventListener('click', mainController.loadTweets);
        this._postContainer.innerHTML = '';
        this._postContainer.appendChild(this._btn);
    }

    addItem(post) {
        let newPost = document.importNode(this._postTemplate.content, true);
        this._fillItemData(newPost, post);
        this._postContainer.insertBefore(newPost, this._btn);
    }

    _fillItemData(item, data) {
        let placeholders = item.querySelectorAll('[data-target]');

        [].forEach.call(placeholders || [], (phElement) => {
            let key = phElement.getAttribute('data-target');
            if(key === 'photos'){
                let phead = item.querySelector('.phead');
                this._addPhead(phead,data, item);
            }else {
                phElement.textContent = String(data[key] || '');
            }
        });
        item.querySelector('.post').setAttribute('id', data['id']);
        let bot = item.querySelector('.bot');
        if (this._user === data['author'])
            this._addButtons(bot);
    }

    _addPhead(phead, data, item){
        let tmp = item.querySelector(".pimg");
        let pPhoto = document.createElement('img');
        pPhoto.setAttribute('class','pimg');
        pPhoto.src = data["photoLink"];
        tmp.appendChild(pPhoto);

        let uname = item.querySelector('.uname');
        this._addProfileInfo(uname,data);

        let created = document.createElement('span');
        created.setAttribute('class','date');
        created.textContent = data["createdAt"];
        phead.appendChild(created);
    }
    _addProfileInfo(phead, data){
        phead.textContent = data["author"];

        let pFlag = document.createElement('img');
        pFlag.setAttribute('class','pflag');
        pFlag.src = data["photoFlag"];
        pFlag.height = 22;
        phead.appendChild(pFlag);

        let pRank = document.createElement('img');
        pRank.setAttribute('class','prank');
        pRank.src = data["photoRank"];
        pRank.height = 22;
        phead.appendChild(pRank);
    }

    removeItem(id) {
        this._postContainer.removeChild(document.getElementById(id));
    }






    _insertPhoto(item, link, bot) {
        if((link || '') !== '')
            item.querySelector('.post').insertBefore(this._createImg(link), bot);
    }

    _createImg(link) {
        let img = document.createElement('img');
        img.setAttribute('class', 'att');
        img.setAttribute('src', link);
        img.setAttribute('alt', 'Image');
        return img;
    }

    _addButtons(bot) {
        let button = document.createElement('button');
        button.innerHTML = '<img src = https://sun9-10.userapi.com/c206628/v206628515/11861a/oXzIqiKI7-w.jpg alt = "Delete" height="22" >';
        button.setAttribute('class', 'del');
        bot.appendChild(button);
        button = document.createElement('button');
        button.setAttribute('class', 'edit');
        button.textContent = 'Edit';
        bot.appendChild(button);
    }

    removeItem(id) {
            this._postContainer.removeChild(document.getElementById(id));
    }

    editItem(id, data) {
        let toReplace = document.getElementById(id);
        if (toReplace === null) return;

        toReplace.setAttribute('id', 'to_replace');
        let editedPost = document.importNode(this._postTemplate.content, true);
        this._fillItemData(editedPost, data);
        this._postContainer.appendChild(editedPost);
        this._postContainer.replaceChild(document.getElementById(id), document.getElementById('to_replace'));
    }


}