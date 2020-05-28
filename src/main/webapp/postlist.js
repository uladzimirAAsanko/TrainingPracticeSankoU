"use strict";

let arr = [
    {
        id:'1',
        description:"Поздравляю всех ветеранов с праздником 9 мая, с 75 летием победы!!",
        createdAt: new Date('2020-05-09T23:00:00'),
        author: 'Joseph Stalin',
        photoLink:'https://sun9-5.userapi.com/c857524/v857524468/1e9943/UOxDPNnrmew.jpg',
        photoFlag:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg',
        nation:'USSR',
        rank:'6',
        photoRank:'https://sun9-69.userapi.com/c854224/v854224359/23109a/yIvoNZLiykk.jpg',
        like:'10',

    },
    {
        id:'2',
        description:'Сложный был год: налоги, катастрофы, проституция, бандитизм и недобор в армию. С последним мириться было нельзя, и за дело принялся знающий человек — наш военком. Он собрал всех тунеядцев, дураков и калек в районе, даже глухих определил в погранотряд «Альпийские тетерева». Столько лет уже прошло, а они ещё где-то чудят!',
        createdAt: new Date('2020-05-01T21:12:00'),
        author: 'Private Pullya',
        photoLink:'https://www.infox.ru/photo/f7e/008/f7e00829163f543bbb0210ef37acdc53asdasdasd5de9ef8faa24d6.94126454-650x433-f7e00829163f543bbb0210ef37acdc53.jpg',
        photoFlag:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg',
        nation:'USSR',
        rank:'1',
        photoRank:'https://sun9-40.userapi.com/c854224/v854224359/231093/1NseP8M3Boc.jpg',
        like:'100',
    },
    {
        id:'3',
        description:'Кто такой этот ваш Штирлиц?',
        createdAt: new Date('2020-04-19T22:00:00'),
        author: 'Heinrich Müller',
        photoLink:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Heinrich_M%C3%BCller.jpg/330px-Heinrich_M%C3%BCller.jpg',
        photoFlag:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933%E2%80%931935%29.svg/200px-Flag_of_Germany_%281933%E2%80%931935%29.svg.png',
        nation:'Germany',
        rank:'5',
        photoRank:'https://sun9-13.userapi.com/c854224/v854224359/2310a3/KaSCBZZhqqQ.jpg',
        like:'30',
    },
    {
        id:'4',
        description:'Auf der Heide blüht ein kleines Blümelein Und das heißt: Erika. Heiß von hunderttausend kleinen Bienelein Wird umschwärmt: Erika Denn ihr Herz ist voller Süßigkeit, Zarter Duft entströmt dem Blütenkleid. Auf der Heide blüht ein kleines Blümelein Und das heißt: Erika.',
        createdAt: new Date('2020-04-12T13:00:00'),
        author: 'Erich Forpunstegn',
        photoLink:'https://novate.ru/files/u37559/gorjethistorumain.jpg',
        photoFlag:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933%E2%80%931935%29.svg/200px-Flag_of_Germany_%281933%E2%80%931935%29.svg.png',
        nation:'Germany',
        rank:'2',
        photoRank:'https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg',
        like:'40',
    },
    {
        id:'5',
        description:'Крупская выступает перед пионерами: — дорогие дети! Всем известна доброта Ленина. Я вам расскажу такой случай. Сидит как-то Владимир Ильич на лавочке точит бритвочку, а рядом на лавочке сидит маленькая девочка. Владимир Ильич посмотрит на нее, и снова точить. Вот Ленин побрился, кисточку вымыл, опять бритвочку точит, на девочку поглядывает. Потом бритвочку вытер и положил в футлярчик. А мог бы и полоснуть!!!',
        createdAt: new Date('2020-04-14T12:00:00'),
        author: 'Stierlitz',
        photoLink:'https://thumb.tildacdn.com/tild3364-6263-4437-b434-306362633336/-/resize/824x/-/format/webp/s1200.jpg',
        photoFlag:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933%E2%80%931935%29.svg/200px-Flag_of_Germany_%281933%E2%80%931935%29.svg.png',
        nation:'Germany',
        rank:'3',
        photoRank:'https://sun9-50.userapi.com/c854224/v854224359/231081/-x4CJYTU6gQ.jpg',
        like:'50',
    },
    {
        id:'6',
        description:'Штирлиц залез на телеграфный столб и, чтобы не привлекать внимания прохожих, развернул газету.',
        createdAt: new Date('2220-04-13T18:23:00'),
        author: 'Maxim Isaуev',
        photoLink:'https://thumb.tildacdn.com/tild3364-6263-4437-b434-306362633336/-/resize/824x/-/format/webp/s1200.jpg',
        photoFlag:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg',
        nation:'USSR',
        rank:'4',
        photoRank:'https://sun9-25.userapi.com/c854224/v854224359/2310ac/1DGzM3uo0jo.jpg',
        like:'60',
    },
    {
        id:'7',
        description:'И-ди-от, не сметь обсуждать приказы начальства! Скажу прыгать, будешь прыгать! Скажу драться, будешь драться! Скажу умереть за Родину, умрёшь без разговоров! Я ясно излагаю?',
        createdAt: new Date('2220-02-23T09:13:00'),
        author: 'Сержант Дорнан',
        photoLink:'https://vignette.wikia.nocookie.net/fallout/images/7/70/FO02_NPC_Dornan_B.png/revision/latest/scale-to-width-down/250?cb=20100810232822',
        photoFlag:'https://ae01.alicdn.com/kf/HTB1cspseGzB9uJjSZFMq6xq4XXat/3x5FT-Fallout-100D.jpg',
        nation:'Anclav',
        rank:'2',
        photoRank:'https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg',
        like:'70',
    },
    {
        id:'8',
        description:'Я вам не сэр. Я сам зарабатываю себе на жизнь, и-ди-от. Будете звать меня „сержант“, или „сержант Дорнан“. Ты меня понимаешь?',
        createdAt: new Date('2220-02-23T14:54:00'),
        author: 'Сержант Дорнан',
        photoLink:'https://vignette.wikia.nocookie.net/fallout/images/7/70/FO02_NPC_Dornan_B.png/revision/latest/scale-to-width-down/250?cb=20100810232822',
        photoFlag:'https://ae01.alicdn.com/kf/HTB1cspseGzB9uJjSZFMq6xq4XXat/3x5FT-Fallout-100D.jpg',
        nation:'Anclav',
        rank:'2',
        photoRank:'https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg',
        like:'80',
    },
    {
        id:'9',
        description:'— Ты представляешь Вегас, но не боишься сражения. Раз так, ты не из этого города трусов.',
        createdAt: new Date('2220-02-23T12:54:00'),
        author: 'Легат Ланий',
        photoLink:'https://vignette.wikia.nocookie.net/fallout/images/2/29/FNV_Lanius.jpg/revision/latest/scale-to-width-down/250?cb=20180113191401',
        photoFlag:'https://vignette.wikia.nocookie.net/fallout/images/3/3a/CaesarLegionSymbol.png/revision/latest?cb=20190909161008',
        nation:'Caesars Legion',
        rank:'5',
        photoRank:'https://sun9-13.userapi.com/c854224/v854224359/2310a3/KaSCBZZhqqQ.jpg',
        like:'80',
    },
    {
        id:'10',
        description:'Сегодня вы — это волны Тихого океана, накатывающие на восток. Вы — стойкие и непокорные секвойи, пробившиеся из земли Сьерра-Невады.',
        createdAt: new Date('2220-02-23T12:54:00'),
        author: 'Президент Кимбол',
        photoLink:'https://vignette.wikia.nocookie.net/fallout/images/9/9e/Aaron_Kimball.jpg/revision/latest/scale-to-width-down/250?cb=20120210191554',
        photoFlag:'https://vignette.wikia.nocookie.net/fallout/images/6/67/FNV_NCR_Flag.png/revision/latest/scale-to-width-down/250?cb=20110423115845',
        nation:'New California Republic',
        rank:'5',
        photoRank:'https://sun9-13.userapi.com/c854224/v854224359/2310a3/KaSCBZZhqqQ.jpg',
        like:'99',
    },
];
export class Postlist {
    _posts = [];

