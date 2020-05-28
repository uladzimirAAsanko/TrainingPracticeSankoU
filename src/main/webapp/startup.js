'use strict';

import {testContainer} from "./postlist.js";

(function () {
    if(!localStorage.getItem('posts'))
        testContainer().save('posts');
})();