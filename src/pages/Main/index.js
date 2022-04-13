import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import './styles.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default function App() {
  const itemsPerPage = 2;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="App">
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo"
        onPageChange={handlePageClick}
        previousLabel
        pageRangeDisplayed={2}
        pageCount={15}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}

        containerClassName="container-class-name"
        pageClassName="page-class-name"
        pageLinkClassName="page-link-class-name"
        activeLinkClassName="active-link-class-name"
        previousClassName='previous-class-name'
        nextClassName='next-class-name'
        breakClassName='break-class-name'
      />
    </div>
  );
}