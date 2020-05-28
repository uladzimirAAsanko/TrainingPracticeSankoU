'use strict';


export  class Profiles{

     static profs =[
        {
            login :"Maxim Isaуev",
            profilePhoto : "https://thumb.tildacdn.com/tild3364-6263-4437-b434-306362633336/-/resize/824x/-/format/webp/s1200.jpg",
            nation :"USSR",
            rank :"4",
            id:"100",

        },
        {
            login :"Сержант Дорнан",
            profilePhoto : "https://vignette.wikia.nocookie.net/fallout/images/7/70/FO02_NPC_Dornan_B.png/revision/latest/scale-to-width-down/250?cb=20100810232822",
            nation :"Anclav",
            rank :"2",
            id:"200",
        }
    ];
    static _idOfFirst;
    static _idOfSecond;
     constructor(){
         this._idOfFirst = 0;
         this._idOfSecond= 0;
     }
    static getNation(userName){
        for(let i = 0; i < this.profs.length; i++){
            if((this.profs)[i].login === userName){
                return (this.profs)[i].nation;
            }
        }
    }

    static getProfilePhoto(userName){
        for(let i = 0; i < this.profs.length;i++){
            if(this.profs[i].login === userName){
                return this.profs[i].profilePhoto;
            }
        }
    }

    static getRank(userName){
        for(let i = 0; i < this.profs.length;i++){
            if(this.profs[i].login === userName){
                return this.profs[i].rank;
            }
        }
    }

    static getId(userName){
        for(let i = 0; i < this.profs.length;i++){
            if(this.profs[i].login === userName){
                if(i === 0){
                    this._idOfFirst = this._idOfFirst + 1;
                    return this.profs[i] + this._idOfFirst;
                }else{
                    this._idOfSecond = this._idOfSecond + 1;
                    return this.profs[i] + this._idOfSecond;
                }
            }
        }
    }

}