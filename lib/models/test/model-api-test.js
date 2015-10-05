// var log = require("_/log");
// var expect = require("chai").expect;
// var models = require("_/models");


// describe("posts", function(){
//   var testPostTitle = '_posts-Test';
//   beforeEach(function () {
//     var newPostJSON = {
//       title: testPostTitle,
//       body: 'In at aliquet turpis. Fusce gravida arcu a eros feugiat rhoncus nec id enim. Duis commodo ornare lectus, non pretium risus mollis volutpat. Vivamus finibus est',
//       published: false,
//       meta: { tags: ['test', 'this', 'code'], likes: 100}
//     };
//     models.posts.create(newPostJSON, function(err, post){
//     });
//   });

//   afterEach(function () {
//     models.posts.remove(testPostTitle, function(){});
//   });


//   describe("#findByTitle", function(){
//     it("Should find the test post when given it's title", function(){
//       models.posts.findByTitle(testPostTitle, function(err, post) {
//         expect(post).to.have.property('title', testPostTitle);
//       });
//     });
//   });

//   describe("#find", function(){
//     it("Should find all posts matching the criteria", function(){
//       var secondTestPostTitle = 'secondTestPost';
//       var secondTestPost = {
//         title: secondTestPostTitle,
//         body: 'I love adding stuff',
//         published: false,
//         meta: { tags: ['test', 'this', 'code'], likes: 100 }
//       };
//       models.posts.create(secondTestPost, function(err, post){});
//       models.posts.find({ $or: [{'title': testPostTitle}, {'title': secondTestPostTitle}]}, function(err, posts) {
//         expect(posts.length).to.equal(2);
//         models.posts.remove(secondTestPostTitle, function(){});
//       });

//       models.posts.findByTitle(testPostTitle, function(err, post) {
//         expect(post).to.have.property('title', testPostTitle);
//       });
//     });
//   });

//   describe("#create", function(){
//     it("Should not overwrite existing documents", function(){
//       var duplicatePostJSON = {
//         title: testPostTitle,
//         body: 'I love overwriting stuff',
//         published: false,
//         meta: { tags: 'test, this, code', likes: 100}
//       };
//       models.posts.create(duplicatePostJSON, function(err, post){});
//       models.posts.findByTitle(testPostTitle, function(err, post) {
//         expect(post.body).to.not.equal('I love overwriting stuff');
//       });
//     });
//   });

//   describe("#update", function(){
//     it("Should update existing documents with new values", function(){
//       models.posts.update(testPostTitle, { body: 'I am new!' }, function(err, post){
//           expect(post.body).to.equal('I am new!');
//       });
//     });
//   });
// });

// describe("comments", function(){
//   describe("#find", function(){
//     it("Should work", function(){
//     });
//   });

//   describe("#create", function(){
//     it("Should work", function(){
//     });
//   });

//   describe("#update", function(){
//     it("Should work", function(){
//     });
//   });
// });
