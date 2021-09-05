
exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE weather_data (
           city_name text,
           weather_conditions varchar(50),
           temp float,
           feels_like float,
           temp_min float,
           temp_max float,
           pressure float,
           humidity float
        )
    `);
};

exports.down = function(knex) {
    return knex.raw(`DROP TABLE weather_data`);
};
