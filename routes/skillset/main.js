var navItems = require('../../private/menu.json'),
    layout = require('../../layouts/main.marko'),
    ajax = require('../../partials/_skillset-full.marko'),
    skills = require('../../private/skills.json')
    skillsUx = sortSkills('ux'),
    skillsServer = sortSkills('server'),
    skillsDev = sortSkills('dev'),
    skillsSoft = sortSkills('soft');

module.exports = function(req, res) {
    if (req.query.ajax) {
        res.marko(ajax, {
            title: 'Cher Stewart | Software Engineer | Skillset',
            activeTab: 'skillset',
            skills: sortSkills('all'),
            skillsUx: skillsUx,
            skillsServer: skillsServer,
            skillsDev: skillsDev,
            skillsSoft: skillsSoft
        });
    }
    else {
        res.marko(layout, {
          title: 'Cher Stewart | Software Engineer | Skillset',
          heading: 'Cher Stewart',
          subHeading: 'Software Engineer',
          activeTab: 'skillset',
          navItems: navItems,
          skills: sortSkills('all'),
          skillsUx: skillsUx,
          skillsServer: skillsServer,
          skillsDev: skillsDev,
          skillsSoft: skillsSoft
        });
    }
};

function sortSkills(type) {
  var skillsSorted = [];

  for(var i = 0; i < skills.length; i++) {
    var skill = skills[i];

    if (skill.typeShort === type) {
      skillsSorted.push(skill);
    }

    else if ((type === 'all' && skill.typeShort !== 'soft') && (type === 'all' && skill.typeShort !== 'dev')) {
      skillsSorted.push(skill);
    }

  }

  return skillsSorted;

}
