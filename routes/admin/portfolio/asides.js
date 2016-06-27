var layout = require('../../../views/admin/portfolio/_asides.marko'); 

module.exports = function(req, res) { 
    res.marko(layout, {
        aside: {
            url: req.query.image
        }
    });
};
