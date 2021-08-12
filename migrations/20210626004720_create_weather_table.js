
exports.up = function(knex) {
    return knex.raw(`
        CREATE TABLE weather_data (
           city_name text,
           weather_conditions text,
           temp int,
           feels_like real,
           temp_min real,
           temp_max real,
           pressure int,
           humidity int
        )
    `);
};

exports.down = function(knex) {
    return knex.raw(`DROP TABLE weather_data`);
};
