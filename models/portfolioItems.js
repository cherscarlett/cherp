var mongoose = require('mongoose'),
    portfolioSchema = new mongoose.Schema({ 
        order: Number,
        slug: String,
        title: String,
        location: String,
        job: String,
        timespan: String,
        skills: [
            { text: String }
        ],
        descriptions: [
            { text: String }
        ],
        asides: [
            {
                title: String,
                url: String,
                text: String
            }
        ]
    });

mongoose.model('portfolioItem', portfolioSchema);
