var log = require("_/log");
var expect = require("chai").expect;
var models = require("../models.js");

describe("Post", function(){
  it("Should contain a title", function(){
    // log.info("Model: " + models);
    expect(new models.Post()).to.contain("title");
  });
  
  it("Should contain a body", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have a created time", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have a updated time", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should contain comments", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have meta info", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have meta.tags", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have meta.likes", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });
});

describe("Comment", function(){
  it("Should contain an author", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should contain a parent post", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });
  
  it("Should contain a body", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have a created time", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have a updated time", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have meta info", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });

  it("Should have poster IP", function(){
    var results = models.test();
    expect(results).to.contain("test");
  });
});

