var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../partials/_skillset.marko');


module.exports = function(req, res) {
    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer | Skillset',
            activeTab: 'skillset'
        });
    }
    else {
        res.marko(layout, {
          title: 'Cher Stewart | Software Engineer | Skillset',
          heading: 'Cher Stewart',
          subHeading: 'Software Engineer',
          activeTab: 'skillset',
          navItems: navItems
        });
    }
};
