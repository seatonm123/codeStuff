
exports.seed = function(knex, Promise) {
  return knex('city').del()
    .then(function () {
      const cities = [{
        id: 1,
        name: 'Cincinnati',
        country: 'USA',
        population: 300000,
      }, {
        id: 2,
        name: 'Tokyo',
        country: 'Japan',
        population: 13617000,
      }, {
        id: 3,
        name: 'Venice',
        country: 'Italy',
        population: 264579,
      }, {
        id: 4,
        name: 'Istanbul',
        country: 'Turkey',
        population: 14000000,
      }];
      return knex('city').insert(cities);
    });
};
