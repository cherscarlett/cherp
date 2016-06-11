var template = require('./template.marko');
 
exports.renderer = function(input, out) {
    var navItems = input.navItems,
        location = input.location,
        activeTab = input.activeTab;
    
    template.render({
        navItems: navItems,
        activeTab: activeTab,
        location: location
    }, out);
 
};