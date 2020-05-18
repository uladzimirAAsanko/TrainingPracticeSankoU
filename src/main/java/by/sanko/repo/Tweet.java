package by.sanko.repo;

import java.util.ArrayList;
import java.util.Date;

public class Tweet {
    int id;
    String description;
    Date createdAt;
    String author;
    String photoLink;
    String photoFlag;
    String photoRank;
    String nation;
    int rank;
    int like;
    ArrayList<String> hashTags;

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getAuthor() {
        return author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public String getPhotoFlag() {
        return photoFlag;
    }

    public String getPhotoRank() {
        return photoRank;
    }

    public String getNation() {
        return nation;
    }

    public int getRank() {
        return rank;
    }
    public int getLike() {
        return like;
    }
    public ArrayList<String>getTags() {
        return hashTags;
    }
    public Tweet(int id, String description, Date createdAt, String author, String photoLink, String photoFlag, String photoRank, String nation, int rank,int likes,ArrayList<String> kk) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.photoLink = photoLink;
        this.photoFlag = photoFlag;
        this.photoRank = photoRank;
        this.nation = nation;
        this.rank = rank;
        this.like = likes;
        hashTags.addAll(kk);
    }

    public int compareTo(Tweet a) {
        return this.createdAt.compareTo(a.createdAt);
    }

    @Override
    public String toString() {
        return id + " " +  author + " " +  createdAt.toString() + " " +  nation + " " +  rank + "       " + description ;
    }
}
