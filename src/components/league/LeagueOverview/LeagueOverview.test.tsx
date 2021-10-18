import { FC } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { LeagueOverview } from "./LeagueOverview";
import { TeamStatsContext } from "./teamStatsService";
import { TeamStatsItem } from "../league";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const bookServiceMock = {
  getTeamStatsById: (teamId: number) => ({} as TeamStatsItem),
  setTeamStats: (teamStats: TeamStatsItem[]) => jest.fn(),
};
const wrapper: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <TeamStatsContext.Provider value={bookServiceMock}>{children}</TeamStatsContext.Provider>
  </QueryClientProvider>
);

describe("LeagueOverview", () => {
  test.only("renders conference row", async () => {
    render(<LeagueOverview />, { wrapper });
    const conferenceList = await waitFor(() => screen.getByRole("list"));
    expect(conferenceList).toBeInTheDocument();
  });
});
