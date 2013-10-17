(function(){

  Array.prototype.forEach = function(callback){

     for(var index = 0; index < this.length; index++) {
       callback.apply(this[index]);
     }

  }

  Array.prototype.filter = function(condition){
     var matches = [];

     this.forEach(function(){
       condition.call(this) && matches.push(this);
     });

     return matches;
  }
})()
