package com.name.WebAppTemplate.Authentication;

import java.util.Hashtable;
import java.util.ResourceBundle;

import javax.naming.directory.Attributes;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.naming.Context;
public class LdapTest {
	
	public static void main(String[] args) {
		String uid="chymuralikrishna";
		String userPassword="mk";
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
			// get all attributes of the user
			Attributes attrs = ctx.getAttributes(sPrincipal);
			// get values for needed keys
			String sEcno = attrs.get("employeeNumber").get(0).toString();
			System.out.println(sEcno);
		} catch (Exception ex) {
			ex.printStackTrace();
			System.out.println("LDAP Connection Failed");
		}
	}
	
	
	
}
