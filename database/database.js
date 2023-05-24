const mongoose = require('mongoose');

const connectingToTheDatabase = async (URI) => mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.error('Error connecting to the database: ' + error);
})

module.exports = {
    connectingToTheDatabase
}