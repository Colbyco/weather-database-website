const db = require('./db');

async function addWeatherData(record) {
    return await db('weather_data').insert(record);
}

async function getAllWeatherData(){
   return await db('weather_data').select().limit(20).orderBy('timestamp', 'DESC');
}

module.exports = {
    addWeatherData,
    getAllWeatherData
};