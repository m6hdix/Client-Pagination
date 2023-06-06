import React from "react";

const Pagination = ({ pages, setPage, activePage }) => {
  const handlePrevClick = () => {
    if (activePage > 1) {
      setPage(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < pages) {
      setPage(activePage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="join">
        <button className="join-item btn" onClick={handlePrevClick}>
          &laquo;
        </button>
        <div className="join-item btn-group">
          {Array.from(Array(pages), (e, i) => {
            return (
              <button
                key={i}
                type="button"
                className={`btn ${
                  activePage === i + 1 ? "btn-primary" : "btn-square"
                } `}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
        <button className="join-item btn" onClick={handleNextClick}>
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
