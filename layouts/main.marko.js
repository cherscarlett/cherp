function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      classAttr = __helpers.ca,
      attr = __helpers.a,
      loadTemplate = __helpers.l,
      partials__about = loadTemplate(require.resolve("../partials/_about.marko")),
      partials__skillset = loadTemplate(require.resolve("../partials/_skillset.marko")),
      partials__resume = loadTemplate(require.resolve("../partials/_resume.marko")),
      partials__portfolio = loadTemplate(require.resolve("../partials/_portfolio.marko")),
      __loadTag = __helpers.t,
      footer_scripts = __loadTag(require("../tags/footer-scripts/renderer"), 0, 0, 1),
      footer_scripts_script = __loadTag(null, "scripts", 1);

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><title>" +
      escapeXml(data.title) +
      "</title><link rel=\"stylesheet\" type=\"text/css\" href=\"/public/stylesheets/core.css\"></head><body><header class=\"header\"><h1>" +
      escapeXml(data.heading) +
      "</h1><h2>" +
      escapeXml(data.subHeading) +
      "</h2>");

    if (notEmpty(data.navItems)) {
      out.w("<nav class=\"navigation navigation-header\"><ul>");

      forEach(data.navItems, function(navItem) {
        out.w("<li class=\"navigation-item\">");

        if (navItem.id === data.activeTab) {
          var active = true;
        }

        out.w("<a" +
          classAttr(active && "active") +
          attr("href", navItem.path) +
          attr("data-id", navItem.id) +
          ">" +
          escapeXml(navItem.text) +
          "</a></li>");
      });

      out.w("</ul></nav>");
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

    out.w("</section>");

    footer_scripts({}, out, 0, function renderBody(out, footer_scripts0) {
      footer_scripts_script({
          path: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
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
