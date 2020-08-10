exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('username').unique()
      table.string('hash')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
  }