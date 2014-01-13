(function(targetNamespace){

    targetNamespace.MovieLibrary = function MovieLibrary(list){
        var listOfMovies = list;
        var response = {
            allPixarMovies: function(){
              return listOfMovies.filter(function() {
                return this.studio === STUDIOS.PIXAR;
              });
            }
            ,allPixarOrDisneyMovies: function(){
              return listOfMovies.filter(function() {
                // condition
              });
            }
            ,allMoviesNotPublishedByPixar: function(){

            }
            ,allMoviesReleasedAfter: function(){

            }
            ,allMoviesReleasedBetweenYears: function(){

            }
            ,sortAllMoviesByDescendingTitle: function(){

            }

        };
        return response;
    }

})(this);

