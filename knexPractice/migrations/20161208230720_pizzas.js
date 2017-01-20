exports.up = function(knex, Promise) {
  return knex.schema.createTable('pizza', function(table){
    table.increments();
    table.string('brand');
    table.string('size');
    table.integer('toppings');
    table.boolean('is_cold');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pizza');
};
