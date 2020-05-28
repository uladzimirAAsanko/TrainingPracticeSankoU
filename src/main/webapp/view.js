'use strict';

import {testContainer} from "./script.js";
import {PostList} from "./script.js";

class View{
    _postView;
    _headerView;
    constructor(username) {
        this._postView = new PostView(username);
        this._headerView = new HeaderView(username);
    }

    showFeed(posts) {
        this._postView.showFeed(posts);
    }

    addItem(post) {
        this._postView.addItem(post);
    }
    removeItem(id) {
        this._postView.removeItem(id);
    }
    editItem(id, data) {
        this._postView.editItem(id, data);
    }
}
class PostView {
    _postTemplate;
    _tagTemplate;
    _postContainer;
    _btn;
    _user;

    constructor(username) {
        this._postTemplate = document.getElementById('post-template');
        this._postContainer = document.getElementById('posts');
        this._tagTemplate = document.getElementById('tag-template');
        this._user = username;
    }


    showFeed(posts) {
        posts.forEach((post) => {
            if(PostList.validate(post) && document.getElementById(post.id) === null)
                this.addItem(post);
        });
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

    editItem(id, data) {
        let toReplace = document.getElementById(id);
        if (toReplace === null)
            return;
        toReplace.setAttribute('id', 'to_replace');
        let editedPost = document.importNode(this._postTemplate.content, true);
        this._fillItemData(editedPost, data);
        this._postContainer.appendChild(editedPost);
        this._postContainer.replaceChild(document.getElementById(id), document.getElementById('to_replace'));
    }
}

class HeaderView {
    _header;
    _user;
    _main;

    constructor(username) {
        this._header = document.getElementsByTagName('header')[0];
        this._user = username;
        this._main = document.getElementById('main');
        this._showHeader();
    }

    _showHeader() {
        //<button id="sign">Sign out</button>
        //<span id="myname">My name</span>
        let logo = document.createElement('img');
        logo.setAttribute('class','logo');
        logo.src = 'https://psv4.userapi.com/c856416/u154728452/docs/d7/4e7fbfa76031/logoter.png?extra=wnve1rv5Plhwq_7iZ69MhgjjwpYvIxHRIE_xI_BlztUpmlATb6hmOe-O163PfYpnfPXg0byLSsMuVfOjF98Gv37FUalYkemRjfLX_-UCIFvXeC9r4QzIR8DqzvNgBEeGvMSLUmSGesq-91qcsLmTwkY';
        logo.width = 80;

        let button = document.createElement('button');
        button.setAttribute('class', 'signin');

        let span = document.createElement('span');
        span.setAttribute('id', 'myname');

        let profilephoto = document.createElement('img');
        profilephoto.setAttribute('class','uimg float-r');
        profilephoto.src = 'https://thumb.tildacdn.com/tild3364-6263-4437-b434-306362633336/-/resize/824x/-/format/webp/s1200.jpg';
        profilephoto.height = 80;
        this._header.appendChild(logo);
        this._header.appendChild(button);
        if (this._user === undefined) {
            button.textContent = 'Sign in';
            this._header.removeChild(this._header.querySelector("img"));
        } else {
            button.textContent = 'Sign out';
            span.textContent = this._user;
            this._header.appendChild(span);
            this._header.appendChild(profilephoto);
        }
    }

    _insertContent(button, span) {
        if (this._user === undefined) {
            this._header.appendChild(button);
            this._header.appendChild(span);
        } else {
            this._header.insertBefore(button, this._header.querySelector("img"));
            this._header.insertBefore(span, this._header.querySelector("img"));
        }
    }
}

window.user_name = 'Maxim Isaуev';
window.page_view = new View(window.user_name);
window.posts = testContainer();

function showFeed(skip, top, filterConfig) {

    if(skip === top){
        let page = window.posts.getPage(0, window.posts.length, filterConfig);
        if(page.length !== 0)
            window.page_view.showFeed( window.posts.getPage(0, window.posts.length, filterConfig));

    }else{
        let page = window.posts.getPage(skip, top, filterConfig);
        if(page.length !== 0)
            window.page_view.showFeed( window.posts.getPage(skip, top, filterConfig));
    }
}

function removeItem(id) {
    if(window.posts.remove(id)) {
        window.page_view.removeItem(id);
    }
}

function editItem(id, post) {
    if(window.posts.edit(id, post))
        window.page_view.editItem(id, window.posts.get(id));
}

window.editItem = editItem;

window.showFeed = showFeed;
window.removeItem = removeItem;