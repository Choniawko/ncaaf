import { FC, useRef } from "react";
import { useVirtual } from "react-virtual";
import * as S from "./ConferenceRow.style";

interface Props {
  conferences: string[];
  currentConf: string;
  setCurrentConf: (name: string) => void;
}
export const ConferenceRow: FC<Props> = ({ conferences, setCurrentConf, currentConf }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const columnVirtualizer = useVirtual({
    horizontal: true,
    size: conferences.length,
    parentRef,
  });
  return (
    <S.Container ref={parentRef}>
      <S.List role='list' width={`${columnVirtualizer.totalSize + 20 * conferences.length}px`}>
        {columnVirtualizer.virtualItems.map((virtualColumn) => {
          return (
            <S.ListItem
              role='listitem'
              key={virtualColumn.index}
              ref={virtualColumn.measureRef}
              transform={`translateX(${virtualColumn.start + 20 * virtualColumn.index}px)`}
              isCurrentConf={currentConf === conferences[virtualColumn.index]}
              onClick={() => setCurrentConf(conferences[virtualColumn.index])}
            >
              {conferences[virtualColumn.index]}
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Container>
  );
};