    constructor(posts) {
        if(posts._posts !== undefined) this._posts = posts._posts.slice();
        if (Array.isArray(posts)) this._posts = posts.slice();
    }

    addAll(posts) {
        if (!Array.isArray(posts)) return;
        let res = [];

        for (let post of posts){
            if(Postlist.validate(post) && typeof(this.get(post.id)) == "undefined") this._posts.push(post);
            else res.push(post);
        }

        return res;
    }

    clear(){
        this._posts.splice(0, this._posts.length);
    }

    save(key) {
        localStorage.setItem(key, JSON.stringify(this._posts));
    }

    static restore(key) {
        return new Postlist(JSON.parse(localStorage.getItem(key), Postlist.postReviver));
    }

    static postReviver(key, value) {
        if (key === 'createdAt') return new Date(value);
        return value;
    }

    getPage(skip = 0, top = 10, filterConfig) {
        if (typeof (skip) !== 'number') {
            console.log('Invalid argument: "skip" isn\'t number');
            return;
        }
        if (typeof top !== 'number') {
            console.log('Invalid argument: "top" isn\'t number');
            return;
        }
        if (!['object', 'undefined'].includes(typeof filterConfig)) {
            console.log('Invalid argument: "filterConfig" isn\'t object');
            return;
        }
        for (let key in filterConfig) if (!(key in this._posts[0]) && key !== 'createdAt') {
            console.log(`Invalid argument: "filterConfig" contains invalid property "${key}"`);
            return;
        }

        let res = this._posts.slice();

        for (let key in filterConfig) if (key !== 'createdAt') {
            res = res.filter(item=>{
                for(let key in filterConfig)if(filterConfig[key] !== item[key])
                    return false;
                return true;
            });
        }else{
            res = res.filter(item=>{
                for(let key in filterConfig){
                    //return filterConfig[key] - item[key] === 0;
                    if(filterConfig[key].getFullYear() === item[key].getFullYear())
                        if(filterConfig[key].getMonth() === item[key].getMonth())
                            if(filterConfig[key].getDate() === item[key].getDate())
                                return true
                    return false;
                }
            })
        }
        res.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        if(skip === top){
            return res
        }else{
            return res.slice(skip, skip + top)
        }
    }

