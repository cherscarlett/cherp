function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<figure>#some kind of animation here <figcaption>Hello, I'm Cher. I love puzzles, problem solving and making cool stuff.</figcaption></figure><h2>About</h2><h3>Who I am</h3><p>Stuff about who I am</p><h3>What I do</h3><p>Stuff about what I do</p>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
