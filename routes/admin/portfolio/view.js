var mongoose = require('mongoose'),
    layout = require('../../../views/admin/portfolio/_view.marko'); 

module.exports = function(req, res) { 
    mongoose.model('portfolioItem').findById(req.params.id, function (err, portfolioItem) {
        
        var skills = portfolioItem.skills,
            skillsArray = [],
            item = {};

        for(var i = 0; i < skills.length; i++) {
            var skill = skills[i];

            skillsArray.push(skill.text);

        }

        item = {
            title: portfolioItem.title,
            job: portfolioItem.job,
            timespan: portfolioItem.timespan,
            location: portfolioItem.location,
            descriptions: portfolioItem.descriptions,
            skills: skillsArray.join(),
            asides: portfolioItem.asides,
            id: portfolioItem.id
        }
        
        res.marko(layout, {
            item: item
        });
    });
};

