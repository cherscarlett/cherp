var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../partials/_resume.marko'),
    educationItems = require('../../private/resume.json'),
    mongoose = require('mongoose');

module.exports = function(req, res) {
  mongoose.model('portfolioItem').find({}, function (err, portfolioItems) {
    
    var resumes = consolidateResumeItems(portfolioItems);

    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer | Resume',
            activeTab: 'resume',
            resumes: resumes
        });
    }
    else {
      res.marko(layout, {
        title: 'Cher Stewart | Software Engineer | Resume',
        heading: 'Cher Stewart',
        subHeading: 'Software Engineer',
        activeTab: 'resume',
        navItems: navItems,
        resumes: resumes
      });
    }
  });
};

function consolidateResumeItems(portfolioItems) {
  var resumes = [];

  employmentItems = {
      heading: "Employment",
      type: "employers",
      resumeItems: portfolioItems.reverse()
  }

  resumes.push(employmentItems);
  resumes.push(educationItems);

  return resumes;
}
