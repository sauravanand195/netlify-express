const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE_URL
const dbString = dbUrl.toString()

console.log(typeof(dbString))

module.exports.mongoConnection = mongoose.connect(dbString, {
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
