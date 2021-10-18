import { useState } from "react";

interface Props {
  perPage: number;
  count: number;
}

export const usePagination = ({ perPage, count }: Props) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / perPage);
  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };
  const setPageSafe = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSafe,
    firstIndex,
    lastIndex,
    page,
  };
};
