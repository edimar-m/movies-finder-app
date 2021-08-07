import { Pagination } from "antd";
import "./Pagination.sass";

const MoviesPagination = (props) => {
  const { currentPage, totalItems, onChangePage } = props;
  return (
    <Pagination
      current={currentPage}
      total={totalItems}
      pageSize={20}
      onChange={onChangePage}
    />
  );
};

export default MoviesPagination;