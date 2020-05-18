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
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;

@WebServlet(name = "GetServlet")
public class GetServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        Tweet tmp = Posts.getPost(Integer.parseInt(id));
        ServletOutputStream out = response.getOutputStream();
        if(tmp != null){
            out.write((tmp.toString() + "\n").getBytes(StandardCharsets.UTF_8));
        }else{
            out.write("null".getBytes());
        }
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        Tweet tmp = Posts.getPost(Integer.parseInt(id));
        ServletOutputStream out = response.getOutputStream();
        if(tmp != null){
            Posts.showAll(out);
            Posts.delete(Integer.parseInt(id));
            out.write((" " + "\n").getBytes(StandardCharsets.UTF_8));
            out.write((" " + "\n").getBytes(StandardCharsets.UTF_8));
            Posts.showAll(out);
        }else{
            out.write("false".getBytes());
        }
    }
}
