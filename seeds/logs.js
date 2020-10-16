
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('logs').del()
    .then(function () {
      // Inserts seed entries
      return knex('logs').insert([
        {id: 1, userId: '16', date:'2020-10-16', activity: 'Walk up Parihaka', length: '1hr', intensity: 'high', notes: 'Day after bball tourney, bit tired'},
        {id: 2, userId: '16', date:'2020-10-13', activity: 'Rugby game', length: '80 mins', intensity: 'medium', notes: '	It was tiring'},
        {id: 3, userId: '16', date:'2020-10-10', activity: 'Hakinakina', length: '1 hour', intensity: 'medium', notes: ''}
      ]);
    });
};
