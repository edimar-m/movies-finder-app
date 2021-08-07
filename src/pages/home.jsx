import useFetch from "../hooks/useFetch";
import { URL_API, API_KEY } from "../utils/constants";
import { Row, Col } from "antd";

import SliderMovies from "../components/SliderMovies";
import MovieList from "../components/MovieList";

const Home = () => {
  const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`;

  const urlPopular = `${URL_API}/movie/popular?api_key=${API_KEY}&language=en-ES&page=1`;

  const urlTopRated = `${URL_API}/movie/top_rated?api_key=${API_KEY}&language=en-ES&page=1`;
  const newMovies = useFetch(url);
  const popularMovies = useFetch(urlPopular);
  const topRatedMovies = useFetch(urlTopRated);

  return (
    <div>
      <SliderMovies newMovies={newMovies} />
      <Row style={{marginBottom:'80px'}}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <MovieList title="Popular Movies" dataMovies={popularMovies} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <MovieList title="Top Rated Movies" dataMovies={topRatedMovies} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;