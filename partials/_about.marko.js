function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<figure class=\"animation\"><div class=\"animation-canvas\"><div class=\"low-clouds svg-container\"></div><div class=\"mountains svg-container\"></div><div class=\"high-clouds svg-container\"></div><div class=\"birds svg-container\"></div><div class=\"balloon svg-container\"></div></div><figcaption><strong>Hello</strong>, I'm Cher. I love <em>puzzles</em>, <em>problem solving </em>and making <strong>cool stuff. </strong></figcaption></figure><div class=\"content content-about\"><h2>About</h2><div class=\"content-block\"><h3>Who I am</h3><p>Stuff about who I am</p></div><div class=\"content-block\"><h3>What I do</h3><p>Stuff about what I do</p></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
