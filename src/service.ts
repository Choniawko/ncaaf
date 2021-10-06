import { headers } from "./common/utils/api";

export const getLeagueHierarchy = () => {
  return fetch("/LeagueHierarchy", {
    method: "GET",
    headers,
  }).then((response) => response.json());
};

export const getGamesByWeek = ({ season, week }: { season: number; week: number }) => {
  return fetch(`/GamesByWeek/${season}/${week}`, {
    method: "GET",
    headers,
  }).then((response) => response.json());
};

export const getSchedules = ({ season }: { season: number }) => {
  return fetch(`/Games/${season}`, {
    method: "GET",
    headers,
  }).then((response) => response.json());
};
