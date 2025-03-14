import React from "react";
import ReactPaginate from "react-paginate";

const Paginations = ({ onPageChange, pageCount }) => {
  return (
    <div className="my-5">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next "}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default Paginations;
