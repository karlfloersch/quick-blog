var expect = require("chai").expect;
var log = require("_/log");
var models = require("_/models");

describe("Post", function(){
  it("Should contain a title", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should contain a body", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should have a date", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should have tags", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should have comments", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
});

describe("Comment", function(){
  it("Should contain an author", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should contain a parent", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should contain a body", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should have a date", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
  it("Should have comments", function(){
    var results = models.test();

    expect(results).to.contain("test");
  });
});

