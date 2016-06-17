var template = require('./template.marko');
 
exports.renderer = function(input, out) {
    var id = input.id,
        title = input.title;
    
    template.render({
        id: id,
        title: title
    }, out);
 
};