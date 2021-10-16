import React, { createContext, useContext, FC } from "react";
import { TeamStatsItem } from "../league";
import { useTeamStats } from "./useTeamStats";

export interface TeamStatsService {
  getTeamStatsById: (teamId: number) => TeamStatsItem;
  setTeamStats: (teamStats: TeamStatsItem[]) => void;
}

export const TeamStatsContext = createContext<TeamStatsService>({} as TeamStatsService);

export const TeamStatsProvider: FC = (props) => {
  return (
    <TeamStatsContext.Provider value={useTeamStats()}>{props.children}</TeamStatsContext.Provider>
  );
};
export const useTeamStatsService = () => {
  return useContext(TeamStatsContext);
};
