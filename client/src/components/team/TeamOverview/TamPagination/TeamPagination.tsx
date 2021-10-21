import { FC } from "react";

interface Props {
  page: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
  setPage: (el: number) => void;
}

export const TeamPagination: FC<Props> = ({ page, totalPages, prevPage, nextPage, setPage }) => {
  return (
    <div>
      <p className='text'>
        {page}/{totalPages}
      </p>
      <button onClick={prevPage} className={`page ${page === 1 && "disabled"}`}>
        &larr;
      </button>
      {Array.from({ length: totalPages }).map((_, el) => (
        <button
          onClick={() => setPage(el + 1)}
          key={el}
          className={`page ${page === el + 1 ? "active" : ""}`}
        >
          {el + 1}
        </button>
      ))}
      <button onClick={nextPage} className={`page ${page === totalPages && "disabled"}`}>
        &rarr;
      </button>
    </div>
  );
};
