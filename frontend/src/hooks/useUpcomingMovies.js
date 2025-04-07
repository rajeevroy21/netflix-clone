import { useSetRecoilState } from "recoil";
import { upcomingMoviesState } from "../../recoil/movieState";
import axios from "axios";
import { options, Upcoming_Movie } from "../../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const setUpcomingMovies = useSetRecoilState(upcomingMoviesState);

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const res = await axios.get(Upcoming_Movie, options);
                setUpcomingMovies(res.data.results);
               // console.log("upcoming movies",res.data.results);
            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        fetchUpcomingMovies();
    }, [setUpcomingMovies]);
};

export default useUpcomingMovies;