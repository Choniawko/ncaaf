import { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "../../../common/services/api";
import { groupBy, Grouped } from "../../../common/utils/dataParse";
import { ConferenceRow } from "../ConferenceRow/ConferenceRow";
import { Conference, TeamStatsItem } from "../league";
import { LeagueTable } from "../LeagueTable/LeagueTable";
import * as S from "./LeagueOverview.styles";
import { PROP_TO_GROUP } from "./LeagueOverview.utils";
import { useTeamStatsService } from "./teamStatsService";

const groupByConf = groupBy(PROP_TO_GROUP);

export const LeagueOverview = () => {
  const { setTeamStats } = useTeamStatsService();
  const [currentConf, setCurrentConf] = useState("");
  const { data: conferences, isLoading: conferencesIsLoading } = useQuery<Conference[]>(
    "LeagueHierarchy",
    () => fetchData("/LeagueHierarchy"),
    {
      onSuccess: ([first]) => {
        setCurrentConf(first.ConferenceName);
      },
    },
  );
  const { data: teamSeasonStats, isLoading: teamsIsLoading } = useQuery<TeamStatsItem[]>(
    "TeamSeasonStats",
    () => fetchData(`/TeamSeasonStats/${2021}`),
    {
      onSuccess: setTeamStats,
    },
  );

  const groupedConferences = useMemo(
    () => (groupByConf(conferences || []) as Grouped<any>) || {},
    [conferences],
  );

  if (conferencesIsLoading || teamsIsLoading) return <div>Loading...</div>;
  return conferences && teamSeasonStats ? (
    <S.Container>
      {Object.keys(groupedConferences).length && (
        <ConferenceRow
          conferences={Object.keys(groupedConferences)}
          {...{ currentConf, setCurrentConf }}
        />
      )}
      <S.TableContainer>
        {groupedConferences[currentConf].map((conference: Conference) => {
          return (
            <S.RegionContainer key={conference.ConferenceID}>
              <div>{conference.Name}</div>
              <LeagueTable teams={conference.Teams} />
            </S.RegionContainer>
          );
        })}
      </S.TableContainer>
    </S.Container>
  ) : null;
};
