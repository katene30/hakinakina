
exports.up = function(knex) {
  return knex.schema.createTable('logs', table => {
      table.increments('id').primary()
      table.integer('userId')
      table.string('date')
      table.string('activity')
      table.string('length')
      table.string('intensity')
      table.string('notes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('logs')
};
