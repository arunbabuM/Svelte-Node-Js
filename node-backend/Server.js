const express = require('express');

const cors = require('cors');

const router = require('./app/routes/Register')

require('dotenv').config();

const app = express();

const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", router)

const {client} = require("./app/config/db.js")
client.connect();



app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});