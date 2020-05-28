package by.sanko.repo;

import javax.servlet.ServletOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.StringTokenizer;

public class Posts {
    static ArrayList<Tweet> mas = new ArrayList<Tweet>();
    static boolean isInit = false;

    public static void Init(){
        if(!isInit){
            ArrayList<String> arr1 = new ArrayList<>();
            ArrayList<String> arr2 = new ArrayList<>();
            ArrayList<String> arr3 = new ArrayList<>();
            ArrayList<String> arr4 = new ArrayList<>();
            ArrayList<String> arr5 = new ArrayList<>();
            ArrayList<String> arr6 = new ArrayList<>();
            arr1.add("#сПобедой");
            arr1.add("#9Мая");
            arr2.add("#AlpiskieTetereva");
            arr2.add("#ДМБ");
            arr3.add("#Stieglitz");
            arr3.add("#SPY");
            arr3.add("#17MGNOVENIYVESNY");
            arr4.add("#song");
            arr4.add("#pesnya");
            arr5.add("#anek");
            arr5.add("#funny");
            arr5.add("#ahah");
            arr6.add("#anekdot");
            arr6.add("#smeshnoy");
            arr6.add("#veryfunny");
            arr6.add("#anek");
            mas.add(new Tweet(1," всех ветеранов с праздником 9 мая, с 75 летием победы!!",new Date(2020,5,9,23,00),"'Joseph Stalin","https://sun9-5.userapi.com/c857524/v857524468/1e9943/UOxDPNnrmew.jpg","https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg","https://sun9-69.userapi.com/c854224/v854224359/23109a/yIvoNZLiykk.jpg","USSR",6,228946570, arr1));
            mas.add(new Tweet(2,"Сложный был год: налоги, катастрофы, проституция, бандитизм и недобор в армию. С последним мириться было нельзя, и за дело принялся знающий человек — наш военком. Он собрал всех тунеядцев, дураков и калек в районе, даже глухих определил в погранотряд «Альпийские тетерева». Столько лет уже прошло, а они ещё где-то чудят!",new Date(2020,5,1,21,12),"Private Pullya","https://www.infox.ru/photo/f7e/008/f7e00829163f543bbb0210ef37acdc53asdasdasd5de9ef8faa24d6.94126454-650x433-f7e00829163f543bbb0210ef37acdc53.jpg","https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg","https://sun9-40.userapi.com/c854224/v854224359/231093/1NseP8M3Boc.jpg","USSR",1,33,arr2));
            mas.add(new Tweet(3,"Кто такой этот ваш Штирлиц?",new Date(2020,4,12,22,13),"Heinrich Müller","https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Heinrich_M%C3%BCller.jpg/330px-Heinrich_M%C3%BCller.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933%E2%80%931935%29.svg/200px-Flag_of_Germany_%281933%E2%80%931935%29.svg.png","https://sun9-13.userapi.com/c854224/v854224359/2310a3/KaSCBZZhqqQ.jpg","Germany",5,55, arr3));
            mas.add(new Tweet(4,"Auf der Heide blüht ein kleines Blümelein Und das heißt: Erika. Heiß von hunderttausend kleinen Bienelein Wird umschwärmt: Erika Denn ihr Herz ist voller Süßigkeit, Zarter Duft entströmt dem Blütenkleid. Auf der Heide blüht ein kleines Blümelein Und das heißt: Erika.",new Date(2020,4,12,13,05),"Erich Forpunstegn","https://novate.ru/files/u37559/gorjethistorumain.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933%E2%80%931935%29.svg/200px-Flag_of_Germany_%281933%E2%80%931935%29.svg.png","https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg","Germany",2,421,arr4));
            mas.add(new Tweet(5,"Крупская выступает перед пионерами: — дорогие дети! Всем известна доброта Ленина. Я вам расскажу такой случай. Сидит как-то Владимир Ильич на лавочке точит бритвочку, а рядом на лавочке сидит маленькая девочка. Владимир Ильич посмотрит на нее, и снова точить. Вот Ленин побрился, кисточку вымыл, опять бритвочку точит, на девочку поглядывает. Потом бритвочку вытер и положил в футлярчик. А мог бы и полоснуть!!!",new Date(2020,4,14,12,25),"Stierlitz","https://thumb.tildacdn.com/tild3364-6263-4437-b434-306362633336/-/resize/824x/-/format/webp/s1200.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Germany_%281933%E2%80%931935%29.svg/200px-Flag_of_Germany_%281933%E2%80%931935%29.svg.png","https://sun9-50.userapi.com/c854224/v854224359/231081/-x4CJYTU6gQ.jpg","Germany",3,3648, arr5));
            mas.add(new Tweet(6,"Кто такой этот ваш Штирлиц?",new Date(2020,4,13,23,0),"Maxim Isaуev","https://thumb.tildacdn.com/tild3364-6263-4437-b434-306362633336/-/resize/824x/-/format/webp/s1200.jpg","https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg","https://sun9-25.userapi.com/c854224/v854224359/2310ac/1DGzM3uo0jo.jpg","USSR",4,236, arr6));
            mas.add(new Tweet(7,"И-ди-от, не сметь обсуждать приказы начальства! Скажу прыгать, будешь прыгать! Скажу драться, будешь драться! Скажу умереть за Родину, умрёшь без разговоров! Я ясно излагаю?",new Date(2220,2,23,9,13),"Сержант Дорнан","https://vignette.wikia.nocookie.net/fallout/images/7/70/FO02_NPC_Dornan_B.png/revision/latest/scale-to-width-down/250?cb=20100810232822","https://ae01.alicdn.com/kf/HTB1cspseGzB9uJjSZFMq6xq4XXat/3x5FT-Fallout-100D.jpg","https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg","Anclav",2,9999999, new ArrayList<String>()));
            mas.add(new Tweet(8,"Я вам не сэр. Я сам зарабатываю себе на жизнь, и-ди-от. Будете звать меня „сержант“, или „сержант Дорнан“. Ты меня понимаешь?",new Date(2220,2,23,14,54),"Сержант Дорнан","https://vignette.wikia.nocookie.net/fallout/images/7/70/FO02_NPC_Dornan_B.png/revision/latest/scale-to-width-down/250?cb=20100810232822","https://ae01.alicdn.com/kf/HTB1cspseGzB9uJjSZFMq6xq4XXat/3x5FT-Fallout-100D.jpg","https://sun9-70.userapi.com/c854224/v854224359/23108a/MTLPRdhNrfs.jpg","Anclav",2,9999999, new ArrayList<String>()));
            mas.add(new Tweet(10,"Сегодня вы — это волны Тихого океана, накатывающие на восток. Вы — стойкие и непокорные секвойи, пробившиеся из земли Сьерра-Невады.",new Date(2220,2,23,9,59),"Президент Кимбол","https://vignette.wikia.nocookie.net/fallout/images/9/9e/Aaron_Kimball.jpg/revision/latest/scale-to-width-down/250?cb=20120210191554","https://vignette.wikia.nocookie.net/fallout/images/6/67/FNV_NCR_Flag.png/revision/latest/scale-to-width-down/250?cb=20110423115845","https://sun9-13.userapi.com/c854224/v854224359/2310a3/KaSCBZZhqqQ.jpg","New California Republic",5,0, new ArrayList<String>()));
            mas.add(new Tweet(9,"— Ты представляешь Вегас, но не боишься сражения. Раз так, ты не из этого города трусов.",new Date(2220,2,23,12,31),"Легат Ланий","https://vignette.wikia.nocookie.net/fallout/images/2/29/FNV_Lanius.jpg/revision/latest/scale-to-width-down/250?cb=20180113191401","https://vignette.wikia.nocookie.net/fallout/images/3/3a/CaesarLegionSymbol.png/revision/latest?cb=20190909161008","https://sun9-13.userapi.com/c854224/v854224359/2310a3/KaSCBZZhqqQ.jpg","Caesars Legion",5,444444444, new ArrayList<String>()));
            isInit = true;
           mas.sort((a, b) -> b.compareTo(a));
        }
    }
    public static Tweet getPost(int index){
        for(int i = 0; i < mas.size();i++){
            if(mas.get(i).id == index){
                return mas.get(i);
            }
        }
        return null;
    }