    get(id) {
        if (typeof (id) !== 'string') {
            console.log('Invalid argument: "id" isn\'t string');
            return;
        }
        return this._posts.find(item => item.id === id);
    }

    static validate(post) {
        if (typeof post !== 'object') {
            console.log('Invalid argument: "post" isn\'t object');
            return false;
        }
        let test = {
            id: '',
            description: '',
            createdAt: new Date(),
            author: '',
            nation:'',
            rank:'',
            photoLink:'',
            photoFlag:'',
            photoRank:'',
            like:'',
        };
        for (let key in test) if (!(key in post) || typeof(test[key]) !== typeof(post[key])) {
            console.log(`Missing property '${key}'`);
            return false;
        }
        for (let key in post) if (!(key in test)) {
            console.log(`Invalid property '${key}'`);
            return false;
        }
        if (post.id === '') {
            console.log(`Empty property id`);
            return false;
        }
        if (post.photoLink === '') {
            console.log(`Empty property photoLink`);
            return false;
        }
        if (post.photoFlag === '') {
            console.log(`Empty property photoFlag`);
            return false;
        }
        if (post.photoRank === '') {
            console.log(`Empty property photoRank`);
            return false;
        }
        if (post.description.length > 200){
            console.log(`description is more than 200 chars`);
            return false;
        }
        if (post.nation === '') {
            console.log(`Empty property nation`);
            return false;
        }
        return post.author !== '';
    }

    add(post) {
        if (typeof post !== 'object') {
            return false;
        }
        if (!Postlist.validate(post)) {
            console.log('Invalid post');
            return false;
        }
        if (typeof(this.get(post.id)) !== 'undefined') {
            return false;
        }
        this._posts.push(post);
        return true;
    }

    edit(id, post) {
        if (typeof post !== 'object') {
            console.log('Invalid argument: "post" isn\'t object');
            return false;
        }
        if (id === '') {
            console.log('Invalid argument: "id" is empty');
            return false;
        }
        let source = this.get(id);
        if (typeof source === 'undefined') {
            console.log(`Wrong argument: post with id = '${id}' does not exist`);
            return false;
        }
        for (let key in post)
            if (!(key in source)) {
                console.log(`Invalid argument: "post" contains invalid property '${key}'`);
                return false;
            }
        let copy = {};
        Object.assign(copy, source);
        for (let key in post) {
            if (!['id', 'author', 'createdAt'].includes(key))
                copy[key] = post[key];
        }
        copy.id = 'falseId';
        if (Postlist.validate(copy)) {
            copy.id = id;
            Object.assign(source, copy);
        }
        else{
            return false;}
        return true;
    }

