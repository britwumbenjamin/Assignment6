const express = require ('express')

const routes = require('./route')

const cors = require('cors')

const connectDB = require('./db')

const app = express();

app.use(express.json())

connectDB()

const port = 4000;

app.use(cors())

app.use('/api/v1',routes)

app.listen(port, () => console.log(`server is running at port ${port}.........`))