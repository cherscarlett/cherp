var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../partials/_about.marko');

module.exports = function(req, res) {
    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer',
            activeTab: 'about'
        });
    }
    else {
        res.marko(layout, {
          title: 'Cher Stewart | Software Engineer',
          heading: 'Cher Stewart',
          subHeading: 'Software Engineer',
          activeTab: 'about',
          navItems: navItems
        });   
    }
};
