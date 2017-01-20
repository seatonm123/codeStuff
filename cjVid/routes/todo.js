var express = require('express');
var router = express.Router();

const knex = require('../db/knex')

router.get('/', function(req, res, next) {
  knex('todo')
  .select()
  .then(todos => {
    res.render('all', { todos: todos });
  });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  if (typeof id != 'undefined'){
  knex('todo')
  .select()
  .where('id', id)
  .first()
  .then(todo => {
    console.log('todo', todo);
    res.render('single', todo);
  });
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    });
  }
});

router.get('/new', function(req, res, next) {
    res.render('new');
});

router.get('/:id/edit', function(req, res, next){
  if (typeof id != 'undefined'){
  knex('todo')
  .select()
  .where('id', id)
  .first()
  .then(todo => {
    console.log('todo', todo);
    res.render('single', todo);
  });
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid id'
    });
  }
});

function validTodo(todo){
  return typeof todo.title == 'string' &&
          todo.title.trim() !== '' &&
          typeof todo.priority !== 'undefined' &&
          !isNaN(Number(todo.priority));
}

router.post('/', function(req, res, next) {
  console.log(req.body);
  if (validTodo(req.body)){
    const todo = {
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      date: new Date()
    };
    knex('todo')
      .insert(todo, 'id')
      .then(function(ids){
        const id = ids[0];
        res.redirect(`/todo/${id}`);
      });
  } else {
    res.status(500);
    res.render('error', {
      message: 'Invalid todo'
    });
  }
});

module.exports = router;
