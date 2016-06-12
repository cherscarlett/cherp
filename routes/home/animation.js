var wind = require('../../partials/svg/_wind.marko');

module.exports = function(req, res) {

    if (req.query.id === 'wind') {
      res.marko(wind);
    }


};
