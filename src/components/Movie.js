import axios from "axios";
import React, { useEffect, useState } from "react";

const Movie = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then(res => {
        if (res) {
          setMoviesData(res.data.Search);
          setAllData(res.data.Search);
          setIsloading(false);
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {}, [moviesData]);
  useEffect(() => {
    const filter = allData.filter(item => {
      return item.Title.toLowerCase().includes(search?.trim().toLowerCase());
    });
    setMoviesData(filter);
  }, [search]);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="bg-primary text-center py-2 w-100">
        <h5 className="text-white">Movies List</h5>
      </div>
      <div
        style={{
          minHeight: "87.5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              {/* <span className="sr-only">Loading...</span> */}
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="search">
              <input
                type="text"
                placeholder="Search here..."
                className="text-primary"
                value={search}
                onChange={e => handleChange(e)}
              />
            </div>
            <div className="data py-3">
              {moviesData &&
                moviesData.length > 0 &&
                moviesData.map((item, ind) => (
                  <div className="cards" key={ind}>
                    {/* <div className="h2"> </div> */}
                    <h2>{item.Title}</h2>
                    <div className="poster">
                      <img
                        src={item.Poster}
                        alt="poster"
                        className="img-fluid"
                      />
                    </div>
                    <p>Year {item.Year}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      <footer className="bg-primary py-1 text-white">
        {" "}
        all rights are reserved
      </footer>
    </div>
  );
};

export default Movie;
