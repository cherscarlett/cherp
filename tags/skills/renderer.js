var template = require('./template.marko');
 
exports.renderer = function(input, out) {
    var skills = input.skills,
        type = input.type,
        title = input.title;
    
    template.render({
        skills: skills,
        title: title,
        type: type
    }, out);
 
};