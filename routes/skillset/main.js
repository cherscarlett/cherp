var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../partials/_skillset-full.marko'),
    skillsAll = require('../../private/skills.json'),
    skills = {
        all: sortSkills('all'),
        ux: sortSkills('ux'),
        server: sortSkills('server'),
        dev: sortSkills('dev'),
        soft: sortSkills('soft')
    };

module.exports = function(req, res) {

    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer | Skillset',
            activeTab: 'skillset',
            skills: skills
        });
    }
    else {
        res.marko(layout, {
          title: 'Cher Stewart | Software Engineer | Skillset',
          heading: 'Cher Stewart',
          subHeading: 'Software Engineer',
          activeTab: 'skillset',
          navItems: navItems,
          skills: skills
        });
    }
};

function sortSkills(type) {
  var skillsSorted = [];

  for(var i = 0; i < skillsAll.length; i++) {
    var skill = skillsAll[i];

    if (skill.typeShort === type) {
      skillsSorted.push(skill);
    }

    else if ((type === 'all' && skill.typeShort !== 'soft') && (type === 'all' && skill.typeShort !== 'dev')) {
      skillsSorted.push(skill);
    }

  }

  return skillsSorted;

}
