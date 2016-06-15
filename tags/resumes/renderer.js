var template = require('./template.marko');
 
exports.renderer = function(input, out) {
    var resumes = input.resumes;
    
    template.render({
        resumes: resumes
    }, out);
 
};