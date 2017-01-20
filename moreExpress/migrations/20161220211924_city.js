
exports.up = function(knex, Promise) {
  return knex.schema.createTable('city', function(table){
    table.increments();
    table.text('name');
    table.text('country');
    table.integer('population').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city');
};
