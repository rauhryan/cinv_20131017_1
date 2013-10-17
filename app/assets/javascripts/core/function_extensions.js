(function(targetNamespace){
  Function.prototype.or = function(secondCondition){
    var that = this;
    return function() {
      return that.call(this) || secondCondition.call(this);
    }
  }

})(this);

