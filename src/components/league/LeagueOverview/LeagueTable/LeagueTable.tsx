import { FC } from "react";
import { useTable } from "react-table";
import { Team } from "../../league";
import { useTeamStatsService } from "../teamStatsService";
import * as S from "./LeagueTable.style";
import { columns, getTableData } from "./LeagueTable.utils";

interface Props {
  teams: Team[];
}
export const LeagueTable: FC<Props> = ({ teams }) => {
  const { getTeamStatsById } = useTeamStatsService();
  const teamsWithStats = teams.map((team) => ({
    ...team,
    ...getTeamStatsById(team.TeamID),
  }));

  const { getTableProps, rows, headerGroups, prepareRow } = useTable({
    columns: columns as any,
    data: getTableData(teamsWithStats),
  });

  return (
    <S.Container>
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
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td {...cell.getCellProps()}>
                      <div style={{ minHeight: "35px", display: "flex", alignItems: "center" }}>
                        {index === 0 && (
                          <span style={{ marginRight: "10px" }}>
                            <img src={row.original.TeamLogoUrl} alt='' style={{ width: "30px" }} />
                          </span>
                        )}
                        {cell.render("Cell")}
                      </div>
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
