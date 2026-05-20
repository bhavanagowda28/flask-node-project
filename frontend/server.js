const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', async (req, res) => {

    try {

        const response = await axios.post('http://backend:5001/api/data', {
            name: req.body.name,
            email: req.body.email
        });

        res.send("Data submitted successfully");

    } catch (error) {

        console.log(error);

        res.send("Error submitting data");

    }

});

app.listen(3000, () => {
    console.log('Frontend running on port 3000');
});







