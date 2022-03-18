import axios from "axios";

export const movieData = () => {
  return (dispatch) => {
    axios
      .get("http://www.omdbapi.com/?i=tt3896198&apikey=69a7e501")
      .then((res) => {
        console.log("res", res);
        dispatch({ type: "GETMOVIE", payload: res });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
