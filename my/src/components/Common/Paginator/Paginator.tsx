import s from "./Paginator.module.css";
import React, { useState, useEffect } from "react";
import cn from "classnames";

type PropsType = {
  totalItemsCount:number
  pageSize:number
  currentPage: number
  onPageChanged: (pageNumber:number)=>void
  portionSize?: number
}


const Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages:Array<number> = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(
    Math.floor(currentPage / 10) + 1
  );

  // при уходе со страницы юзеров на другую и при повторном
  // возвращении на неё, пагинация подгоняется под текущую страницу юзеров, которая записана в userReducer
  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage, portionSize]
  );

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p, i) => {
          return (
            <span
              className={cn(
                { [s.selectedPage]: currentPage === p },
                s.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
