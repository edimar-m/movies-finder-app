import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../utils/constants";
import MovieDeploy from "../components/MovieDeploy";
import Pagination from "../components/Pagination";
import Loading from '../components/Loading';

const Popular = () => {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/popular?api_key=${API_KEY}&languaje=en-US&page=${page}`
      );
      const movies = await response.json();
      setUrl(movies);
    })();
  }, [page]);

  const onChangePage = (page) => setPage(page);

  return (
    <>
      <div style={{ minHeight: "75vh", textAlign: "center" }}>
        <h1 style={{fontZise: '2rem', fontWeigth: "bold"}}>Popular Movies</h1>
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

export default Popular;