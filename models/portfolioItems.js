var mongoose = require('mongoose'),
    portfolioSchema = new mongoose.Schema({ 
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
                image: {
                    width: Number,
                    height: Number,
                    url: String

                },
                facts: [
                    { text: String }
                ]
            }
        ]
    });

mongoose.model('portfolioItem', portfolioSchema);
