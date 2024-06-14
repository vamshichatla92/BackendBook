const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3010;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => { 
        console.error('Error connecting to MongoDB', error);
    });

app.use('/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server Started and running at ${PORT}`);
});
