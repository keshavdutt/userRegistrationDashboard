const mongoose = require('mongoose');

function init(config) {
    const { database: db } = config;
    const connectionString = `mongodb://${encodeURIComponent(db.host)}:${db.port}/${encodeURIComponent(db.database || db.databaseName)}`;

    const options = {
        user: db.username || db.userName,
        pass: db.password,
        useNewUrlParser: true
        // useMongoClient: true
    };

    mongoose.Promise = global.Promise;
    // depressing the warning
    mongoose.set('strictQuery', true);

    /* eslint-disable no-console */
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB connection error. Please make sure MongoDB is running.', err);
        process.exit();
    });

    mongoose.connect(connectionString, options, () => {
        console.log('Successfully connected to database.');
    });
    /* eslint-enable no-console */
}

module.exports = {
    init
};
