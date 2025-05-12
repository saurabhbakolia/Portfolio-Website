import { FaMusic, FaFilm, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="w-full py-4 text-center bg-gray-900 text-gray-100">
            <p className="text-gray-500 text-xs font-normal flex items-center justify-center gap-2">
                🎶 <FaMusic className="text-red-400 cursor-pointer" onClick={() => navigate("/favourites")} />
                Curious about my favorites? Check out my top picks in music & movies!
                <FaFilm className="text-blue-400 cursor-pointer" onClick={() => navigate("/favourites")} />
                <FaHeart className="text-pink-400 cursor-pointer" onClick={() => navigate("/favourites")} />
            </p>
        </footer>
    );
};

export default Footer;
