const express = require('express');
const app = express();

const router = require('./app/routing/apiRoutes');
const friends = require('./app/data/friends.js');

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', router)

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))