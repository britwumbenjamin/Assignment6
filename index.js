const express = require ('express')

const routes = require('./route')

const cors = require('cors')

const app = express();

app.use(express.json())

app.use(cors())

const port = 6000;

app.use(cors())

app.use('/api/v1',routes)

app.listen(port, () => console.log("server is running at port ${port}........."))