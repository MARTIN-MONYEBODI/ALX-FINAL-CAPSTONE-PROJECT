const MovieCard = ({ movie }) => {
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
          alt={movie.Title}
        />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{movie.Title}</h3>
          <p className="text-gray-700 text-base">Released: {movie.Year}</p>
        </div>
      </div>
    );
  };
  
  export default MovieCard;