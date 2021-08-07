import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../utils/constants";
import MovieDeploy from "../components/MovieDeploy";
import Pagination from "../components/Pagination";
import Loading from '../components/Loading';

const NewMovies = () => {
  const [url, setUrl] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/now_playing?api_key=${API_KEY}&languaje=en-ES&page=${page}`
      );
      const movies = await response.json();
      setUrl(movies);
    })();
  }, [page]);

  const onChangePage = (page) => setPage(page);

  return (
    <>
      <div style={{ minHeight: "calc(100vh)" }}>
        <h1 style={{fontZise: 35, fontWeigth: "bold"}}>New Movies</h1>
        <div>
          {url.results ? 
              <MovieDeploy url={url} /> 
              : <Loading />}
        <Pagination
          currentPage={url.page}
          totalItems={url.total_results}
          onChangePage={onChangePage}
        />
        </div>
      </div>
    </>
  );
};

export default NewMovies;