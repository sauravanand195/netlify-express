const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config()
const cors = require('cors')

// Db connection
require('./config/db.js')

const app = express();
const router = express.Router();

// questions Routes
const questionsAnswersRoutes = require('./routes/questionsAnswers')

// user Routes
const userRoutes = require('./routes/users')

// search Routes
const searchRoutes = require('./routes/search')

// cors middleware
app.use(cors())

// body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// route middleware
app.use('/qna', questionsAnswersRoutes)
app.use('/users', userRoutes)
app.use('/search', searchRoutes)

router.get('/', (req, res)=>{
    res.json({'test':'server is up and running ...'})
})

router.get('/json', (req, res) => {
    res.json({
        'path': '/json',
        'author': 'Saurav Anand'
    })
});

// error handling middleware
app.use((err, req, res, next)=>{
    res.status(500).json({
        error: true,
        message: err.message,
        data: null,
    })
})

app.use('/', router)

module.exports.handler = serverless(app);