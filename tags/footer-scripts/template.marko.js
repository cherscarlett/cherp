function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, out) {
    forEach(data.scripts, function(script) {
      out.w("<script" +
        attr("src", script.path) +
        " type=\"text/javascript\" language=\"javascript\"></script>");
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
