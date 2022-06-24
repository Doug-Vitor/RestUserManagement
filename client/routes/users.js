var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

/* GET users listing. */
router.get('/', (req, res, next) => {
  client.get('/users',(error, request, response, obj) => {
    assert.ifError(error);
    res.json(obj);
  })
});

router.get('/:id', (req, res, next) => {
  client.get(`/users/${req.params.id}`,(error, request, response, obj) => {
    assert.ifError(error);
    res.json(obj);
  })
});

router.put('/:id', (req, res, next) => {
  client.put(`/users/${req.params.id}`, req.body, (error, request, response, obj) => {
    assert.ifError(error);
    res.json(obj);
  })
});

router.delete('/:id', (req, res, next) => {
  client.del(`/users/${req.params.id}`, (error, request, response, obj) => {
    assert.ifError(error);
    res.json(obj);
  })
});

router.post('/', (req, res, next) => {
  client.post('/users', req.body, (error, request, response, obj) => {
    assert.ifError(error);
    res.json(obj);
  })
});

module.exports = router;
