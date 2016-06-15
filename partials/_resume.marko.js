function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      resumes = __loadTag(require("../tags/resumes/renderer"), 0, 0, 1),
      forEach = __helpers.f,
      resumes_resume = __loadTag(null, "resumes", 1, 1);

  return function render(data, out) {
    resumes({}, out, 0, function renderBody(out, resumes0) {
      forEach(data.resumes, function(resume) {
        resumes_resume({
            heading: resume.heading,
            type: resume.type,
            resumeItems: resume.resumeItems
          }, out, resumes0);
      });
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
