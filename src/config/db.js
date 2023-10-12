const mongoose = require('mongoose');
let dbUrl = process.env.DATABASE_URL

const mongoConnection = () => {
    dbUrl = dbUrl.toString()
    console.log('dbUrl :>> ', dbUrl, typeof (dbUrl));
    mongoose.connect(`${dbUrl}`, {
        //must add in order to not get any error masseges:
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (!err) {
            console.log('Db connection is successfull');
        } else {
            console.log(`Error connecting Db: ${err}`);
        }
    })
}

module.exports = mongoConnection
