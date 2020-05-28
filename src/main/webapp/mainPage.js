import {Postlist} from "./postlist.js";
import {MainController} from "./mainController.js";

(function () {
    window.MainController = MainController;
    console.log(localStorage.getItem('posts'));
    window.mainController = new MainController(localStorage.getItem('username'), Postlist.restore('posts'));
})();