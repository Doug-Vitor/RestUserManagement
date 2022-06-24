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
    res.end(JSON.stringify(obj, null, 2));
  })
});

module.exports = router;
