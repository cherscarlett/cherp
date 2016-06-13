function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<figure class=\"animation animation-about\"><div class=\"animation-canvas animation-canvas-about\"><div class=\"low-clouds svg-container\"></div><div class=\"mountains svg-container\"></div><div class=\"high-clouds svg-container\"></div><div class=\"birds svg-container\"></div><div class=\"balloon svg-container\"></div></div><figcaption><strong>Hello</strong>, I'm Cher. I love <em>puzzles</em>, <em>problem solving </em>and making <strong>cool stuff. </strong></figcaption></figure><div class=\"content content-about\"><h2>About</h2><div class=\"content-block\"><h3>Who I am</h3><p>A full-stack engineer specializing in mobile-first, responsive web applications. With 15 years of experience, I've worked on cool projects such as <a href=\"//compass-style.org/\">compass</a>, <a href=\"//github.com/sass-eyeglass/eyeglass\">eyeglass</a>, <a href=\"//mindmakersproject.org/\">Mind Makers Project</a>, marketing and esports things at <a href=\"//blizzard.com\">Blizzard</a>, and <a href=\"//usatoday.com/vrstories/?gclid=CNLsqqLBoc0CFQeTfgodlP0FJQ\">VR Stories </a>, a desktop SPA, custom CMS and a dedicated mobile site at <a href=\"//usatoday.com\">USA Today</a>.</p></div><div class=\"content-block\"><h3>What I do</h3><p>My main specialty is front-end development; JavaScript, HTML5 and CSS3. I have some design experience - personal projects, fill-in at big companies, and contracts. One application I concepted, designed, and built was featured in <a href=\"//www.smashingmagazine.com/2010/02/color-theory-for-designers-part-2-understanding-concepts-and-terminology/\">Smashing Magazine</a> ( <a href=\"//www.smashingmagazine.com/2009/01/css-typographic-tools-and-techniques/\">twice</a>!) I have also developed database-driven web applications in Ruby, Python and Nodejs.</p></div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
