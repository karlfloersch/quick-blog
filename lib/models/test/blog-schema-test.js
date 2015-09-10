var log = require("_/log");
var expect = require("chai").expect;
var models = require("../models.js");


describe("Post", function(){
  it("Should contain a title", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("title");
  });
  
  it("Should contain a body", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("body");
  });

  it("Should contain a published flag", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("published");
  });

  it("Should have a created time", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("created");
  });

  it("Should have a updated time", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("updated");
  });

  it("Should contain comments", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("comments");
  });

  it("Should have meta.tags", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("meta.tags");
  });

  it("Should keep track views", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("meta.views");
  });

  it("Should keep track of likes", function(){
    var postProps = (models.Post.schema.paths);
    expect(postProps).to.have.property("meta.likes");
  });
});

describe("Comment", function(){
  it("Should contain an author", function(){
    var commentProps = (models.Comment.schema.paths);
    expect(commentProps).to.have.property("author");
  });

  it("Should contain a parent post", function(){
    var commentProps = (models.Comment.schema.paths);
    expect(commentProps).to.have.property("parentPost");
  });
  
  it("Should contain a body", function(){
    var commentProps = (models.Comment.schema.paths);
    expect(commentProps).to.have.property("body");
  });

  it("Should have a created time", function(){
    var commentProps = (models.Comment.schema.paths);
    expect(commentProps).to.have.property("created");
  });

  it("Should have a updated time", function(){
    var commentProps = (models.Comment.schema.paths);
    expect(commentProps).to.have.property("updated");
  });

  it("Should have poster IP", function(){
    var commentProps = (models.Comment.schema.paths);
    expect(commentProps).to.have.property("meta.authorIP");
  });
});

