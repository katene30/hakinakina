
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 15, firstName: 'grape', lastName: 'grape', username: 'grape', hash:'grapeakjsdaoiuscxoihjasfdqwed@#@$!@'},
        {id: 2, firstName: 'Hemi', lastName: 'Ruka', username: 'hemz', hash:'hemkadsfoijasifsdf'},
        {id: 3, firstName: 'Retro', lastName: 'Guy', username: 'thisGuy', hash:'liuharg87fdsg*&^*&^'}
      ]);
    });
};
