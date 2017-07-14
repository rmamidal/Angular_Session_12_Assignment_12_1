// Class Movie.
export class Movie {
    imageUrl: string;
    name: string;
    description: string;
    rating: number;
    releaseDate: string;
}

// Ratings Interface.
export interface IRating {
    id: number;
    title: string;
}