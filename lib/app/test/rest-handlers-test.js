var log = require('_/log');
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
    .del('/post/' + criteria)
    .end(callback);
}

function requestGetPost(criteria, callback){
  request(app)
    .get('/post/' + criteria)
    .end(callback);
}


// Handle the Mocha specific functions
/* global describe beforeEach afterEach it */
describe('handlers', function(){
  var testPostSlug = '_posts-api-Test';

  beforeEach(function (done) {
    var newPostJSON = {
      slug: testPostSlug,
      title: 'Post API Test',
      body: 'In at aliquet turpis. Fusce gravida arcu a eros feugiat rhoncus nec id enim. Duis commodo ornare lectus, non pretium risus mollis volutpat. Vivamus finibus est',
      published: false,
      meta: { tags: ['test', 'this', 'code'], likes: 100}
    };

    requestCreatePost(newPostJSON, function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });

  afterEach(function (done) {
    requestDeletePost(testPostSlug, function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });

  describe('#get-post-slugs', function(){
    it('Should return a list of all the post slugs', function(done){
      // Use the plain post slug api for this one instead of our helper
      // functions because we only use this once
      request(app)
        .get('/post-slugs')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.include(testPostSlug);
          done();
        });
    });
  });

  describe('#get-post', function(){
    it('Should return our new post when we specify the slug', function(done){
      requestGetPost(testPostSlug, function (err, res) {
        log.info({'POOOOOOOOOOOOOOOOOOOOOOOOOOOOOODLE':'D', 'body': JSON.stringify(res.body)});
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('slug');
        expect(res.body.slug).to.equal(testPostSlug);
        done();
      });
    });
    it('Should return an error when we dont provide enough information', function(done){
      requestGetPost('', function (err, res) {
        expect(res).to.have.status(404);
        done();
      });
    });
  });

  describe('#update-post', function(){
    it('Should update a post when you supply the posts slug', function(done){
      // Like post-slugs don't use a helper function becuase we don't need
      // to make this check more than once
      request(app)
        .put('/post/' + testPostSlug)
        .end(function (err, res) {
          expect(err).to.exist;
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe('#delete-post', function(){
    it('Should delete the post when we ask and not return the post once we search for it again', function(done){
      // Build our new post's contents
      var deletePostSlug = '_posts-api-delete-Test';
      var deletePostJSON = {
        slug: deletePostSlug,
        title: 'test delete',
        body: 'test',
        published: false,
        meta: { tags: ['test', 'this', 'code'], likes: 100}
      };

      // Create the new post
      requestCreatePost(deletePostJSON, function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        // Delete the post
        requestDeletePost(deletePostSlug, function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);

          // Make sure the post is deleted
          requestGetPost(deletePostSlug, function(err, res) {
            expect(res).to.have.status(404);
            done();
          });
        });
      });
    });
  });

  describe('#create-post', function(){
    it('Should create a new post that can be found when we search for it', function(done){
      // Build our new post's contents
      var createPostSlug = '_posts-api-create-Test';
      var createPostJSON = {
        slug: createPostSlug,
        title: 'test create',
        body: 'test',
        published: false,
        meta: { tags: ['test', 'this', 'code'], likes: 100}
      };

      // Create the new post
      requestCreatePost(createPostJSON, function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);

        // Make sure the new post exists
        requestGetPost(createPostSlug, function(err, res) {
          expect(err).to.be.null;
          expect(res.body).to.have.property('slug');
          expect(res.body.slug).to.equal(createPostSlug);
          done();
        });
      });
    });
  });
});
