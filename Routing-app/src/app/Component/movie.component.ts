// Importing required libraries.
import { Component, Injectable } from "@angular/core"
import { Movie, IRating } from "../Service/movie"
import { MovieService, RatingService } from "../Service/movie.service"
import { FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms"

@Component({
    selector: "movie-app",
    templateUrl: "../View/movie.Component.html",
    providers: [MovieService, RatingService]
})
export class MovieComponent {
    // Binding Logic.
    currentMovie: Movie = new Movie();

    // List of Movies.
    listOfMovies: Array<Movie> = new Array<Movie>();

    // Rating list array.
    movieRatings: IRating[] = [];

    // Search Field variable,
    private searchMovie: string;

    // Declaring myForm of Type FormGroup
    formMovie: FormGroup;


    // Injecting services into constructor. 
    constructor(private _movieService: MovieService, private _ratingService: RatingService, private _formBuilder: FormBuilder) {}

    // Initialising  Form Grpup, drop down and movies
    ngOnInit() {
      // Using Form Builder.
      this.formMovie = this._formBuilder.group({
        'imageUrl': ['',Validators.compose([Validators.required])],
        'name': ['',Validators.compose([Validators.required])],
        'description': ['', Validators.compose([Validators.required])],
        'rating': ['', Validators.compose([Validators.required])],
        'releaseDate': ['', Validators.compose([Validators.required])]
      });

      this.listOfMovies = this._movieService.getMovieList();
      this.movieRatings = this._ratingService.getRatings();
      this.searchMovie = ""; // Initialising search field value.
    }

    // Adding movie to movie list
    addMovie() {
        this._movieService.addMovie(this.currentMovie);
        this.currentMovie = new Movie(); // Clearing Object.
        this.formMovie.reset();; // Reset form after submiting Movie info.
    }
}
