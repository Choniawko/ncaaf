import { useState } from "react";
import { TeamStatsItem } from "../league";

export const useTeamStats = () => {
  const [teamStats, setTeamStats] = useState<TeamStatsItem[]>([]);
  return {
    setTeamStats: (teamStats: TeamStatsItem[]) => {
      setTeamStats(teamStats);
    },
    getTeamStatsById: (teamId: number) => {
      return teamStats.find((stats) => stats.TeamID === teamId) || ({} as TeamStatsItem);
    },
  };
};
