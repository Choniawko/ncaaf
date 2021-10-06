import { FC, useRef } from "react";
import { useVirtual } from "react-virtual";
import { Conference } from "../league";
import * as S from "./ConferenceRow.styles";

interface Props {
  conferences: Conference[];
  currentConf: number;
  setCurrentConf: (index: number) => void;
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
      <S.List width={`${columnVirtualizer.totalSize + 20 * conferences.length}px`}>
        {columnVirtualizer.virtualItems.map((virtualColumn) => {
          return (
            <S.ListItem
              key={virtualColumn.index}
              ref={virtualColumn.measureRef}
              transform={`translateX(${virtualColumn.start + 20 * virtualColumn.index}px)`}
              isCurrentConf={currentConf === virtualColumn.index}
              onClick={() => setCurrentConf(virtualColumn.index)}
            >
              {conferences[virtualColumn.index].Name}
            </S.ListItem>
          );
        })}
      </S.List>
    </S.Container>
  );
};
