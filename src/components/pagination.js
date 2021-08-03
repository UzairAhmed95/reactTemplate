import React from "react";

const Pagination = () => {
  return (
    <nav className="" aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            href="javascript:void(0);"
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item">
          <a href="javascript:void(0);" className="page-link">
            1
          </a>
        </li>
        <li className="page-item active">
          <a href="javascript:void(0);" className="page-link">
            2
          </a>
        </li>
        <li className="page-item">
          <a href="javascript:void(0);" className="page-link">
            3
          </a>
        </li>
        <li className="page-item">
          <a href="javascript:void(0);" className="page-link" aria-label="Next">
            <span aria-hidden="true">»</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
