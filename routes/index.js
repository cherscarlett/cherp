var homeRoute = require("./home"),
    skillsetRoute = require("./skillset"),
    resumeRoute = require("./resume"),
    portfolioRoute = require("./portfolio"),
    errorRoute = require("./error"),
    adminRoute = require("./admin"),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    passport = require('passport'),
    ensureAuthenticated = require('../models/authenticate');

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

    // router({
    //     path: "/portfolio",
    //     name: "portfolio"
    //   }).get(portfolioRoute.index);
    //
    // router({
    //     path: "/portfolio/list",
    //     name: "portfolioList"
    //   }).get(portfolioRoute.list);
    //
    // router({
    //     path: "/portfolio/:slug",
    //     name: "portfolioItem"
    //   }).get(portfolioRoute.item);

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
      path: "/login",
      name: "login"
    }).get(passport.authenticate('github'));

    router({
      path: "/logout",
      name: "logout"
    }).get(function(req,res) {
        req.logout();
        res.redirect('/');
      });

    router({
      path: "/login/return",
      name: "loginReturn"
    }).get(passport.authenticate('github', { failureRedirect: '/login' }),
        function(req,res) {
          res.redirect('/admin');
        });

    router({
      path: "/admin",
      name: "admin"
    }).get(ensureAuthenticated, adminRoute.index);

    router({
      path: "/admin/portfolio/new",
      name: "newPortfolioItem"
    }).get(ensureAuthenticated, adminRoute.portfolio.new);

    router({
      path: "/admin/portfolio/asides",
      name: "newPortfolioAsides"
    }).get(ensureAuthenticated, adminRoute.portfolio.asides);

    router({
      path: "/admin/portfolio/:id",
      name: "viewPortfolioItem"
    }).get(ensureAuthenticated, adminRoute.portfolio.view);

    router.post("/admin/portfolio/upload", ensureAuthenticated, adminRoute.portfolio.upload);
    router.post("/admin/portfolio/update/:id", ensureAuthenticated, adminRoute.portfolio.update);
    router.post("/admin/portfolio/create/", ensureAuthenticated, adminRoute.portfolio.create);
    router.delete("/admin/portfolio/delete/:id", ensureAuthenticated, adminRoute.portfolio.delete);

    router({
      path: "/:error",
      name: "viewError"
    }).get(errorRoute.index);

};
