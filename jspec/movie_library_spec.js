build = {
  movieLibrary: function (movies){
    return new MovieLibrary(movies);
  }
};

describe('Movie Library', function(){
  beforeEach(function(){
    this.addMatchers({
      toContainOnly: function(expected){
        var actual = this.actual;
        var notText = this.isNot ? " not" : "";

        this.message = function(){
          return "Expected " + actual.toString() + notText + " to contain only " + expected.toString();
        }

        var result = expected.length === actual.length
        return result && (function(){
          var allFound = true;
          expected.forEach(function(){
            allFound &= actual.indexOf(this) > -1;
          })
          return allFound;
        })();
      }
    })
  });

  describe('searching and sorting', function(){

    indianaJonesAndTheTempleOfDoom = new Movie({ 
      title: "Indiana Jones And The Temple Of Doom", 
      releaseDate: new Date(1982, 1, 1, 0, 0, 0, 0),
      genre: GENRES.ACTION,
      studio: STUDIOS.UNIVERSAL, 
      rating: 10
    });

    cars = new Movie({
      title:  "Cars", 
      releaseDate: new Date(2004, 1, 1, 0, 0, 0, 0), 
      genre: GENRES.KIDS, 
      studio: STUDIOS.PIXAR, 
      rating: 10
    });

    yoursMineAndOurs = new Movie({
      title: "Yours, Mine and Ours",
      releaseDate: new Date(2005, 1, 1, 0, 0, 0, 0),
      genre: GENRES.COMEDY,
      studio: STUDIOS.MGM,
      rating:  7
    });

    shrek = new Movie({
      title: "Shrek",
      releaseDate: new Date(2006, 5, 10, 0,0,0,0), 
      genre: GENRES.KIDS,
      studio: STUDIOS.DREAMWORKS,
      rating: 10
    });

    aBugsLife = new Movie({ 
      title: "A Bugs Life",
      releaseDate: new Date(2000, 6, 20, 0, 0, 0, 0), 
      genre: GENRES.KIDS,
      studio: STUDIOS.PIXAR,
      rating:  10 
    });

    theresSomethingAboutMary = new Movie({ 
      title: "There's Something About Mary",
      releaseDate: new Date(2007, 1, 1, 0, 0, 0, 0),
      genre: GENRES.COMEDY,
      studio: STUDIOS.MGM,
      rating: 5
    });

    piratesOfTheCarribean = new Movie({ 
      title: "Pirates of the Carribean",
      releaseDate: new Date(2003, 1, 1, 0, 0, 0, 0), 
      genre: GENRES.ACTION,
      studio: STUDIOS.DISNEY,
      rating: 10
    });

    originalMovies = [indianaJonesAndTheTempleOfDoom, cars, aBugsLife, theresSomethingAboutMary, piratesOfTheCarribean, yoursMineAndOurs, shrek];

    sut = build.movieLibrary(originalMovies);                                                                       

    describe('Searching for movies', function(){
      it('Can find all pixar movies', function(){
        filter = Filter.onAttribute('studio').equalTo(STUDIOS.PIXAR));

        results = sut.allMovies().filter(filter);

        expect(results).toEqual([cars, aBugsLife]);
      });

      it('Can find all pixar or disney movies', function(){
        results = sut.allPixarOrDisneyMovies();

        expect(results).toEqual([cars, aBugsLife, piratesOfTheCarribean]);
      });


      it('Can find all movies not published by pixar', function(){
        results = sut.allMoviesNotPublishedByPixar();

        expect(results).not.toContain(cars);
        expect(results).not.toContain(aBugsLife);
      });

      it('Can find all movies released after 2004', function(){
        results = sut.allMoviesReleasedAfter(2004);

        expect(results).toContainOnly([yoursMineAndOurs, shrek, theresSomethingAboutMary]);
      });

      it('Can find all movies released between 1982 and 2003 - Inclusive', function(){
        results = sut.allMoviesReleasedBetweenYears(1982, 2003);

        expect(results).toEqual([indianaJonesAndTheTempleOfDoom, aBugsLife, piratesOfTheCarribean]);
      });
    });

    describe('Sorting movies', function(){
      it('Can sort all movies by descending title', function(){
        results = sut.sortAllMoviesByDescendingTitle();

        expect(results).toEqual([ yoursMineAndOurs,
                                 theresSomethingAboutMary,
                                 shrek,
                                 piratesOfTheCarribean,
                                 indianaJonesAndTheTempleOfDoom,
                                 cars,
                                 aBugsLife]);
      });
    });
  });
});

