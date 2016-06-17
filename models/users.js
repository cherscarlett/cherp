var mongoose = require('mongoose'),
    userSchema = new mongoose.Schema({ 
        username: String,
        gh_id: Number,
        displayName: String,
        avatar_url: String
    });

mongoose.model('user', userSchema);
