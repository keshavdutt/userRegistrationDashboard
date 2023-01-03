const express = require('express');
const dotenv = require('dotenv');
const mode = process.env.NODE_ENV || "development";

const Users = require('./mongo/models/user.model');
console.log(`App running in ${mode} mode`)

dotenv.config({
    path: `.env.${mode}`
});

// Mongodb initialisation
const { db } = require('./config');
const { init: mongoInit } = require('./mongo');
mongoInit({ database: db });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('This is from get API')
})



app.post('/', async (req, res) => {
    try {
        const { username } = req.body;
        const result = await Users.create({ username });
        let data = {
            username: result.username,
        };
        return res.status(200).json({
            status: true,
            message: 'Wallets created successfully',
            data
        })
    } catch (err) {
        return res.status(500).json({
            status: true,
            message: `Unable to create wallet. Please try again. \n Error: ${err}`
        })
    }
});

// This section will run when using NODE_ENV node app.js
if (mode != "development") {
    const port = process.env.PORT || 8080

    try {
        app.listen(port, () => {
            console.log(`server starting on port ${port}`)
        })
    } catch (err) {
        console.log(`Error in starting the server ${err}`)
    }
}


module.exports = app;
