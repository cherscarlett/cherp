function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    out.w("<div class=\"content content-resume\"><p>Software Engineer with over 15 years of experience in front-end technologies, 10 years of full-stack experience. I love math, logic and data structures, but have the strongest front-end eye. I am flexible in working environments having worked remotely as a contractor, startups, studio-agencies, and fortune 500 companies.</p>");

    if (notEmpty(data.resumes)) {
      out.w("<div class=\"resume-list\">");

      forEach(data.resumes, function(resume) {
        out.w("<h3 class=\"resume-type\">" +
          escapeXml(resume.heading) +
          "</h3><ol class=\"resume-document\">");

        forEach(resume.resumeItems, function(resumeItem) {
          out.w("<li class=\"resume-document-item\"><article><header><hgroup><h1>" +
            escapeXml(resumeItem.title) +
            "</h1><h2>" +
            escapeXml(resumeItem.job) +
            "</h2></hgroup><div class=\"metadata\"><div class=\"location\">" +
            escapeXml(resumeItem.location) +
            "</div><div class=\"timespan\">" +
            escapeXml(resumeItem.timespan) +
            "</div></div></header>");

          if (notEmpty(resumeItem.descriptions)) {
            out.w("<div class=\"resume-document-content\"><ul>");

            forEach(resumeItem.descriptions, function(description) {
              out.w("<li><p>" +
                escapeXml(description.text) +
                "</p></li>");
            });

            out.w("</ul></div>");
          }

          out.w("</article></li>");
        });

        out.w("</ol>");
      });

      out.w("</div>");
    }

    out.w("</div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
