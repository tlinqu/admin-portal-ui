package gov.samhsa.c2s.adminui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by Jiahao.Li on 11/17/2016.
 */
@Controller
public class StaticContentController {

    @RequestMapping(value = "/configError", method = RequestMethod.GET)
    public String getConfigFailure() {
        return "configFailure.html";
    }
}