const db = require('./db');

async function addWeatherData(record) {
    return await db('weather_data').insert(record);
}

async function getAllWeatherData(){
   return await db('weather_data').select().orderBy('ROWID', 'DESC').limit(20);
}

module.exports = {
    addWeatherData,
    getAllWeatherData
};