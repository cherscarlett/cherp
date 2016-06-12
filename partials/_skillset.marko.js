function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"content content-skillset\"><h2>Skills</h2><div class=\"content-block\"></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
