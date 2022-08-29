const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors')

const port = 3000

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('server on na porta: ' + port)
})