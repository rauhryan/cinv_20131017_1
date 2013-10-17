(function(targetNamespace){
  function MovieLibrary(movies){
    this.movies = movies;
  }

  var proto = MovieLibrary.prototype;

  proto.allPixarMovies = function () {
    return this.movies.filter(function() {
      return this.studio === STUDIOS.PIXAR;
    });
  }

  proto.allMoviesNotPublishedByPixar = function () {
     return this.movies.filter(function(){
       this.studio !== STUDIOS.PIXAR;
     })
  }

  proto.allPixarOrDisneyMovies = function () {
     return this.movies.filter(function(){
       return this.studio === STUDIOS.PIXAR || this.studio === STUDIOS.DISNEY;
     })
  }

  proto.allMoviesReleasedAfter = function (year) {
     return this.movies.filter(function(){
       return this.releaseDate.getFullYear() > year;
     })
  }
  proto.allMoviesReleasedBetweenYears = function (start, end) {
     return this.movies.filter(function(){
       return this.releaseDate.getFullYear() >= start && this.releaseDate.getFullYear() <= end;
     })
  }

  targetNamespace.MovieLibrary = MovieLibrary;

})(this);

