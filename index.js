/* eslint-disable indent */
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

// database connection
mongoose
    .connect(process.env.URI, {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connection successfull'))
    .catch((e) => console.log(e));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log('app is runng');
});
