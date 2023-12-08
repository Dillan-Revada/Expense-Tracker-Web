const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connection success')
    } catch (error) {
        console.log('Connection error');
    }
}

module.exports = {db}