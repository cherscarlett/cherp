module.exports = {
    index: require('./main'),
    portfolio: {
        update: require('./portfolio/update'),
        create: require('./portfolio/create'),
        delete: require('./portfolio/delete'),
        view: require('./portfolio/view'),
        new: require('./portfolio/new'),
        asides: require('./portfolio/asides')
    }
};
