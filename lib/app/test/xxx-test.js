var expect = require("chai").expect;
var app = require("_/app");

describe("Test", function(){
   describe("#testing()", function(){
       it("should do something well", function(){
           console.log("POODLE ");
           console.log("POODLE " + app);
           var results = app.test();
           console.log("POODLE " +results);
 
           expect(results).to.contain("test");
       });
   });
});
