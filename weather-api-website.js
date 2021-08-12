require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { Parser } = require('json2csv');
const weatherRepo = require('./weather-repository');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/public/css'));
app.set('view engine', 'ejs');
const apiKey = process.env.API_KEY;

app.get('/', async (req, res) => {
    const data = await weatherRepo.getAllWeatherData();
    return res.render('index', { data });
});

app.post('/', (req, res) => {

    const cityName = req.body.city_name;

    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
        .then(async function (response) {
            // handle success
            const record = {
                city_name: response.data.name,
                weather_conditions: response.data.weather[0].main,
                temp: response.data.main.temp,
                feels_like: response.data.main.feels_like,
                temp_min: response.data.main.temp_min,
                temp_max: response.data.main.temp_max,
                pressure: response.data.main.pressure,
                humidity: response.data.main.humidity,
                timestamp: new Date(response.data.dt * 1000).toString(),
            };
            //const json2csvParser = new Parser();
            //const csv = json2csvParser.parse(record);
            //res.setHeader('Content-disposition', 'attachment; filename=data.csv');
            await weatherRepo.addWeatherData(record);
            const allWeatherData = await weatherRepo.getAllWeatherData();
            return res.render('index', {data: allWeatherData, cityName});//.send(csv);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});


app.listen(process.env.PORT || 80, () => {
    console.log('Web Server Started');
});