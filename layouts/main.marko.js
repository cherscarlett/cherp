function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      loadTemplate = __helpers.l,
      partials__header = loadTemplate(require.resolve("../partials/_header.marko")),
      __loadTag = __helpers.t,
      navigation = __loadTag(require("../tags/navigation/renderer"), 0, 0, 1),
      forEach = __helpers.f,
      navigation_navItem = __loadTag(null, "navItems", 1),
      classAttr = __helpers.ca,
      partials__about = loadTemplate(require.resolve("../partials/_about.marko")),
      partials__skillset = loadTemplate(require.resolve("../partials/_skillset.marko")),
      partials__resume = loadTemplate(require.resolve("../partials/_resume.marko")),
      partials__portfolio = loadTemplate(require.resolve("../partials/_portfolio.marko")),
      partials__footer = loadTemplate(require.resolve("../partials/_footer.marko")),
      footer_scripts = __loadTag(require("../tags/footer-scripts/renderer"), 0, 0, 1),
      footer_scripts_script = __loadTag(null, "scripts", 1);

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><title>" +
      escapeXml(data.title) +
      "</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/public/stylesheets/core.css\"><meta charset=\"utf-8\"><meta name=\"lang\" content=\"enUS\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes\"></head><body><header class=\"header\">");

    partials__header.render({}, out);

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
      partials__about.render({}, out);
    }

    if (data.activeTab === "skillset") {
      partials__skillset.render({}, out);
    }

    if (data.activeTab === "resume") {
      partials__resume.render({}, out);
    }

    if (data.activeTab === "portfolio") {
      partials__portfolio.render({}, out);
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

    partials__footer.render({}, out);

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
          path: "/public/javascripts/core.js"
        }, out, footer_scripts0);

      footer_scripts_script({
          path: "/public/javascripts/modal.js"
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
