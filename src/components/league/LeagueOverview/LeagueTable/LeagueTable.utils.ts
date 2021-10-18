import { Team } from "../../league";

export const getTableData = (teams: Team[]) =>
  teams.map(
    ({
      Name,
      TeamLogoUrl,
      ConferenceWins,
      ConferenceLosses,
      Wins,
      Losses,
      HomeWins,
      HomeLosses,
      Streak,
    }: any) => ({
      team: Name,
      TeamLogoUrl,
      conf: `${ConferenceWins} - ${ConferenceLosses}`,
      overall: `${Wins} - ${Losses}`,
      home: `${HomeWins} - ${HomeLosses}`,
      away: `${Wins - HomeWins} - ${Losses - HomeLosses}`,
      strk: Streak,
    }),
  ) || [];

export const columns = ["Team", "Conf", "Overall", "Home", "Away", "Strk"].map((name) => ({
  Header: name,
  accessor: name.toLowerCase(),
}));
