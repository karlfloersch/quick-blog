var models = require('_/models');
var log = require('_/log');

exports.index = function (req, res) {
  res.render('index');
};

exports.getPostList = function (req, res) {
  res.status(404).json('index');
};

exports.getPost = function (req, res) {
  res.status(404).json('index');
};

exports.updatePost = function (req, res) {
  res.status(404).json('index');
};

exports.removePost = function (req, res) {
  res.status(404).json('index');
};

exports.createPost = function (req, res) {
  res.status(404).json('index');
};
