import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";
import { PaginationProps } from "../../types";
import "./paginate.scss";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (
    currentPage === 0 ||
    (paginationRange !== undefined && paginationRange.length < 2)
  ) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage =
    paginationRange !== undefined &&
    paginationRange[paginationRange.length - 1];
  return (
    <ul className={"pagination-container"}>
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow-container">
          <div className="arrow left" />
        </div>
      </li>

      {paginationRange !== undefined &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item dots" key={index}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(Number(pageNumber))}
              key={index}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow-container">
          <div className="arrow right" />
        </div>
      </li>
    </ul>
  );
};

export default Pagination;
