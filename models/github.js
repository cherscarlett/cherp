var GitHubStrategy = require('passport-github').Strategy,
    passport = require('passport'),
    dotenv = require('dotenv'),
    fs = require('fs'),
    mongoose = require('mongoose');

if (fs.existsSync('.env')) { 
    dotenv.load();
}

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.GITHUB_URL
    },
   function(accessToken, refreshToken, profile, done){
      mongoose.model('user').findOne({ gh_id: profile.id }, function(err, profile) {
        if(err) {
            console.log(err);
        }
        if (!err && profile !== null) {
            done(null, profile);
        }
        else {
            done(err, null);
        }
      });
}));

passport.serializeUser(function(profile, done) {
    done(null, profile._id);
});

passport.deserializeUser(function(id, done) {
    mongoose.model('user').findById(id, function(err, profile) {
        if(!err) done(null, profile);
        else done(err, null);
    });
});