    remove(id) {
        if (id === '') {
            console.log('Invalid argument: "id" is empty');
            return;
        }
        let ind = -1;
        let source = this._posts.find((item, index) => {
            ind = index;
            return item.id === id;
        });
        if (typeof source === 'undefined') {
            console.log(`Wrong argument: post with id = '${id}' does not exist`);
            return false;
        }
        this._posts.splice(ind, 1);
        return true;
    }



    testEverything() {
        this._testGettingMany();
        this._testGettingSingle();
        this._testValidation();
        this._testAdding();
        this._testAddingMany();
        this._testEditing();
        this._testRemoving();
        this._testLiking();
        this._testCleaning();
    }

    _testGettingMany() {
        console.log('\nTest getPage()\n\n');

        console.log(`getPage(0, 10)`);
        console.log(this.getPage(0, 10));

        console.log('getPage(\'0\', 10);');
        console.log(this.getPage('0', 10));

        console.log('getPage(0, \'10\');');
        console.log(this.getPage(0, '10'));

        console.log('getPage(0, 8, {author: \'User_1\'})');
        console.log(this.getPage(0, 8, {author: 'User_1'}));

        console.log('getPage(0, 15, {author: \'Task\'})');
        console.log(this.getPage(0, 15, {author: 'Task'}));

        console.log('getPage(0, 15, {author: \'Task\', wrongProperty: \'value\'})');
        console.log(this.getPage(0, 15, {author: 'Task', wrongProperty: 'value'}));

        console.log('getPage(0, 15, "Task")');
        console.log(this.getPage(0, 15, "Task"));

        console.log('getPage(0, 10, {createdAt: new Date(2020, 0, 19)})');
        console.log(this.getPage(0, 10, {createdAt: new Date(2020, 0, 19)}));

        console.log('getPage(0, 10, {author: \'User_1\', createdAt: new Date(2020, 0, 19)})');
        console.log(this.getPage(0, 10, {author: 'User_1', createdAt: new Date(2020, 0, 19)}));

        console.log(`getPage(20, 10)`);
        console.log(this.getPage(20, 10));

        console.log(`getPage(5, 10)`);
        console.log(this.getPage(5, 10));

            console.log('getPage(0, 15, {hashTags: [\'tag_1\']})');
        console.log(this.getPage(0, 15, {hashTags: ['tag_1']}));

        console.log('getPage(0, 15, {hashTags: [\'tag_1\', \'tag_3\']})');
        console.log(this.getPage(0, 15, {hashTags: ['tag_1', 'tag_3']}));
    }

    _testGettingSingle() {
        console.log('\nTest get()\n\n');

        console.log('get(\'5\')');
        console.log(this.get('5'));

        console.log('get(\'5\')');
        console.log(this.get(5));

        console.log('get(\'30\')');
        console.log(this.get('30'));
    }

