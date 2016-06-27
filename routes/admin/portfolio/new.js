var layout = require('../../../views/admin/portfolio/_new.marko'); 

module.exports = function(req, res) { 
    res.marko(layout, {
        order: req.query.order
    });
};
