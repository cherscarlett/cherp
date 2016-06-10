var homeRoute = require("./home"),
    skillsetRoute = require("./skillset"),
    resumeRoute = require("./resume"),
    portfolioRoute = require("./portfolio");

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

};