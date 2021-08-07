import { Button, Avatar, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import "./MovieList.sass";

const ListMovies = (props) => {
  const { title, dataMovies } = props;

  if (dataMovies.Loading || !dataMovies.result) {
    return <Loading />;
  }
  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={dataMovies.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
};

const RenderMovie = (props) => {
  const {
    movie: { poster_path, id, title },
  } = props;

  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}> {title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<PlusOutlined />}/>
      </Link>
    </List.Item>
  );
};

export default ListMovies;