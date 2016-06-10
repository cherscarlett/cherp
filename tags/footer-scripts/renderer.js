var template = require('./template.marko');
 
exports.renderer = function(input, out) {
    var scripts = input.scripts;
    
    template.render({
        scripts: scripts
    }, out);
 
};