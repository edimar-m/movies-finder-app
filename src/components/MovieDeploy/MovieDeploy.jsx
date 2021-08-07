import { Card, Col, Button  } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./MovieDeploy.sass";

const MovieDeploy = (props) => {
  const { url } = props;
  const { results } = url;

  if (results === undefined) {
    return <Loading />;
  }
  return (
    <section className="cards-section">
      {results.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
};

const { Meta } = Card;
const MovieCard =  ({ movie: { id, title, poster_path } }) => {
 
  let backdropPath;

  if (poster_path === null) {
    backdropPath =
    "https://img.freepik.com/foto-gratis/interior-sala-cine-sillas_23-2147807425.jpg?size=626&ext=jpg";
  } else {
    backdropPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  }
  return (
    <Col lg={6} >
      <Link to={`/movie/${id}`}>
      <Card                     
            style={{ width: 240, margin: 10}}
            className="movie-card"                
            cover={<img
              alt={title}
              src={backdropPath}
              className="img-card"
            />
          }>
            <Meta 
                    title={title} 
                    className= "metaCard"
                    style={{textAlign: "center"}}
                    description={
                    <Link to={`/movie/${id}`}>
                        <Button className="btn-plus"><i class="far fa-plus-square"></i></Button>
                     </Link>}                    
                />                 
        </Card>    
      </Link>
    </Col>
  );
};

export default MovieDeploy;