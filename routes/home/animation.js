var wind = require('../../views/svg/_wind.marko');

module.exports = function(req, res) {

    if (req.query.id === 'wind') {
      res.marko(wind);
    }
    
};
