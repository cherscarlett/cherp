var homeRoute = require("./home"),
    skillsetRoute = require("./skillset"),
    resumeRoute = require("./resume"),
    portfolioRoute = require("./portfolio"),
    adminRoute = require("./admin"),
    bodyParser= require('body-parser'),
    methodOverride = require('method-override');

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

    router.use(bodyParser.urlencoded({ extended: true }));

    router.use(methodOverride(function(req, res){
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {

            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    router({
      path: "/admin",
      name: "admin"
    }).get(adminRoute.index);

    router({
      path: "/admin/portfolio/:id",
      name: "viewPortfolioItem"
    }).get(adminRoute.portfolio.view);

    router.post("/admin/portfolio/update/:id", adminRoute.portfolio.update);
    router.post("/admin/portfolio/create/:id", adminRoute.portfolio.create);
    router.post("/admin/portfolio/delete/:id", adminRoute.portfolio.delete);

};