const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const app = express();
const routes=require('./routes/transcations')

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1', routes);
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))


const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()