(function(targetNamespace){

    targetNamespace.MovieLibrary = function MovieLibrary(list){
        var listOfMovies = list;
        var response = {
            allPixarMovies: function(){
                var result = [];
                for(var i = 0; i < listOfMovies.length; i++){
                    if(listOfMovies[i].studio===STUDIOS.PIXAR){
                        result.push(listOfMovies[i]);
                    }
                }
                return result;
            }
            ,allPixarOrDisneyMovies: function(){
                var result = [];
                for(var i = 0; i < listOfMovies.length; i++){
                    if(listOfMovies[i].studio===STUDIOS.PIXAR || listOfMovies[i].studio===STUDIOS.DISNEY){
                        result.push(listOfMovies[i]);
                    }
                }
                return result;
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

