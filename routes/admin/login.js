var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/admin.marko');

module.exports = function(req, res) {  
  res.marko(layout, {
    title: 'Cher Stewart | Software Engineer | Admin',
    activeTab: 'login',
    navItems: navItems,
    scripts: []
  }); 
};
