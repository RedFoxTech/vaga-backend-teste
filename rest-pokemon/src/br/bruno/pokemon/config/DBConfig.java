package br.bruno.pokemon.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConfig {
	
	 public static Connection getConnection() throws SQLException, ClassNotFoundException {
		  Class.forName("com.mysql.jdbc.Driver");
	        return DriverManager.getConnection("jdbc:mysql://localhost:3306/db_pokemon", "root", "");
	        
	       
	        
	    }
}
