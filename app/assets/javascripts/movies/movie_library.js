(function(targetNamespace){
  function MovieLibrary(movies){
    this.movies = movies;
  }

  var proto = MovieLibrary.prototype;

  proto.allPixarMovies = function () {
    return this.movies.filter(this.isPixarMovie);
  }

  proto.allMoviesNotPublishedByPixar = function () {
     return this.movies.filter(function(){
       this.studio !== STUDIOS.PIXAR;
     })
  }

  proto.isDisneyMovie = function(){
     return this.studio === STUDIOS.DISNEY;
  }

  proto.isPixarMovie = function(){
     return this.studio === STUDIOS.PIXAR;
  }

  proto.allMovies = function () {
    return this.movies.filter(function(){
      return true;
    })
  }

  proto.allPixarOrDisneyMovies = function () {
     return this.movies.filter(this.isPixarMovie.or(this.isDisneyMovie));
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

