
exports.seed = function(knex, Promise) {
  return knex('todo').del()
    .then(function () {
      const todos = [{
        title: 'make express app',
        priority: 1,
        date: new Date()
      }, {
        title: 'do dishes',
        priority: 3,
        date: new Date()
      }, {
        title: 'render a view',
        priority: 2,
        date: new Date()
      }, {
        title: 'walk dogs',
        priority: 2,
        date: new Date()
      }];
      return knex('todo').insert(todos);
    });
};
