const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'path': '/Home',
        'firstName': 'John',
        'lastName': 'Smith'
    })
});

router.get('/json', (req, res) => {
    res.json({
        'path': '/json',
        'author': 'John Smith'
    })
});

app.use('/', router)

module.exports.handler = serverless(app);