var mongoose = require('mongoose'),
    layout = require('../../../partials/admin/_portfolio_item.marko'); 

module.exports = function(req, res) { 
    var title = req.body.title,
        location = req.body.location,
        job = req.body.job,
        timespan = req.body.timespan,
        skills = req.body.skills.split(","),
        description_text = req.body.description_text,
        skillsKeyed = [],
        descriptions = [];

    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i],
            s = {
                text: skill
            };

        skillsKeyed.push(s);
    }

    for (var n = 0; n < description_text.length; n++) {
        var description = description_text[n],
            d = {
                text: description
            };

        descriptions.push(d);
    }

    skills = skillsKeyed;

    mongoose.model('portfolioItem').create({
        title: title,
        location: location,
        job: job,
        timespan: timespan,
        skills: skills,
        descriptions: descriptions
        }, 

        function (err, portfolioItem) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            }

            else {
                res.marko(layout, {
                    id: portfolioItem.id,
                    title: portfolioItem.title
                });
            }
        }
    );
};
