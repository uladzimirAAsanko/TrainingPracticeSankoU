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
import java.util.ArrayList;
import java.util.Date;
import java.util.StringTokenizer;

@WebServlet(name = "EditServlet")
public class EditServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String createdAt = request.getParameter("createdAt");
        String description = request.getParameter("description");
        String rank = request.getParameter("rank");
        String nation = request.getParameter("nation");
        String photoFlag = request.getParameter("photoFlag");
        String photoRank = request.getParameter("photoRank");
        ArrayList<String> tags= new ArrayList<>();;
        if(request.getParameter("hashTags") != null){
            StringTokenizer tokenizer = new StringTokenizer(request.getParameter("hashTags"),",");
            while(tokenizer.hasMoreTokens()){
                tags = new ArrayList<>();
                tags.add(tokenizer.nextToken());
            }
        }
        ServletOutputStream out = response.getOutputStream();
        if(id != null) {
            int index = Integer.parseInt(id);
            int ran = 0;
            if(rank == null){
                 ran = -1;
            }else{
                 ran = Integer.parseInt(rank);
            }
            if(createdAt != null){
                Tweet temp = new Tweet(index,description,new Date(createdAt),"","",photoFlag,photoRank,nation,ran,0,tags);
                out.write(Posts.edit(index,temp).toString().getBytes());
            }else{
                Tweet temp = new Tweet(index,description,null,"","",photoFlag,photoRank,nation,ran,0,tags);
                out.write(Posts.edit(index,temp).toString().getBytes());
            }
        }else{
            out.write("error".getBytes());
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
