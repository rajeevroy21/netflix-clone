import { useSetRecoilState } from "recoil";
import { popularMovieState } from "../../recoil/movieState";
import { useEffect } from "react";
import { options, Popular_Movie } from "../../utils/constant";
import axios from "axios";

const usePopularMovies = () => {
    const setPopularMovies = useSetRecoilState(popularMovieState);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const res = await axios.get(Popular_Movie, options);
                setPopularMovies(res.data.results);
               // console.log("popular movies",res.data.results);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        fetchPopularMovies();
    }, [setPopularMovies]);
};

export default usePopularMovies;