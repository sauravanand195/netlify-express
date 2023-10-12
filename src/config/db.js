const mongoose = require('mongoose');
let dbUrl = process.env.DATABASE_URL
dbUrl = dbUrl.toString()

module.exports.mongoConnection = mongoose.connect(`${dbUrl}`, {
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
