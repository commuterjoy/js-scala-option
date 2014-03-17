
var assert = require("assert")
  , should = require("should")
  , Option = require('../lib/option.js').Option;

describe('Option', function(){
    
    it('should be defined', function(){
        (Option).should.exist;
    })
    
    it('should be provide a way to get it\'s value', function(){
        var o = new Option("foo");
        (o.get()).should.be.equal("foo");
    })
    
    it('should know if it\'s empty', function(){
        var o = new Option();
        (o.isEmpty()).should.be.true;
    })
    
    it('should know if it is defined', function(){
        var o = new Option("foo");
        (o.isDefined()).should.be.true;
    })
    
    it('should return None if empty', function(){
        var o = new Option();
        (o.get()).should.be.None;
    })
   
    // collections
    
    it('should be able to map over the Option', function(){
        var o = new Option("foo");
        (o.map(function (v) {
            return v.replace("f", "b") 
        }).get()).should.be.equal("boo");
    })
    
    it('should not be able to map an empty option', function(){
        var o = new Option();
        (o.map(function (v) { }).get()).should.be.None;
        (o.map(function (v) { }).getOrElse("nah")).should.be.equal("nah");
    })
    
})

