import { FC, useState } from "react";
import { useQuery } from "react-query";
import { useTable } from "react-table";
import { getLeagueHierarchy } from "../service";
import { Conference } from "./league";
import { ConferenceRow } from "./ConferenceRow/ConferenceRow";
import * as S from "./LeagueTable.styles";

const columns = ["Team", "Conf", "Overall", "Home", "Away", "Strk"].map((name) => ({
  Header: name,
  accessor: name.toLowerCase(),
}));

interface Props {}
export const LeagueTable: FC<Props> = () => {
  const { data: conferences } = useQuery<Conference[]>("LeagueHierarchy", getLeagueHierarchy);
  const [currentConf, setCurrentConf] = useState(0);

  const { getTableProps, rows, headerGroups, prepareRow } = useTable({
    columns: columns as any,
    data:
      (conferences &&
        conferences[currentConf].Teams.map(
          ({ Name, TeamLogoUrl, ConferenceWins, ConferenceLosses, Wins, Losses }) => ({
            team: Name,
            TeamLogoUrl,
            conf: `${ConferenceWins} - ${ConferenceLosses}`,
            overall: `${Wins} - ${Losses}`,
          }),
        )) ||
      [],
  });
  return (
    <S.Container>
      <ConferenceRow conferences={conferences || []} {...{ currentConf, setCurrentConf }} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            console.log(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {index === 0 && (
                        <span>
                          <img src={row.original.TeamLogoUrl} alt='' style={{ width: "30px" }} />
                        </span>
                      )}
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Container>
  );
};
