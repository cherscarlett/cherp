var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    errorTypes = require('../../private/errors.json');

var isError = function(error) {
    var boolean = errorTypes.filter( errorType => errorType.code == error )
    boolean.length > 0 ? boolean = true : boolean = false
    return boolean
}

module.exports = function(req, res) {
    var errorType = req.params.error,
        error;
    isError(errorType) ? errorType = errorType : errorType = 404;
    error = errorTypes.filter( err => err.code == errorType );
    error = error[0];
    res.marko(layout, {
        title: 'Cher Stewart | Software Engineer',
        heading: 'Cher Stewart',
        subHeading: 'Software Engineer',
        activeTab: '',
        navItems: navItems,
        user: req.user,
        error: error
    });
};
