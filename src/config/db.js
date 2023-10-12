const mongoose = require('mongoose')
require('dotenv').config()
const dbUrl = process.env.DATABASE_URL

module.exports.mongoConnection = mongoose.connect(dbUrl, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true"
}, (err) => {
    if (!err) {
        console.log('Db connection is successfull');
    } else {
        console.log(err);
    }
})
