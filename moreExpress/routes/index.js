var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('city')
  .select()
  .then(function(cities){
  res.render('index.hbs', { cities });
  });
});

router.get('/add', function(req, res, next){
  res.render('add.hbs');
});

router.post('/', function(req, res, next){
  knex ('city').insert( {
    name: req.body.name,
    country: req.body.country,
    population: req.body.population
  })
  .returning('id').then(function(){
    res.redirect('/');
  });
});

router.put('/city/:id', function(req, res, next){
  knex('city').where('id', req.params.id).update({
    name: req.body.name,
    country: req.body.country,
    population: req.body.population,
  })
  .returning('id').then(function(){
    res.redirect('/');
  });
});

module.exports = router;
