package com.fhmn;

import com.fhmn.config.AppConfig;
import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.startup.Tomcat;
import org.glassfish.jersey.servlet.ServletContainer;

import java.io.File;

public class Main {

    public static final int SERVER_PORT = 8080;
    public static final String CONTEXT_PATH = "/TaskFlow";

    public static void main(String[] args) {
        try {
            Tomcat tomcat = new Tomcat();
            tomcat.setPort(SERVER_PORT);
            tomcat.getConnector();

            Context context = tomcat.addWebapp(CONTEXT_PATH, new File("src/main/webapp").getAbsolutePath());

            Tomcat.addServlet(context, "JerseyServlet",
                    new ServletContainer(new AppConfig()));
            context.addServletMappingDecoded("/api/*", "JerseyServlet");

            tomcat.start();
            System.out.println("App running at: http://localhost:" + SERVER_PORT + CONTEXT_PATH);
            tomcat.getServer().await();

        } catch (LifecycleException e) {
            throw new RuntimeException("Tomcat server failed: " + e.getMessage());
        }
    }
}