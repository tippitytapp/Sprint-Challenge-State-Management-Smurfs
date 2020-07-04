
exports.up = function(knex) {
  return knex.schema.createTable('smurfs', smurfs => {
      smurfs.increments()
      smurfs.string('name')
            .notNullable()
      smurfs.integer('age')
            .notNullable()
      smurfs.decimal('height')
            .notNullable()
      smurfs.string('img_url')
      smurfs.timestamps(true, true)

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExits('smurfs')
};