    _testValidation() {
        console.log('\nTest validate()\n\n');

        console.log(`get('3')`);
        console.log(this.get('3'));
        console.log('validate(get(\'3\'))');
        console.log(Postlist.validate(this.get('3')));

        console.log('validate()');
        console.log(Postlist.validate());

        console.log('validate(3)');
        console.log(Postlist.validate(3));

        console.log(`validate({id: '',
        description: '',
        createdAt: new Date(),
        author: '',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(Postlist.validate({
                id: '',
                description: '',
                createdAt: new Date(),
                author: '',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));

        console.log(`validate({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(Postlist.validate({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));

        console.log(`validate({id: '',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(Postlist.validate({
                id: '',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ) + '; empty id');

        console.log(`validate({id: '25',
        description: '',
        createdAt: new Date(),
        author: '',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(Postlist.validate({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: '',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ) + '; empty author');

        console.log(`validate({id: '25',
        description: 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.205 символов',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(Postlist.validate({
                id: '25',
                description: 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.205 символов',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ) + '; description is too long');

        console.log(`validate({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        wrongProperty: 'value'})`);
        console.log(Postlist.validate({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                wrongProperty: 'value'
            }
        ) + '; wrong structure');
        console.log(`validate({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',})`);
        console.log(Postlist.validate({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
            }
        ) + '; wrong structure');

        console.log(`validate({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: ['a', 21],})`);
        console.log(Postlist.validate({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: ['a', 21],
            }
        ));

        console.log(`validate({id: '25',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: ['a', 21],})`);
        console.log(Postlist.validate({
                id: '25',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: ['a', 21],
            }
        ));
    }

    _testAdding() {
        console.log('\nTest add()\n\n');

        console.log(`add({id: '25',
        description: '',
        createdAt: new Date('2020-04-23T21:19:07'),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(this.add({
                id: '25',
                description: '',
                createdAt: new Date('2020-04-23T21:19:07'),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));

        console.log(`add({id: '2',
        description: '',
        createdAt: new Date(),
        author: 'author',
        photoLink: '',
        likes: [],
        hashTags: [],})`);
        console.log(this.add({
                id: '2',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: '',
                likes: [],
                hashTags: [],
            }
        ));

        console.log(`add('post')`);
        console.log(this.add('post'));

        console.log(`add({id: '30',
        description: '',
        createdAt: new Date('2020-04-23T21:19:07'),
        author: 'author',
        photoLink: '',})`);
        console.log(this.add({
                id: '30',
                description: '',
                createdAt: new Date('2020-04-23T21:19:07'),
                author: 'author',
                photoLink: '',
            }
        ));
    }

    _testAddingMany(){
        console.log('\nTest addAll()\n\n');
        console.log(this._posts);
        console.log(`addAll([
                {
                    id: '21',
                    description: 'Микрочип, производимый на некотором заводе, имеет форму плоского квадрата со стороной a микрометров.',
                    createdAt: new Date('2020-01-19T13:24:00'),
                    author: 'User_1',
                    likes: ['Task', 'User_1', 'author', 'User_3'],
                    hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5'],
                },
                {
                    id: '2',
                    description: 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.',
                    createdAt: new Date('2020-01-19T13:27:00'),
                    author: 'User_1',
                    likes: ['User_1', 'author', 'User_3'],
                    hashTags: ['tag_1', 'tag_2', 'tag_4', 'tag_5'],
                },
                {
                    id: '23',
                    description: 'Для успешной распайки необходимо от каждого контакта протянуть проводящую дорожку к одной из сторон чипа для последующего закрепления на ноге интегральной схемы.',
                    createdAt: new Date('2020-01-19T13:30:00'),
                    author: 'User_1',
                    likes: ['Task', 'User_1', 'User_3'],
                    hashTags: ['tag_1', 'tag_3'],
                },
                {
                    id: '24',
                    description: 'Однако используемый технологический процесс позволяет создавать только прямые дорожки, идущие от контакта к краю чипа без изгибов и параллельные сторонам кристалла,',
                    createdAt: new Date('2020-01-19T13:35:00'),
                    author: 'Task',
                    photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
                    likes: [],
                    hashTags: ['tag_1'],
                },
                {
                    id: '25',
                    description: 'причем невозможно проложить одну дорожку под или над другой.',
                    createdAt: new Date('2020-01-19T13:36:00'),
                    author: '',
                    photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
                    likes: ['Task', 'User_1', 'author', 'User_3'],
                    hashTags: [],
                },
            ])`);
        console.log(this.addAll([
            {
                id: '21',
                description: 'Микрочип, производимый на некотором заводе, имеет форму плоского квадрата со стороной a микрометров.',
                createdAt: new Date('2020-01-19T13:24:00'),
                author: 'User_1',
                likes: ['Task', 'User_1', 'author', 'User_3'],
                hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5'],
            },
            {
                id: '2',
                description: 'На нижнюю грань выведены контакты, причем координаты этих контактов в системе координат, в которой оси параллельны сторонам чипа, а единичный отрезок имеет длину 1 мкм, являются целыми числами.',
                createdAt: new Date('2020-01-19T13:27:00'),
                author: 'User_1',
                likes: ['User_1', 'author', 'User_3'],
                hashTags: ['tag_1', 'tag_2', 'tag_4', 'tag_5'],
            },
            {
                id: '23',
                description: 'Для успешной распайки необходимо от каждого контакта протянуть проводящую дорожку к одной из сторон чипа для последующего закрепления на ноге интегральной схемы.',
                createdAt: new Date('2020-01-19T13:30:00'),
                author: 'User_1',
                likes: ['Task', 'User_1', 'User_3'],
                hashTags: ['tag_1', 'tag_3'],
            },
            {
                id: '24',
                description: 'Однако используемый технологический процесс позволяет создавать только прямые дорожки, идущие от контакта к краю чипа без изгибов и параллельные сторонам кристалла,',
                createdAt: new Date('2020-01-19T13:35:00'),
                author: 'Task',
                photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
                likes: [],
                hashTags: ['tag_1'],
            },
            {
                id: '25',
                description: 'причем невозможно проложить одну дорожку под или над другой.',
                createdAt: new Date('2020-01-19T13:36:00'),
                author: '',
                photoLink: 'https://sun1.beltelecom-by-minsk.userapi.com/Uv7oJSk0ePo7QMQQZgWN1al2w0hF9FqcL5d11Q/MSdYzJobMBk.jpg',
                likes: ['Task', 'User_1', 'author', 'User_3'],
                hashTags: [],
            },
        ]));
        console.log(this._posts);
    }

    _testEditing() {
        console.log('\nTest edit()\n\n');

        console.log('get(\'25\').description');
        console.log(this.get('25').description);

        console.log(`edit('25', {description: new Date().toString(),})`);
        console.log(this.edit('25', {
                description: new Date().toString(),
            }
        ));

        console.log('get(\'25\').description');
        console.log(this.get('25').description);

        console.log('get(\'30\')');
        console.log(this.get('30'));

        console.log(`edit('30', {description: 'New description',})`);
        console.log(this.edit('30', {
                description: 'New description',
            }
        ));

        console.log(`edit('', {description: 'New description',})`);
        console.log(this.edit('', {
                description: 'New description',
            }
        ));
        console.log(`edit('25', 'post')`);
        console.log(this.edit('25', 'post'));

        console.log(`edit('25', {description: 'New description',
        falseProperty: 'property'})`);
        console.log(this.edit('25', {
                description: 'New description',
                falseProperty: 'property'
            }
        ));

        console.log('get(\'25\').description');
        console.log(this.get('25').description);

        console.log(`edit('25', {description: 'Первая строка содержит целое число n (2 ≤ n ≤ 300). Каждая из
         последующих n строк содержит два целых числа ai и bi (0 ≤ ai < bi ≤ 1 000 000 000) — границы интервала 
         для силы руки каждого игрока.(Over than 200 symbols)',})
        //Description is too big`);
        console.log(this.edit('25', {
                description: 'Первая строка содержит целое число n (2 ≤ n ≤ 300). Каждая из последующих n строк содержит два целых числа ai и bi (0 ≤ ai < bi ≤ 1 000 000 000) — границы интервала для силы руки каждого игрока.(Over than 200 symbols)',
            }
        ));

        console.log('get(\'25\').description');
        console.log(this.get('25').description);

        console.log(`get('1').likes`);
        console.log(this.get('1').likes);

        console.log(`edit('25', {likes: ['Task', 'User_1', 'author', 'User_3', 'User_5'],})`);
        console.log(this.edit('1', {
                likes: ['Task', 'User_1', 'author', 'User_3', 'User_5'],
            }
        ));

        console.log(`get('1').likes`);
        console.log(this.get('1').likes);

        console.log(`get('1').hashTags`);
        console.log(this.get('1').hashTags);

        console.log(`edit('25', {hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5', 'new_tag'],})`);
        console.log(this.edit('1', {
                hashTags: ['tag_1', 'tag_2', 'tag_3', 'tag_4', 'tag_5', 'new_tag'],
            }
        ));

        console.log(`get('1').hashTags`);
        console.log(this.get('1').hashTags);
    }

    _testRemoving() {
        console.log('\nTest remove()\n\n');

        console.log(`remove('');`);
        console.log(this.remove(''));

        console.log(`get('30');`);
        console.log(this.get('30'));
        console.log(`remove('30');`);
        console.log(this.remove('30'));

        console.log(`get('25');`);
        console.log(this.get('25'));
        console.log(`remove('25');`);
        console.log(this.remove('25'));
        console.log(`get('25');`);
        console.log(this.get('25'));
    }

    _testLiking() {
        console.log('\nTest addLike()\n\n');
        console.log('getPost(\'5\')');
        console.log(this.get('5'));

        console.log(`\n'toggleLike('5', "NewUser")'\n\n`);
        console.log(this.toggleLike('5', "NewUser"));
        console.log(this.get('5').likes);

        console.log(`\n'toggleLike('5', "NewUser")'\n\n`);
        console.log(this.get('5').likes);
    }

    _testCleaning(){
        console.log('\nTest clear()\n\n');
        console.log(this._posts);
        console.log(`clear()`);
        this.clear();
        console.log(this._posts);
    }
}

export function testContainer() {
    return new Postlist(arr);
}