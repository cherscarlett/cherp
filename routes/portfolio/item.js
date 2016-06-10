var navItems = require('../../private/menu.json');
var layout = require('../../layouts/main.marko');

module.exports = function(req, res) {
    res.marko(layout, {
      title: 'Cher Stewart | Software Engineer | Portfolio',
      subTitle: 'Software Engineer',
      activeTab: 'portfolio',
      navItems: navItems
    });
};
