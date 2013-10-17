(function(targetNamespace){
  
  function Movie(initialAttributeValues){
    this.title = "";
    this.studio = new Object();
    this.genre = new Object();
    this.releaseDate = new Date(2013,1,1,0,0,0,0);
    this.rating = 1;

    for (var prop in initialAttributeValues){
      if (initialAttributeValues.hasOwnProperty(prop)) this[prop] = initialAttributeValues[prop];
    }
  }

  var proto = Movie.prototype;

  proto.toString = function(){
    return this.title;
  }

  targetNamespace.Movie = Movie;
})(this)

