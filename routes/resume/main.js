var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../partials/_resume.marko');

module.exports = function(req, res) {
    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer | Resume',
            activeTab: 'resume'
        });
    }
    else {
        res.marko(layout, {
          title: 'Cher Stewart | Software Engineer | Resume',
          heading: 'Cher Stewart',
          subHeading: 'Software Engineer',
          activeTab: 'resume',
          navItems: navItems
        });
    }
};
