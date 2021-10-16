export interface Team {
  Active: boolean;
  Conference: string;
  ConferenceWins: number;
  ConferenceLosses: number;
  ConferenceID: number;
  GlobalTeamID: number;
  Key: number;
  Losses: number;
  Name: string;
  School: string;
  ShortDisplayName: string;
  StadiumID: number;
  TeamID: number;
  TeamLogoUrl: string;
  Wins: number;
}

export interface TeamStatsItem {
  GlobalTeamID: number;
  TeamID: number;
  HomeWins: number;
  HomeLosses: number;
  Wins: number;
  Losses: number;
  Streak: number;
}

export interface Conference {
  ConferenceID: number;
  ConferenceName: string;
  DivisionName: string;
  Name: string;
  Teams: Team[];
}
