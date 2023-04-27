package com.name.WebAppTemplate.Authentication;

import java.util.Hashtable;
import java.util.ResourceBundle;

import javax.naming.Context;
import javax.naming.directory.Attributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LdapAuthentication {

    Logger logger = LoggerFactory.getLogger(LdapAuthentication.class);
	public DirContext validateUser(String uid, String userPassword) {
		DirContext ctx =null;
		ResourceBundle props=ResourceBundle.getBundle("ldap");
		Hashtable<String,String> env = new Hashtable<String,String>(11);

		env.put(Context.SECURITY_AUTHENTICATION, props.getString("SECURITY_AUTHENTICATION"));
		env.put(Context.SECURITY_PRINCIPAL,"uid="+ uid+","+props.getString("SECURITY_PRINCIPAL"));
		env.put(Context.SECURITY_CREDENTIALS, userPassword);
		env.put(Context.INITIAL_CONTEXT_FACTORY, props.getString("INITIAL_CONTEXT_FACTORY"));
		env.put(Context.PROVIDER_URL, props.getString("PROVIDER_URL"));
		try {
			ctx = new InitialDirContext(env);
			String sPrincipal = ctx.getEnvironment().get("java.naming.security.principal").toString();
			Attributes attrs = ctx.getAttributes(sPrincipal);
			logger.info("uid: "+attrs.get("uid").get(0).toString());			
		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("LDAP Connection Failed");
		}
		return ctx;
	}
}
