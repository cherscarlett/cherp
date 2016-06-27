var mongoose = require('mongoose'),
    layout = require('../../../views/admin/portfolio/_item.marko'),
    slugify = require('slugify'); 

module.exports = function(req, res) { 
    var order = req.body.order,
        slug = slugify(req.body.title),
        title = req.body.title,
        location = req.body.location,
        job = req.body.job,
        timespan = req.body.timespan,
        skills = req.body.skills.split(","),
        description_text = req.body.description_text,
        skillsKeyed = [],
        descriptions = [],
        asides = []
        asideUrls = req.body.aside_image_url,
        asideTitles = req.body.aside_title,
        asideTexts = req.body.aside_text;

    if (Array.isArray(asideUrls)) {
        for (var x = 0; x < asideUrls.length; x++) {
            var aside = {
                url: asideUrls[x],
                title: asideTitles[x],
                text: asideTexts[x]
            }

            asides.push(aside);
        }
    }

    else if (asideUrls.length) {
        aside = {
            url: asideUrls,
            title: asideTitles,
            text: asideTexts
        }
        asides.push(aside);
    }

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
            order: order,
            slug: slug,
            title: title,
            location: location,
            job: job,
            timespan: timespan,
            skills: skills,
            descriptions: descriptions,
            asides: asides
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
