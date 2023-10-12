const mongoose = require('mongoose');
// const dbUrl = process.env.DATABASE_URL

module.exports.mongoConnection = mongoose.connect("mongodb+srv://saurav:saurav@cluster0.cowzm.mongodb.net/test?retryWrites=true&w=majority", {
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