    public static boolean delete(int index){
        for(int i = 0; i < mas.size();i++){
            if(mas.get(i).id == index){
                mas.remove(i);
                return true;
            }
        }
        return false;
    }

    public static boolean validate(Tweet tmp){
        if(tmp.createdAt == null){
            return false;
        }
        if(tmp.author == null){
            return false;
        }
        if(tmp.description == null){
            return false;
        }
        if(tmp.nation == null){
            return false;
        }
        if(tmp.photoFlag == null){
            return false;
        }
        if(tmp.photoRank == null){
            return false;
        }
        if(tmp.photoLink == null){
            return false;
        }
        if(tmp.rank > 6 || tmp.rank < 1){
            return false;
        }
        return Posts.getPost(tmp.id) != null;
    }

    public static boolean add(Tweet tmp){
        if(Posts.validate(tmp)){
            mas.add(tmp);
            mas.sort((a, b) -> b.compareTo(a));
            return true;
        }else{
            return false;
        }
    }

    public static ArrayList<Tweet> search(String[] param, String[] keyWords){
        if(param.length != keyWords.length){
            return null;
        }
        ArrayList<Tweet> tmp = new ArrayList<Tweet>();
        for(int i =0; i < param.length;i++){
            if(i == 0) {
                switch (param[i]) {
                    case "hashTags":
                        StringTokenizer tokenizer = new StringTokenizer(keyWords[i],",");
                        String[] findTags = new String[tokenizer.countTokens()];
                        for(int k = 0; k < tokenizer.countTokens();k++){
                            findTags[k] = tokenizer.nextToken();
                        }
                        for(int j = 0; j < mas.size();j++){
                            boolean checkTags = true;
                            for(int k =0; k < findTags.length;k++){
                                if(!mas.get(j).getTags().contains(findTags[k])){
                                    checkTags = false;
                                }
                                if(!checkTags)
                                    break;
                            }
                            if(checkTags){
                                tmp.add(mas.get(j));
                            }
                        }
                        break;
                    case "id":
                        for (int j = 0; j < mas.size(); j++) {
                            if (mas.get(j).id == Integer.parseInt(keyWords[i])) {
                                tmp.add(mas.get(j));
                            }
                        }
                        break;
                    case "author":
                        for (int j = 0; j < mas.size(); j++) {
                            if (mas.get(j).author.compareTo(keyWords[i]) == 0) {
                                tmp.add(mas.get(j));
                            }
                        }
                        break;
                    case "nation":
                        for (int j = 0; j < mas.size(); j++) {
                            if (mas.get(j).nation.compareTo(keyWords[i]) == 0) {
                                tmp.add(mas.get(j));
                            }
                        }
                        break;
                    case "rank":
                        for (int j = 0; j < mas.size(); j++) {
                            if (mas.get(j).rank == Integer.parseInt(keyWords[i])) {
                                tmp.add(mas.get(j));
                            }
                        }
                        break;
                    case "createdAt":
                        for (int j = 0; j < mas.size(); j++) {
                            Date ff = new Date(keyWords[i]);
                            if (mas.get(j).createdAt.getYear() == ff.getYear() && mas.get(j).createdAt.getMonth() == ff.getMonth() && mas.get(j).createdAt.getDay() == ff.getDay()) {
                                tmp.add(mas.get(j));
                            }
                        }
                        break;
                }
            }else{
                switch (param[i]) {
                    case "hashTags":
                        StringTokenizer tokenizer = new StringTokenizer(keyWords[i],",");
                        String[] findTags = new String[tokenizer.countTokens()];
                        for(int k = 0; k < tokenizer.countTokens();k++){
                            findTags[k] = tokenizer.nextToken();
                        }
                        for(int j = 0; j < tmp.size();j++){
                            for(int k =0; k < findTags.length;k++){
                                if(!tmp.get(j).getTags().contains(findTags[k])){
                                    tmp.remove(j);
                                    break;
                                }
                            }
                        }
                        break;
                    case "id":
                        for (int j = 0; j < tmp.size(); j++) {
                            if (tmp.get(j).id != Integer.parseInt(keyWords[i])) {
                                tmp.remove(j);
                            }
                        }
                        break;
                    case "author":
                        for (int j = 0; j < tmp.size(); j++) {
                            if (tmp.get(j).author.compareTo(keyWords[i]) != 0) {
                                tmp.remove(j);
                            }
                        }
                        break;
                    case "nation":
                        for (int j = 0; j < tmp.size(); j++) {
                            if (tmp.get(j).nation.compareTo(keyWords[i]) != 0) {
                                tmp.remove(j);
                            }
                        }
                        break;
                    case "rank":
                        for (int j = 0; j < tmp.size(); j++) {
                            if (tmp.get(j).rank != Integer.parseInt(keyWords[i])) {
                                tmp.remove(j);
                            }
                        }
                        break;
                    case "createdAt":
                        for (int j = 0; j < tmp.size(); j++) {
                            Date ff = new Date(keyWords[i]);
                            if (mas.get(j).createdAt.getYear() != ff.getYear() || mas.get(j).createdAt.getMonth() != ff.getMonth() || mas.get(j).createdAt.getDay() != ff.getDay()) {
                                tmp.remove(j);
                            }
                        }
                        break;
                }
            }
            if(tmp.size()  == 0){
                return null;
            }
        }
        tmp.sort((a, b) -> b.compareTo(a));
        return tmp;
    }

    public static Boolean edit(int id, Tweet tmp){
        if(Posts.getPost(id) == null){
            return false;
        }
        if(tmp.createdAt != null){
            Posts.getPost(id).createdAt = tmp.createdAt;
        }
        if(tmp.description != null){
            Posts.getPost(id).description = tmp.description;
        }
        if(tmp.rank != -1){
            Posts.getPost(id).rank = tmp.rank;
        }
        if(tmp.nation != null){
            Posts.getPost(id).nation = tmp.nation;
        }
        if(tmp.photoFlag != null){
            Posts.getPost(id).photoFlag = tmp.photoFlag;
        }
        if(tmp.photoRank != null){
            Posts.getPost(id).photoRank = tmp.photoRank;
        }
        if(tmp.getTags().size() > 0){
            Posts.getPost(id).hashTags = tmp.hashTags;
        }
        return true;
    }

    public static void clearAll(){
        for(int i = 0; i < mas.size(); i++ ){
            mas.remove(i);
        }
    }

    public static void showAll(ServletOutputStream out) throws IOException {
        for(int i =0; i < mas.size();i++){
            out.write((mas.get(i).toString() + "\n").getBytes(StandardCharsets.UTF_8));
        }
    }
}
