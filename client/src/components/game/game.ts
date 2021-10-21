export interface Game {
  GameID: number;
  Season: number;
  Week: number;
  Status: string;
  HomeTeamName: string;
  AwayTeamName: string;
  AwayTeamScore: number;
  HomeTeamScore: number;
  GameEndDateTime: Date;
  GlobalAwayTeamID: number;
  GlobalHomeTeamID: number;
  [key: string | number]: any;
}
