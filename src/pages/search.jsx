import { useState, useEffect } from "react";
import { URL_API, API_KEY } from "../utils/constants";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MovieDeploy from "../components/MovieDeploy";
import Pagination from "../components/Pagination";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API_KEY}&languaje=en-ES&query=${searchValue}&page=${page}&include_adult=false`
      );
      const movies = await response.json();
      setUrl(movies);
    })();
  }, [page, searchValue]);

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onChangePage = (e) => setPage(e);

  //Estilos de la sección búsqueda
  const stylesContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const stylesInput = {
    width: '60%',
    borderRadius: '10px',
    color:'#001529',
    border: '10px',
    fontSize: '1.5rem'
  };

  return (
    <>
      <div style={stylesContainer}>
          <h1>Movie Finder</h1>
          <Input
            onKeyUp={onChangeInput}
            placeholder ="Type here the movie you want to know about"
            prefix={<SearchOutlined />}
            style={stylesInput}
          />
          <div>
            <div> 
              <MovieDeploy url={url} /> 
            </div>
            <Pagination
              currentPage={url.page}
              totalItems={url.total_results}
              onChangePage={onChangePage}
              pageSize={20}
            />
        </div>
      </div>
    </>
  );
};

export default Search;