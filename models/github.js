var GitHubStrategy = require('passport-github').Strategy,
    passport = require('passport'),
    dotenv = require('dotenv'),
    fs = require('fs'),
    github;

if (fs.existsSync('.env')) { 
    dotenv.load();
}

github.id = process.env.GITHUB_ID;
github.secret = process.env.GITHUB_SECRET;

passport.use(new GitHubStrategy({
    clientID: github.id,
    clientSecret: github.secret,
    callbackURL: "/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
        return cb(err, user);
    });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());
