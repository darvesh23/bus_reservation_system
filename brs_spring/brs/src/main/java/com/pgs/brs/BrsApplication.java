package com.pgs.brs;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages="com.pgs.brs com.pgs.brs.ui com.pgs.brs.controller com.pgs.brs.service com.pgs.brs.repository com.pgs.brs.entity")
public class BrsApplication implements CommandLineRunner{
	
	
	public static void main(String[] args)  {
		SpringApplication.run(BrsApplication.class, args);
	}


	public void run(String... args) throws Exception {
		
	}

}
