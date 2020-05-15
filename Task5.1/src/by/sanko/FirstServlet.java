package by.sanko;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "FirstServlet")
public class FirstServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String name = request.getParameter("name");
        PrintWriter pw = response.getWriter();
        if (name == null) {
            name = "Java Web Application";
            pw.println("<html>");
            pw.println("<h1>" + name + " </h1>");
            pw.println("</html>");
        } else {
            if(name.length() <101) {
                pw.println("<html>");
                pw.println("<h1> Name is " + name + " </h1>");
                pw.println("</html>");
            }else{
                pw.println("<html>");
                pw.println("<h1> Name is too big </h1>");
                pw.println("</html>");
            }
        }
    }
}
