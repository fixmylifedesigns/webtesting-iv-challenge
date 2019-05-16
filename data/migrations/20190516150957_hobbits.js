exports.up = function(knex, Promise) {
  return knex.schema.createTable("hobbits", tbl => {
    tbl.string("name", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("hobbits");
};
