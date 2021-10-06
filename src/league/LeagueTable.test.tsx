import { render, screen, waitFor } from "@testing-library/react";
import { LeagueTable } from "./LeagueTable";
import { QueryClient, QueryClientProvider } from "react-query";
import { FC } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
test("renders table", () => {
  render(<LeagueTable />, { wrapper });
  const table = screen.getAllByRole("table");
  expect(table[0]).toBeInTheDocument();
});

test("renders table row", async () => {
  const { debug } = render(<LeagueTable />, { wrapper });
  const th = await waitFor(() => screen.getByText(/American Athletic - East/));
  debug(th);
  expect(th).toBeInTheDocument();
});
