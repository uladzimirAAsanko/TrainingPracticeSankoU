'use strict';
import {Profiles} from "./profiles.js"
export class InformationView {
    _block;
    _user;
    constructor(username, page) {
        this._block = document.getElementById('uinf');
        this._user = username;
        this._showInformation(page);
        console.log(page);

    }
    _showInformation(page) {
        //<button id="sign">Sign out</button>
        //<span id="myname">My name</span>
        console.log(page);
        if(page === 'login' || page === 'add' || page === 'edit'){

        }else {
            if ((this._user || '') === '') {
                let profilephoto = document.createElement('img');
                profilephoto.setAttribute('class', 'uimg');
                profilephoto.src = "https://sun1.velcom-by-minsk.userapi.com/VnYfaIZ1QZKUDJ5M8DwFMrDPif0I2MlopHYyWw/qlDWKNQvyQg.jpg";
                this._block.appendChild(profilephoto);
                let name = document.createElement('div');
                name.setAttribute('class', 'uinf-m uname');
                name.textContent = "Unknow";
                this._block.appendChild(name);
            } else {
                let firstInf = document.createElement('div');
                firstInf.setAttribute('class', 'display-f uinf-al');

                let profilephoto = document.createElement('img');
                profilephoto.setAttribute('class', 'uimg');
                profilephoto.src = Profiles.getProfilePhoto(this._user);
                firstInf.appendChild(profilephoto);

                let name = document.createElement('div');
                name.setAttribute('class', 'uinf-m uname');
                name.textContent = this._user;
                firstInf.appendChild(name);
                this._block.appendChild(firstInf);

                let flagsInf = document.createElement('div');
                let flag = document.createElement('img');
                flag.setAttribute('class', 'flag');
                if (Profiles.getNation(this._user) === "Anclav") {
                    flag.src = "https://ae01.alicdn.com/kf/HTB1cspseGzB9uJjSZFMq6xq4XXat/3x5FT-Fallout-100D.jpg";
                }
                if (Profiles.getNation(this._user) === "USSR") {
                    flag.src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg";
                }
                flagsInf.appendChild(flag);

                let nameOfNation = document.createElement('div');
                nameOfNation.setAttribute('class', 'uinf-m nameOfCountry');
                nameOfNation.textContent = Profiles.getNation(this._user);
                flagsInf.appendChild(nameOfNation);
                this._block.append(flagsInf);

                let thirdInf = document.createElement('div');

                let rankphoto = document.createElement('img');
                rankphoto.setAttribute('class', 'rank');

                let rank = document.createElement('div');
                rank.setAttribute('class', 'uinf-m rankText');
                if (Profiles.getRank(this._user) === "2") {
                    rankphoto.src = "https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg";
                    rank.textContent = "Praporshik";
                }
                if (Profiles.getRank(this._user) === "4") {
                    rankphoto.src = "https://sun9-25.userapi.com/c854224/v854224359/2310ac/1DGzM3uo0jo.jpg";
                    rank.textContent = "Polkovnik";
                }
                thirdInf.appendChild(rankphoto);
                thirdInf.appendChild(rank);
                this._block.appendChild(thirdInf);
            }
        }
    }
}