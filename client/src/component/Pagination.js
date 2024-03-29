import Pagination from "react-bootstrap/Pagination";

export const PaginationPage = ({
  pages = 10,
  active = 1,
  handleOnPaginationClick,
}) => {
  let items = [];
  for (let number = 1; number <= pages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleOnPaginationClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  );
};
