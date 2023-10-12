const mongoose = require('mongoose')

module.exports.mongoConnection = mongoose.connect(process.env.DATABASE_URL, {
    //must add in order to not get any error masseges:
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log('Db connection is successfull');
    } else {
        console.log(`Error connecting Db: ${err}`);
    }
})
