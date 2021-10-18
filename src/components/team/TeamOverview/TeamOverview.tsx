import { useQuery } from "react-query";
import { Team } from "../Team";
import { fetchData } from "common/services/api";
import { usePagination } from "./usePagination";
import { TeamDetails } from "./TeamDetails/TeamDetails";
import { TeamPagination } from "./TamPagination/TeamPagination";

export const TeamOverview = () => {
  const { data: teams, isLoading } = useQuery<Team[]>("teams", () => fetchData("/Teams"));
  const { totalPages, nextPage, prevPage, setPage, firstIndex, lastIndex, page } = usePagination({
    perPage: 10,
    count: teams?.length || 0,
  });
  if (isLoading) return <div>Loading...</div>;
  return teams ? (
    <div>
      <div style={{ height: "350px" }}>
        {teams?.slice(firstIndex, lastIndex).map((team) => (
          <TeamDetails key={team.TeamID} {...{ team }} />
        ))}
        <TeamPagination {...{ totalPages, nextPage, prevPage, setPage, page }} />
      </div>
    </div>
  ) : null;
};
