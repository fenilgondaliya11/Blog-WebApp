import React from "react";
import { useGlobalContext } from "../Context/AuthContext";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();

  return (
    <div className="pagination-container">
      <div className="pagination-btns" style={{textAlign: "center"}}>
        <button className="btnp" onClick={() => getPrevPage()} disabled={page === 0}>
          PREV
        </button>
        <p className="text-light">
          {page + 1} of {nbPages}
        </p>
        <button className="btnp" onClick={() => getNextPage()} disabled={page === nbPages - 1}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Pagination;