package br.com.pokedex;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController{

	
	@RequestMapping(value = { "/index" }, method = RequestMethod.GET)
	public ModelAndView getIndexExemplo() {
		ModelAndView mv = new ModelAndView("index");
		return mv;
	}
	


}