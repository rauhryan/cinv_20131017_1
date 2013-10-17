(function(targetNamespace){

  function Match(attr) {
    this.attr = attr;
  }

  var proto = Match.prototype;

  proto.onAttribute = function(attr){
    var match = new Match(attr);
    return match;
  };

  proto.equalTo = function(value) {
    var attr = this.attr;
    return function() {
      return this[attr] === value;
    };
  }
  
  proto.equalAny = function() {
    var args = Array.prototype.slice(arguments);
    var matcher = function(){
      return false;
    }
    var target = this;
    args.forEach(function(){
      matcher = matcher.or(target.equalTo.call(this));
    };
    return matcher;
  }

  targetNamespace.Match = proto;

})(this);
