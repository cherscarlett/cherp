var layout = require('../../../partials/admin/_new.marko'); 

module.exports = function(req, res) { 
    res.marko(layout);
};
