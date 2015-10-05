// var log = require('_/log');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var request = chai.request;
var app = require('_/app');


// Helper functions for our tests
function requestCreatePost(postJSON, callback){
  request(app)
    .post('/post')
    .send(postJSON)
    .end(callback);
}

function requestDeletePost(criteria, callback){
  request(app)
    .post('/post/' + criteria)
    .end(callback);
}

function requestGetPost(criteria, callback){
  request(app)
    .post('/post?' + criteria)
    .end(callback);
}


// Handle the Mocha specific functions
/* global describe beforeEach afterEach it */
describe('handlers', function(){
  var testPostTitle = '_posts-api-Test';

  beforeEach(function () {
    var newPostJSON = {
      title: testPostTitle,
      body: 'In at aliquet turpis. Fusce gravida arcu a eros feugiat rhoncus nec id enim. Duis commodo ornare lectus, non pretium risus mollis volutpat. Vivamus finibus est',
      published: false,
      meta: { tags: ['test', 'this', 'code'], likes: 100}
    };

    requestCreatePost(newPostJSON, function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });
  });

  afterEach(function () {
    requestDeletePost(testPostTitle, function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });
  });

  describe('#get-post-titles', function(){
    it('Should return a list of all the post titles', function(){
      // Use the plain post title api for this one instead of our helper
      // functions because we only use this once
      request(app)
        .get('/post-titles')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.include(testPostTitle);
        });
    });
  });

  describe('#get-post', function(){
    it('Should return our new post when we specify the title', function(){
      requestGetPost('?title=' + testPostTitle, function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('title');
        expect(res.body.title).to.equal(testPostTitle);
      });
    });
    it('Should return an error when we dont provide enough information', function(){
      requestGetPost('', function (err, res) {
        expect(err).to.exist;
        expect(res).to.have.status(404);
      });
    });
  });

  describe('#update-post', function(){
    it('Should update a post when you supply the posts title', function(){
      // Like post-titles don't use a helper function becuase we don't need
      // to make this check more than once
      request(app)
        .put('/post/' + testPostTitle)
        .end(function (err, res) {
          expect(err).to.exist;
          expect(res).to.have.status(404);
        });
    });
  });

  describe('#delete-post', function(){
    it('Should delete the post when we ask and not return the post once we search for it again', function(){
      // Build our new post's contents
      var deletePostTitle = '_posts-api-delete-Test';
      var deletePostJSON = {
        title: deletePostTitle,
        body: 'test',
        published: false,
        meta: { tags: ['test', 'this', 'code'], likes: 100}
      };

      // Create the new post
      requestCreatePost(deletePostJSON, function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        // Delete the post
        requestDeletePost(deletePostTitle, function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);

          // Make sure the post is deleted
          requestGetPost(deletePostTitle, function(err, res) {
            expect(err).to.exist;
            expect(res).to.have.status(404);
          });
        });
      });
    });
  });

  describe('#create-post', function(){
    it('Should create a new post that can be found when we search for it', function(){
      // Build our new post's contents
      var createPostTitle = '_posts-api-create-Test';
      var createPostJSON = {
        title: createPostTitle,
        body: 'test',
        published: false,
        meta: { tags: ['test', 'this', 'code'], likes: 100}
      };

      // Create the new post
      requestCreatePost(createPostJSON, function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        // Make sure the new post exists
        requestGetPost(createPostTitle, function(err, res) {
          expect(err).to.be.null;
          expect(res.body).to.have.property('title');
          expect(res.body.title).to.equal(createPostTitle);
        });
      });
    });
  });
});
