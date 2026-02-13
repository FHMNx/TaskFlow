package com.fhmn.config;

import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.jackson.JacksonFeature;

public class AppConfig extends ResourceConfig {

    public AppConfig() {
        packages("com.fhmn.controller");

        // Register Jackson JSON support
        register(JacksonFeature.class);
    }
}