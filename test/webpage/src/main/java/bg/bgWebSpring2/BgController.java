package bg.bgWebSpring2;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.WebUtils;

import lombok.Data;

@Data
@Controller
public class BgController {

	static int i = 0;

	@RequestMapping("/bg")
	String hello(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
		
		Cookie cookie = WebUtils.getCookie(request, "bg");
		if (cookie == null) {
			cookie = new Cookie("bg", "new" + i++);
			response.addCookie(cookie);
		} else {
			cookie.setValue("Bertrand" + i++);
		}

		
		
		BgBeanSession beanSession = getSession(session);
		System.out.println("session :" + beanSession);
		return "bg2";
	}

	@RequestMapping(value = "/bg2")
	public ModelAndView test(HttpServletRequest request, HttpServletResponse response, HttpSession session) throws IOException {
		BgBeanSession beanSession = this.getSession(session);
		Cookie[] cookies = request.getCookies();
		if (cookies == null) {
		} else {
			Arrays.asList(cookies).forEach(c -> System.out.println(c.getName() + ":" + c.getValue()));
		}

		Cookie cookie = WebUtils.getCookie(request, "bg");
		String cookieReceived = "";
		if (cookie == null) {
			cookie = new Cookie("bg" , "new" + i++);
			cookieReceived = "No Cookie received !!!!";
			
		} else {
			cookieReceived = cookie.getValue();
			cookie.setValue("Bertrand" + i++);
		}
		response.addCookie(cookie);
		boolean isOk = beanSession.getCookieSet().equals(cookieReceived);
		System.out.println("bg beanSession : "+beanSession);
		ModelAndView mv = new ModelAndView("bg2");
		beanSession.setCookieReceived(cookieReceived);
		beanSession.setCookieSet( cookie.getValue());
		mv.addObject("message1", "cookie received (by the server): " + cookieReceived);
		mv.addObject("message2", "cookie send (by the server): " + cookie.getValue());
		mv.addObject("beanSession", " " +beanSession);
		if (cookies==null) {
			mv.addObject("message3", "No cookies recu!:  " );
		}else {
		mv.addObject("message3", "Nb Cookies total recu :  " +cookies.length);
		}
		mv.addObject("isOk", "received equals hasBeenSend: " + isOk);
		
		System.out.println(" mv " + mv);
		System.out.println(" getView " + mv.getView());
		return mv;
	}

	

	BgBeanSession getSession(HttpSession session) {
		@SuppressWarnings("unchecked")
		BgBeanSession bgBeanSession = (BgBeanSession) session.getAttribute("bg");

		if (bgBeanSession == null) {
			bgBeanSession = new BgBeanSession();
			session.setAttribute("bg", bgBeanSession);
		}
		return bgBeanSession;

	}

}
