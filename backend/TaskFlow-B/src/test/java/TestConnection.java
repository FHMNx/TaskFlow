import com.fhmn.util.HibernateUtil;
import org.hibernate.Session;

public class TestConnection {
    public static void main(String[] args) {
        Session hibernateSession = HibernateUtil.getSessionFactory().openSession();
        System.out.println("Hibernate Session created successfully");
        hibernateSession.close();
    }
}
