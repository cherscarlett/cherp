var homeRoute = require("./home"),
    skillsetRoute = require("./skillset"),
    resumeRoute = require("./resume"),
    portfolioRoute = require("./portfolio"),
    adminRoute = require("./admin");

module.exports = function (router) {

    router({
        path: "/",
        name: "home"
      }).get(homeRoute.index);


    router({
        path: "/about",
        name: "about"
      }).get(homeRoute.index);

    router({
            path: "/skillset",
            name: "skillset"
          }).get(skillsetRoute.index);

    router({
        path: "/resume",
        name: "resume"
      }).get(resumeRoute.index);

    router({
        path: "/portfolio",
        name: "portfolio"
      }).get(portfolioRoute.index);


    router({
        path: "/portfolio/:slug",
        name: "portfolioItem"
      }).get(portfolioRoute.item);

    router({
      path: "/animation",
      name: 'animation'
    }).get(homeRoute.animation);

    router({
      path: "/admin",
      name: "admin"
    }).get(adminRoute.login);

};