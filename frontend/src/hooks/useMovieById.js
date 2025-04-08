
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { trailerMovieState } from "../../recoil/movieState";
import { options } from "../../utils/constant";

const useMovieById = async(movieId) => {
  const setTrailermovie = useSetRecoilState(trailerMovieState);
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);

        console.log("my name is ",res.data.results);
        const trailer = res?.data?.results?.find((item) => item.type === "Teaser");
        setTrailermovie(trailer.length>0?trailer[0]:res.data.results[1]);
      //  console.log("my name is ",trailer[0]);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };
    getMovieById();
  }, [movieId, setTrailermovie]);
};

export default useMovieById;
