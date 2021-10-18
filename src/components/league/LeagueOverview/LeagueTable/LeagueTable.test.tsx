import { render, screen } from "@testing-library/react";
import { LeagueTable } from "./LeagueTable";
import { QueryClient, QueryClientProvider } from "react-query";
import { FC } from "react";
import { Team, TeamStatsItem } from "../../league";
import { TeamStatsContext } from "../teamStatsService";

const bookServiceMock = {
  getTeamStatsById: (teamId: number) => ({} as TeamStatsItem),
  setTeamStats: (teamStats: TeamStatsItem[]) => jest.fn(),
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <TeamStatsContext.Provider value={bookServiceMock}>{children}</TeamStatsContext.Provider>
  </QueryClientProvider>
);
test("renders table", () => {
  const teams = [] as Team[];
  render(<LeagueTable {...{ teams }} />, { wrapper });
  const [first] = screen.getAllByRole("table");
  expect(first).toBeInTheDocument();
});

it("renders table row", () => {
  const teams = [
    {
      Active: true,
      Conference: "American Athletic - East",
      ConferenceWins: 2,
      ConferenceLosses: 3,
      ConferenceID: 102,
      GlobalTeamID: 10002,
      Key: 12345,
      Losses: 3,
      Name: "Team Name",
      School: "School Name",
      ShortDisplayName: "Name",
      StadiumID: 1223,
      TeamID: 1242,
      TeamLogoUrl: "logo.png",
      Wins: 2,
    },
  ];
  render(<LeagueTable {...{ teams }} />, { wrapper });
  const td = screen.getByText(/Team Name/);
  expect(td).toBeInTheDocument();
});
