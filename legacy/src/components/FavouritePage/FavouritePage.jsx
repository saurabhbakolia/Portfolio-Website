import { useState, useEffect } from 'react';
import { FaSpotify, FaFilm } from "react-icons/fa";
import { motion } from "framer-motion";

const FavouritePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // List of your favorite movie IMDb IDs
    const favoriteMovieIds = [
        'tt1375666', // Inception
        'tt0816692', // Interstellar
        'tt0468569', // The Dark Knight
        'tt0111161', // The Shawshank Redemption
        'tt2582802', // Whiplash
    ];

    // Your favorite songs' Spotify track IDs
    const favoriteSongs = [
        {
            id: '4cOdK2wGLETKBW3PvgPWqT', // Never Gonna Give You Up
            title: 'Never Gonna Give You Up',
            artist: 'Rick Astley'
        },
        {
            id: '5HCyWlXZPP2NIs6NsCkBwWv', // Bohemian Rhapsody
            title: 'Bohemian Rhapsody',
            artist: 'Queen'
        },
        {
            id: '7qiZfU4dY1lWllzX7mPBI3', // Shape of You
            title: 'Shape of You',
            artist: 'Ed Sheeran'
        },
        {
            id: '1mea3bSkSGXuIRvnydlB5b', // Dynamite
            title: 'Dynamite',
            artist: 'BTS'
        },
        {
            id: '5tz69p7tJuGPeMGwNTxYuV', // Stay
            title: 'Stay',
            artist: 'The Kid LAROI & Justin Bieber'
        }
    ];

    // Fetch Movie Details
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviePromises = favoriteMovieIds.map(id =>
                    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`)
                        .then(res => res.json())
                );
                const movieData = await Promise.all(moviePromises);
                setMovies(movieData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching movie data:', error);
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex justify-center items-center">
                <div className="text-2xl">Loading your entertainment corner...</div>
            </div>
        );
    }

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center p-6"
        >
            <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            >
                My Entertainment Corner
            </motion.h1>

            {/* Music Section */}
            <motion.section
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-6xl mb-16"
            >
                <div className="flex items-center gap-3 mb-8">
                    <FaSpotify className="text-green-400 text-3xl" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
                        Music That Moves Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {favoriteSongs.map((song) => (
                        <div key={song.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src={`https://open.spotify.com/embed/track/${song.id}`}
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="encrypted-media"
                                loading="lazy"
                                className="w-full"
                            ></iframe>
                            <div className="p-3">
                                <h3 className="text-sm font-semibold truncate">{song.title}</h3>
                                <p className="text-gray-400 text-xs">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Movies Section */}
            <motion.section
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-6xl"
            >
                <div className="flex items-center gap-3 mb-8">
                    <FaFilm className="text-blue-400 text-3xl" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                        Movies That Inspire Me
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {movies.map((movie) => (
                        <motion.div
                            key={movie.imdbID}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-3">
                                <h3 className="text-lg font-semibold mb-2 truncate">{movie.Title}</h3>
                                <p className="text-gray-400 text-xs mb-1">Director: {movie.Director}</p>
                                <p className="text-gray-400 text-xs mb-1">Year: {movie.Year}</p>
                                <p className="text-gray-400 text-xs mb-2 truncate">Genre: {movie.Genre}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400">⭐</span>
                                    <span className="text-sm">{movie.imdbRating}/10</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </motion.main>
    );
};

export default FavouritePage;
