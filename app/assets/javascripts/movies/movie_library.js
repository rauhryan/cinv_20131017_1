(function(targetNamespace){
  function MovieLibrary(movies){
    this.movies = movies;
  }

  var proto = MovieLibrary.prototype;

  proto.allPixarMovies = function () {
     var matches = [];

     for(var index = 0; index < this.movies.length; index++) {
       var movie = this.movies[index];
       if(movie.studio === STUDIOS.PIXAR){
         matches.push(movie);
       }
     }

     return matches;
  }

  proto.allMoviesNotPublishedByPixar = function () {
     return this.movies.filter(function(){
       this.studio !== STUDIOS.PIXAR;
     })
  }

  proto.allPixarOrDisneyMovies = function () {
     var matches = [];

     for(var index = 0; index < this.movies.length; index++) {
       var movie = this.movies[index];
       if(movie.studio === STUDIOS.PIXAR || movie.studio === STUDIOS.DISNEY){
         matches.push(movie);
       }
     }

     return matches;
  }

  targetNamespace.MovieLibrary = MovieLibrary;

})(this);

