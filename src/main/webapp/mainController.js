'use strict';

import {View} from './view.js';
import {Postlist} from "./postlist.js";

export class MainController {
    _page_view;
    _posts;
    _skip;
    _filterConfig;

    constructor(username, container) {
        this._page_view = new View(username, 'main');
        this._posts = container;
        this._skip = 0;
        this._filterConfig = {};
        this._showFeed();
        window.addEventListener('message', this._messageHandler);
    }

    loadTweets(top) {
        this._showFeed(top);
    }

    _showFeed(top) {
        let page = this._posts.getPage(this._skip, top, this._filterConfig);
        this._page_view.showFeed(page);
        this._skip += page.length;
    }

    updateFilter() {
        let filter = this._newFilter();
        if(this._sameFilter(filter))
            return;

        this._skip = 0;
        this._filterConfig = filter;
        console.log(filter);
        this._updatePage();
    }

    _newFilter() {
        let res = {  };
        this._updateAuthor(res);
        this._updateDate(res);
        this._updateNation(res);
        this._updateRank(res);

        return res;
    }




    _updateAuthor(newFilter) {
        let authorInput = document.getElementById('author') ;
        if(authorInput.value !== '')
            newFilter.author = authorInput.value;
    }

    _updateNation(newFilter){
        let nationInput = document.getElementById('nation');
        if(nationInput.value !== ''){
            if(nationInput.value !== "1"){
                newFilter.nation = nationInput.value;
            }
        }
    }

    _updateRank(newFilter){
        let rankInput = document.getElementById('rank');
        console.log(rankInput.value);
        if(rankInput.value !== ''){
            if(rankInput.value !== "0"){
                newFilter.rank = rankInput.value;
            }
        }
    }

    _updateDate(newFilter) {
        let dateInput =  document.getElementById('date');
        let date = dateInput.valueAsDate;
        if(date)
            newFilter.createdAt = date;
    }

    _sameFilter(newFilter) {
        return this._checkProperties(newFilter);
    }

    _checkProperties(newFilter) {
        for(let key in this._filterConfig) if(!newFilter.hasOwnProperty(key))
            return false;
        for(let key in newFilter) {
            if(key !== 'hashTags' && ((!this._filterConfig.hasOwnProperty(key)) ||
                this._filterConfig[key] !== newFilter[key]))
                return false;
        }
        return true;
    }





    clearAuthorInput() {
        this._page_view.clearAuthorInput();
    }

    _updatePage() {
        this._clearFeed();
        this._showFeed()
    }

    _clearFeed() {
        this._page_view.clearFeed();
    }




    keyPressedOnForm(event) {
        let key = event.charCode || event.keyCode || 0;
        if (key === 13) {
            event.preventDefault();
        }
    }

    postClicked(event) {
        let btn = this._getButton(event);
        this._processEvent(btn);
    }

    _getButton(event) {
        let btn = event.target;
        return btn;
    }

    _processEvent(button) {
        let id = button.parentElement.parentElement.id;
        button.classList.forEach((className) => this._processClass(className, id));
    }

    _processClass(className, id) {
        switch (className) {
            case('del'):
                this._removePost(id);
                break;
            case('edit'):
                this._editPost(id);
                break;
            default:
                break;
        }
    }

    _removePost(id) {
        if (this._posts.remove(id)) {
            this._page_view.removeItem(id);
            this._posts.save('posts');
        }
    }

    _editPost(id) {
        localStorage.setItem('add/edit', 'edit');
        localStorage.setItem('editedPost', JSON.stringify(this._posts.get(id)));
        window.open('./add.html', 'id');
    }

    _messageHandler(event) {
        if(event.origin !== location.origin)
            return;
        if(localStorage.getItem('add/edit') === 'edit') {
            let id = JSON.parse(localStorage.getItem('editedPost')).id;
            if (!window.mainController.editItem(id, JSON.parse(event.data, Postlist.postReviver)))
                alert('Error');
            else window.mainController.save('posts');
        } else
        if(!window.mainController.addItem(JSON.parse(event.data, Postlist.postReviver))) {
            console.log(Postlist.postReviver);
            console.log(event.data);
            alert('Error');
        }
        else window.mainController.save('posts');
        event.source.close();
        location.reload();
    }

    editItem(id, data) {
        return this._posts.edit(id, data);
    }

    addItem(post) {
        return this._posts.add(post);
    }



    save(key) {
        this._posts.save(key);
    }

    addPostClicked() {
        console.log(this._page_view._user);
        if(this._page_view._user !== null) {

            localStorage.setItem('add/edit', 'add');
            window.open('./add.html', 'add');
        }
    }

    static signClicked() {
        if(localStorage.getItem('username')) {
            localStorage.removeItem('username');
            window.location.reload();
        }
        else
            window.location.href = '../login.html';
    }
}


function addPost(id) {
    console.log();
    let post = window.posts.get(id);
    if(post !== undefined)
        window.page_view.addItem(post);
}

window.addPost = addPost;

function removeItem(id) {
    console.log("try to remove");
    if(window.posts.remove(id)) {
        console.log("correct remove");
        window.page_view.removeItem(id);
    }
}

window.removeItem = removeItem;

function editItem(id, post) {
    if(window.posts.edit(id, post))
        window.page_view.editItem(id, window.posts.get(id));
}

window.editItem = editItem;


