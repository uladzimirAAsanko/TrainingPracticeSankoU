"use strict";

(function () {
let posts = [
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

	},
];
function getPosts(skip = 0, top = 10, filterConfig) {
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
        for (let key in filterConfig) if (!(key in posts[0]) && key !== 'createdAt') {
            console.log(`Invalid argument: "filterConfig" contains invalid property "${key}"`);
            return;
        }
        if(skip + top > posts.length){
        	console.log(`Invalid argument: "more posts than array has"`);
        	return;	
        }

        let res = posts.slice();
        
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
        return res.slice(skip, skip + top)
}
function getPost(id) {
        if (typeof (id) !== 'string') {
            console.log('Invalid argument: "id" isn\'t string');
            return;
        }
        return posts.find(item => item.id === id);
}
function validatePost(post) {
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
function addPost(post) {
        if (typeof post !== 'object') {
            return false;
        }
        if (!validatePost(post)) {
            console.log('Invalid post');
            return false;
        }
        if (typeof(getPost(post.id)) !== 'undefined') {
            return false;
        }
        posts.push(post);
        return true;
}
	function editPost(id, post) {
        if (typeof post !== 'object') {
            console.log('Invalid argument: "post" isn\'t object');
            return false;
        }
        if (id === '') {
            console.log('Invalid argument: "id" is empty');
            return false;
        }
        let source = getPost(id);
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
        if (validatePost(copy)) {
            copy.id = id;
            Object.assign(source, copy);
        }
        else{
         return false;}
        return true;
    }

    function removePost(id) {
        if (id === '') {
            console.log('Invalid argument: "id" is empty');
            return;
        }
        let ind = -1;
        let source = posts.find((item, index) => {
            ind = index;
            return item.id === id;
        });
        if (typeof source === 'undefined') {
            console.log(`Wrong argument: post with id = '${id}' does not exist`);
            return false;
        }
        posts.splice(ind, 1);
        return true;
    }

    function testEverything() {
        testArray();
        testGetPost();
        testGetPosts();
        testValidatePost();
        testEditingPost();
        testAdding();
        testRemoving();
    }

    function testArray() {
        console.log('Check array\n\n');
        console.log(`Array length is ${posts.length}`);
        console.log(posts);
    }
    function testGetPost() {
        console.log('\nTest getPost()\n\n');
        console.log('getPost(\"5\")');
		console.log(getPost('5'));
     	console.log('getPost(\"30\")');
		console.log(getPost('30'));           
    }
    function testGetPosts(){
        console.log('\nTest getPosts()\n\n');
        console.log('show 10 posts');
        console.log('getPosts(\"0\",\"10\")');
		console.log(getPosts(0,10));

		console.log('show more posts that we have');
        console.log('getPosts(\"0\",\"20\")');
		console.log(getPosts(0,20));

     	console.log('getPosts(0,10,{createdAt: new Date(2020, 3, 12)})');
		console.log(getPosts(0,10,{createdAt: new Date(2020, 3, 12)}));	
		console.log('skip isnt a number');
		console.log('getPosts(\"0\",10,{createdAt: new Date(2020, 3, 12)})');
		console.log(getPosts("0",10,{createdAt: new Date(2020, 3, 12)}));

		console.log('top isnt a number');
		console.log('getPosts(0,\"10\",{createdAt: new Date(2020, 3, 12)})');
		console.log(getPosts(0,"10",{createdAt: new Date(2020, 3, 12)}));	
    	console.log('filterConfig isnt an object');
		console.log('getPosts(0,10,2)');
		console.log(getPosts(0,10,2));

		console.log('filtration by date');
		console.log('getPosts(0,10,{createdAt: new Date(2220, 1, 23)})');
		console.log(getPosts(0,10,{createdAt: new Date(2220, 1, 23)}));	
		console.log('filtration by date but 2 firsts posts');
		console.log('getPosts(0,2,{createdAt: new Date(2220, 1, 23)})');
		console.log(getPosts(0,2,{createdAt: new Date(2220, 1, 23)}));	

		console.log('filtration by author');
		console.log('getPosts(0,10,{author: "Сержант Дорнан"})');
		console.log(getPosts(0,10,{author: "Сержант Дорнан"}));	

		console.log('filtration by nation');
		console.log('getPosts(0,10,{nation: "USSR"})');
		console.log(getPosts(0,10,{nation: "USSR"}));	
    }
    function testValidatePost(){
    	console.log('\nTest getPosts()\n\n');
    	console.log(`Post 3 :`);
        console.log(getPost('3'));

        console.log("post isnt an object");
        console.log('validatePost(getPost(\'3\'))');
        console.log(validatePost(getPost('3')));

        console.log("post is a null");
        console.log('validatePost()');
        console.log(validatePost());

        console.log("validate third post");
        console.log('validatePost(getPost(\"3\"))');
        console.log(validatePost(getPost("3")));

        console.log("validate an empty post");
        console.log(`validatePost({
                id: '',
                description: '',
                createdAt: new Date(),
                author: '',
                photoLink: '',
                photoFlag: '',
                photoRank: '',
                nation: '',
                rank: '',
            }`);
        console.log(validatePost({
                id: '',
                description: '',
                createdAt: new Date(),
                author: '',
                photoLink: '',
                photoFlag: '',
                photoRank: '',
                nation: '',
                rank: '',
            }
        ));

        console.log("validate post with description more than 200 chars");
        console.log(`validatePost({
                id: '25',
                description: 'shshshshshshhshshshhshshshsshshshshshshhshshshhshshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshs',
                createdAt: new Date(),
                author: 'das',
                photoLink: 'dsa',
                photoFlag: 'dsa',
                photoRank: 'dsa',
                nation: 'dsa',
                rank: '2',
            }`);
        console.log(validatePost({
                id: "25",
                description: "shshshshshshhshshshhshshshsshshshshshshhshshshhshshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshsshshshshshshhshshshhshshshs",
                createdAt: new Date(),
                author: "das",
                photoLink: "das",
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "2",
            }
        ));

        console.log("validate post with createdAt != Date");
        console.log(`validatePost({
                id: "25",
                description: "das",
                createdAt: "",
                author: "das",
                photoLink: "dsa",
                photoFlag: "dsa",
                photoRank: "dsa",
                nation: "dsa",
                rank: "2",
            }`);
        console.log(validatePost({
                id: "25",
                description: "das",
                createdAt: "",
                author: "das",
                photoLink: "das",
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "2",
            }
        ));

        console.log("validate post with not valid author");
        console.log(`validatePost({
                id: "25",
                description: "das",
                createdAt: "new Date(),",
                author: "",
                photoLink: "dsa",
                photoFlag: "dsa",
                photoRank: "dsa",
                nation: "dsa",
                rank: "2",
            }`);
        console.log(validatePost({
                id: "25",
                description: "das",
                createdAt: new Date(),
                author: "",
                photoLink: "das",
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "2",
            }
        ));

        console.log("validate post with not valid photoLink");
        console.log(`validatePost({
                id: "25",
                description: "das",
                createdAt: "new Date(),",
                author: "das",
                photoLink: "",
                photoFlag: "dsa",
                photoRank: "dsa",
                nation: "dsa",
                rank: "2",
            }`);
        console.log(validatePost({
                id: "25",
                description: "das",
                createdAt: new Date(),
                author: "das",
                photoLink: "",
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "2",
            }
        ));

        console.log("validate post with not valid photoFlag");
        console.log(`validatePost({
                id: "25",
                description: "das",
                createdAt: "new Date(),",
                author: "das",
                photoLink: "das",
                photoFlag: "",
                photoRank: "dsa",
                nation: "dsa",
                rank: "2",
            }`);
        console.log(validatePost({
                id: "25",
                description: "das",
                createdAt: new Date(),
                author: "das",
                photoLink: "dsa",
                photoFlag: "",
                photoRank: "das",
                nation: "das",
                rank: "2",
            }
        ));

        console.log("validate post with not valid photoRank");
        console.log(`validatePost({
                id: "25",
                description: "das",
                createdAt: "new Date(),",
                author: "das",
                photoLink: "das",
                photoFlag: "das",
                photoRank: "dsa",
                nation: "dsa",
                rank: "2",
            }`);
        console.log(validatePost({
                id: "25",
                description: "das",
                createdAt: new Date(),
                author: "das",
                photoLink: "dsa",
                photoFlag: "das",
                photoRank: "",
                nation: "das",
                rank: "2",
            }
        ));
        console.log("validate post with not valid nation");
        console.log(`validatePost({
                id: "25",
                description: "das",
                createdAt: "new Date(),",
                author: "das",
                photoLink: "das",
                photoFlag: "dsa",
                photoRank: "dsa",
                nation: "",
                rank: "2",
            }`);
        console.log(validatePost({
                id: "25",
                description: "das",
                createdAt: new Date(),
                author: "das",
                photoLink: "dsa",
                photoFlag: "das",
                photoRank: "das",
                nation: "",
                rank: "2",
            }
        ));

        console.log("validate post with not valid rank");
        console.log(`validatePost({
                id: "25",
                description: "das",
                createdAt: "new Date(),",
                author: "das",
                photoLink: "das",
                photoFlag: "das",
                photoRank: "dsa",
                nation: "dsa",
                rank: "das",
            }`);
        console.log(validatePost({
                id: "25",
                description: "das",
                createdAt: new Date(),
                author: "das",
                photoLink: "dsa",
                photoFlag: "",
                photoRank: "das",
                nation: "das",
                rank: "dsa",
            }
        ));
    }

    function testEditingPost(){
    	console.log('\nTest editingPost()\n\n');

      	console.log('post isnt an object');
    	console.log(`editPost('5', 22`);
        console.log(editPost('5', 22));


    	console.log("Change description");
    	console.log("Old description");
        console.log('getPost(\'5\').description');
        console.log(getPost('5').description);
        console.log(`editPost('5', {description: new Date().toString(),})`);
        console.log(editPost('5', {
                description: new Date().toString(),
            }
        ));
        console.log("New description");
        console.log('getPost(\'5\').description');
        console.log(getPost('5').description);

        console.log("Change photoLink");
    	console.log("Old photoLink");
        console.log('getPost(\'5\').photoLink');
        console.log(getPost('5').photoLink);
        console.log(`editPost('5', {photoLink: "23 ne photo"})`);
        console.log(editPost('5', {
                photoLink: "23 ne photo",
            }
        ));
        console.log("New photoLink");
        console.log('getPost(\'5\').photoLink');
        console.log(getPost('5').photoLink);

        console.log("Change photoFlag");
    	console.log("Old photoFlag");
        console.log('getPost(\'5\').photoFlag');
        console.log(getPost('5').photoFlag);
        console.log(`editPost('5', {photoFlag: "23 ne photo"})`);
        console.log(editPost('5', {
                photoFlag: "23 ne photo",
            }
        ));
        console.log("New photoFlag");
        console.log('getPost(\'5\').photoFlag');
        console.log(getPost('5').photoFlag);

        console.log("Change photoRank");
    	console.log("Old photoRank");
        console.log('getPost(\'5\').photoRank');
        console.log(getPost('5').photoRank);
        console.log(`editPost('5', {photoRank: "23 ne photo"})`);
        console.log(editPost('5', {
                photoRank: "23 ne photo",
            }
        ));
        console.log("New photoRank");
        console.log('getPost(\'5\').photoRank');
        console.log(getPost('5').photoRank);


        console.log("Change rank");
    	console.log("Old rank");
        console.log('getPost(\'5\').rank');
        console.log(getPost('5').rank);
        console.log(`editPost('5', {photoRank: "23"})`);
        console.log(editPost('5', {
                photoRank: "23",
            }
        ));
        console.log("New rank");
        console.log('getPost(\'5\').rank');
        console.log(getPost('5').rank);


        console.log("Change nation");
    	console.log("Old nation");
        console.log('getPost(\'5\').nation');
        console.log(getPost('5').nation);
        console.log(`editPost('5', {nation: "ne nation"})`);
        console.log(editPost('5', {
                nation: "ne nation",
            }
        ));
        console.log("New nation");
        console.log('getPost(\'5\').nation');
        console.log(getPost('5').nation);
    }

     function testAdding() {
        console.log('\nTest addPost()\n\n');
        console.log("Try to add post with id =2 ");
        console.log(`id: '2',
                description: 'das',
                createdAt: new Date(),
                author: 'author',
                photoLink: 'das',
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "dsa",`);
        console.log(addPost({
                id: '2',
                description: 'das',
                createdAt: new Date(),
                author: 'author',
                photoLink: 'dsa',
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "dsa",
            }
        ));
        console.log("Try to add post with id =25 ");
        console.log(`addPost({id: '25',
                description: 'dsa',
                createdAt: new Date(),
                author: 'author',
                photoLink: 'dsa',
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "dsa",`);
        console.log(addPost({
                id: '25',
                description: 'das',
                createdAt: new Date(),
                author: 'author',
                photoLink: 'das',
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "dsa",
            }
        ));
        console.log(`addPost('post')`);
        console.log(addPost('post'));

        console.log(`id: '30',
                description: 'da',
                createdAt: new Date(),
                author: 'author',
                photoLink: 'das',
                photoFlag: "ads",
                photoRank: "das",
                nation: "das",
                rank: "dsa",`);
        console.log(addPost({
                id: '30',
                description: '',
                createdAt: new Date(),
                author: 'author',
                photoLink: 'dsa',
                photoFlag: "das",
                photoRank: "das",
                nation: "das",
                rank: "dsa",
            }
        ));
    }

    function testRemoving() {
        console.log('\nTest removePost()\n\n');
        console.log(`removePost('');`);
        console.log(removePost(''));
        console.log(`getPost('30');`);
        console.log(getPost('30'));
        console.log(`removePost('5');`);
        console.log(removePost('5'));
        console.log(`getPost('5');`);
        console.log(getPost('5'));
        console.log(`removePost('5');`);
        console.log(removePost('5'));
        console.log(`getPost('25');`);
        console.log(getPost('25'));
    }

    testEverything();
}());