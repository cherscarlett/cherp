function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<article class=\"portfolio-item\"><header class=\"portfolio-header\"><h1 class=\"portfolio-title\">site title</h1><h2 class=\"portfolio-subtitle\">site role</h2><h3 class=\"portfolio-subtitle\">site where</h3><h4 class=\"portfolio-subtitle\">site when</h4></header><figure class=\"portfolio-skills\"><ul><li>skill</li></ul></figure><div class=\"portfolio-body\"><p>site stuff</p></div><aside><figure class=\"portfolio-image\">#an image <figcaption class=\"portfolio-image-caption\"></figcaption></figure></aside></article>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
