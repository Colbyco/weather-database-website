exports.up = function(knex) {
    return knex.raw(`
        ALTER TABLE weather_data
        ADD timestamp text
    `);
};

exports.down = function(knex) {
    return knex.raw(`
        CREATE TABLE weather_data_backup(city_name, weather_conditions, temp, feels_like, temp_min, temp_max, pressure, humidity);
        INSERT INTO weather_data_backup SELECT city_name, weather_conditions, temp, feels_like, temp_min, temp_max, pressure, humidity FROM weather_data;
        DROP TABLE weather_data;
        ALTER TABLE weather_data_backup RENAME TO weather_data;
    `);
};