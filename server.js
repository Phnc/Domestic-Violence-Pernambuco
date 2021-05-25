const express = require('express');

const app   = express();

const port = process.env.PORT || 8000;
const host = '0.0.0.0';

require('./app/routes')(app);

app.get('/', (req, res) => {
    res.send("We could not find this route :(");
});

app.listen(port, host, () => {
    console.log("We are live on " + port);
});