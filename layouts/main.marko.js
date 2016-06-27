function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      loadTemplate = __helpers.l,
      views__header = loadTemplate(require.resolve("../views/_header.marko")),
      __loadTag = __helpers.t,
      navigation = __loadTag(require("../tags/navigation/renderer"), 0, 0, 1),
      forEach = __helpers.f,
      navigation_navItem = __loadTag(null, "navItems", 1),
      classAttr = __helpers.ca,
      views__about = loadTemplate(require.resolve("../views/_about.marko")),
      views__skillset_full = loadTemplate(require.resolve("../views/_skillset-full")),
      views__resume = loadTemplate(require.resolve("../views/_resume")),
      views__portfolio = loadTemplate(require.resolve("../views/_portfolio")),
      views__footer = loadTemplate(require.resolve("../views/_footer.marko")),
      footer_scripts = __loadTag(require("../tags/footer-scripts/renderer"), 0, 0, 1),
      footer_scripts_script = __loadTag(null, "scripts", 1);

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><title>" +
      escapeXml(data.title) +
      "</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/public/stylesheets/core.css\"><link rel=\"icon\" href=\"/public/favicon.png\" sizes=\"64x64\" type=\"image/png\"><meta charset=\"utf-8\"><meta name=\"lang\" content=\"enUS\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes\"><meta name=\"author\" content=\"Cher Stewart\"><meta name=\"description\" content=\"Portfolio and resume for Cher Stewart, a software engineer. Cher Stewart has been a front-end developer since 2000, and learned back-end tech in 2007 to become a full-stack engineer.\"><meta name=\"keywords\" content=\"Cher Stewart, Software Engineer, Front-End Developer, UX Developer, UI Developer, Back-End Engineer, Back-End Developer, Full-Stack Engineer\"></head><body><header class=\"header\">");

    views__header.render({}, out);

    if (notEmpty(data.navItems)) {
      navigation({
          activeTab: data.activeTab,
          location: "header"
        }, out, 0, function renderBody(out, navigation0) {
        forEach(data.navItems, function(navItem) {
          navigation_navItem({
              id: navItem.id,
              text: navItem.text,
              path: navItem.path
            }, out, navigation0);
        });
      });
    }

    out.w("</header><section" +
      classAttr(data.activeTab) +
      ">");

    if (data.activeTab === "about") {
      views__about.render({}, out);
    }

    if (data.activeTab === "skillset") {
      views__skillset_full.render({
          skills: data.skills
        }, out);
    }

    if (data.activeTab === "resume") {
      views__resume.render({
          resumes: data.resumes
        }, out);
    }

    if (data.activeTab === "portfolio") {
      views__portfolio.render({
          item: data.item
        }, out);
    }

    out.w("</section><footer class=\"footer\">");

    if (notEmpty(data.navItems)) {
      navigation({
          activeTab: data.activeTab,
          location: "footer"
        }, out, 0, function renderBody(out, navigation1) {
        forEach(data.navItems, function(navItem) {
          navigation_navItem({
              id: navItem.id,
              text: navItem.text,
              path: navItem.path
            }, out, navigation1);
        });
      });
    }

    out.w("<div class=\"footer-content\">");

    views__footer.render({}, out);

    out.w("</div></footer>");

    footer_scripts({}, out, 0, function renderBody(out, footer_scripts0) {
      footer_scripts_script({
          path: "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "//cdn.jsdelivr.net/velocity/1.2.3/velocity.min.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "//cdn.jsdelivr.net/velocity/1.2.3/velocity.ui.min.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "https://rawgit.com/akm2/simplex-noise.js/master/simplex-noise.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "/public/javascripts/core.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "/public/javascripts/modal.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "/public/javascripts/animation.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "/public/javascripts/navigation.js"
        }, out, footer_scripts0);

      forEach(data.scripts, function(script) {
        footer_scripts_script({
            path: script
          }, out, footer_scripts0);
      });
    });

    out.w("<browser-refresh enabled=\"true\"></browser-refresh></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
