package bg.bgWebSpring2;

import org.springframework.web.context.annotation.SessionScope;

import lombok.Data;


@Data
public class BgBeanSession {

	private String cookieReceived="";
	private String cookieSet="";
	public String getCookieReceived() {
		return cookieReceived;
	}
	public void setCookieReceived(String cookieReceived) {
		this.cookieReceived = cookieReceived;
	}
	public String getCookieSet() {
		return cookieSet;
	}
	public void setCookieSet(String cookieSet) {
		this.cookieSet = cookieSet;
	}
	@Override
	public String toString() {
		return "BgBeanSession [cookieReceived=" + cookieReceived + ", cookieSet=" + cookieSet + "]";
	}
	
	
	
}
