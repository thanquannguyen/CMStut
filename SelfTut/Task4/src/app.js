const mongoose = require('mongoose')
const dotenv = require('dotenv');
const auth = require('./routes/auth')
const express = require('express');
dotenv.config();

const port = process.env.PORT || 3000
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log('DB connected.');
    });

app.use(auth);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})