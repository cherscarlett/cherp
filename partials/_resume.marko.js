function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<figure>#some kind of animation <figcaption>I has a resume yay</figcaption></figure><div class=\"content content-resume\"></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
