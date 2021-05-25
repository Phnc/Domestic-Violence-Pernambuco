const express = require('express');

const app   = express();

const port = process.env.PORT || 8000;
const host = '0.0.0.0';

require('./app/routes')(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/404.html");
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/404.html");
});

app.listen(port, host, () => {
    console.log("We are live on " + port);
});