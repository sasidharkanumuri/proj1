

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.WriteResult;

/**
 * Servlet implementation class BuyShares
 */
@WebServlet("/BuyShares")
public class BuyShares extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public BuyShares() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
	try
	{
    	String company = request.getParameter("company");
    	String shares=request.getParameter("shares");
    	String cost=request.getParameter("cost");
    	
    	BasicDBObject dbObject = new BasicDBObject();
    	dbObject.put("name", company);
    	dbObject.put("quantity", shares);
    	dbObject.put("price", cost);
    	
		System.out.println(dbObject);
		MongoClientURI uri=new MongoClientURI("mongodb://ashok:srilakshmi@ds037234.mongolab.com:37234/stockdb");	
		MongoClient client=new MongoClient(uri);
		DB db=client.getDB(uri.getDatabase());
		DBCollection stocks=db.getCollection("stock");
		
		WriteResult result=stocks.insert(dbObject);
		
		//JOptionPane.showMessageDialog(null, "The given details are entered into MongoLab");
		
		response.sendRedirect("displaystocks.html");
	}
    	catch(Exception e)
    	{
    		System.out.println(e);
    	}
	
}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
