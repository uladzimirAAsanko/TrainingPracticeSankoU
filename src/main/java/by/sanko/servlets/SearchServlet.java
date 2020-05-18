package by.sanko.servlets;

import by.sanko.repo.Posts;
import by.sanko.repo.Tweet;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;

@WebServlet(name = "SearchServlet")
public class SearchServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String createdAt = request.getParameter("createdAt");
        String rank = request.getParameter("rank");
        String nation = request.getParameter("nation");
        String author = request.getParameter("author");
        ServletOutputStream out = response.getOutputStream();
        int i = 0;
        String[] param = new String[5];
        String[] keyWords = new String[5];
        if(id != null){
            param[i] = "id";
            keyWords[i] = id;
            i++;
        }
        if(createdAt != null){
            param[i] = "createdAt";
            keyWords[i] = createdAt;
            i++;
        }
        if(rank != null){
            param[i] = "rank";
            keyWords[i] = rank;
            i++;
        }
        if(nation != null){
            param[i] = "nation";
            keyWords[i] = nation;
            i++;
        }
        if(author != null){
            param[i] = "author";
            keyWords[i] = author;
            i++;
        }
        String[] finalParam = new String[i];
        String[] finalKeyWords = new String[i];
        for(int j = 0; j < i; j++){
            finalKeyWords[j] = keyWords[j];
            finalParam[j] = param[j];
        }
        ArrayList<Tweet> tmp = new ArrayList<Tweet>();
        tmp = Posts.search(finalParam,finalKeyWords);
        for(int f = 0; f < tmp.size();f++){
            out.write((tmp.get(f).toString() + "\n").getBytes(StandardCharsets.UTF_8));
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
