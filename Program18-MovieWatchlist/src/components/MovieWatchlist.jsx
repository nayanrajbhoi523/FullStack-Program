import { useState } from "react";

function MovieWatchlist() {
    const [movie, setMovie] = useState("");
    const [rating, setRating] = useState("");
    const [movies, setMovies] = useState([]);

    const addMovie = () => {
        if (movie.trim() === "" || rating === "") {
            return;
        }

        const newMovie = {
            id: Date.now(),
            name: movie,
            rating: rating
        };

        setMovies([...movies, newMovie]);
        setMovie("");
        setRating("");
    };

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    return (
        <div className="watchlist">
            <h1>Movie Watchlist</h1>

            <input
                type="text"
                placeholder="Enter movie name"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
            />

            <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button onClick={addMovie}>Add Movie</button>

            <div className="movie-list">
                {movies.map(movie => (
                    <div className="movie-card" key={movie.id}>
                        <h3>{movie.name}</h3>
                        <p>Rating: {movie.rating}/5</p>

                        <button onClick={() => removeMovie(movie.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieWatchlist;