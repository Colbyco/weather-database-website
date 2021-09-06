const db = require('./db');

async function addWeatherData(record) {
    return await db('weather_data').insert(record);
}

async function getAllWeatherData(){
   return await db('weather_data').select().whereRaw("ts > current_timestamp - INTERVAL '1 hour'").limit(20).orderBy('ts', 'DESC');
}

module.exports = {
    addWeatherData,
    getAllWeatherData
};