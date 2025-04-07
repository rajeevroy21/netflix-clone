import { useSetRecoilState } from "recoil";
import { topRatedMoviesState } from "../../recoil/movieState";
import { options, Top_Rated_Movie } from "../../utils/constant";
import { useEffect } from "react";
import axios from "axios";

const useTopRatedMovies = () => {
    const setTopRatedMovies = useSetRecoilState(topRatedMoviesState);
    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const res = await axios.get(Top_Rated_Movie, options);
                setTopRatedMovies(res.data.results);
              //  console.log("toprated movies",res.data.results);
            } catch (error) {
                console.error("Error fetching top-rated movies:", error);
            }
        };
        fetchTopRatedMovies();
    }, [setTopRatedMovies]);
};

export default useTopRatedMovies;