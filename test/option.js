
var assert = require("assert")
  , should = require("should")
  , Option = require('../lib/option.js').Option;

describe('Option', function(){

    var None = false;
    var transform = function (v) {
        return v.replace("f", "b") 
    }

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
   
    // Collections: Map
    
    it('should be able to map over the Option', function(){
        var o = new Option("foo");
        (o.map(transform).get()).should.be.equal("boo");
    })
    
    it('should not be able to map an empty option', function(){
        var o = new Option();
        (o.map(transform).get()).should.be.None;
        (o.map(transform).getOrElse("nah")).should.be.equal("nah");
    })

    // Collections: Filter 
    
    it('should be able to filter over the Option', function(){
        var o = new Option("long string is long");
        (o.filter(function (v) {
            return (v.length > 5)
        }).get()).should.be.equal("long string is long");
    })
    
    it('should be able to filter over an Option to produce None', function(){
        var o = new Option("a");
        (o.filter(function (v) {
            return v.length > 100 
        }).get()).should.be.None;
    })
    
    it('should be able to filter over an empty Option', function(){
        var o = new Option();
        (o.filter(function (v) {
            return v.length > 100 
        }).get()).should.be.None;
    })
    
})

