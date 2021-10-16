import { FC } from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper: FC = ({ children }) => (
  <Router history={createMemoryHistory()}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </Router>
);

test("renders App Header", () => {
  render(<App />, { wrapper });
  const headerEl = screen.getByText(/ncaa football/i);
  expect(headerEl).toBeInTheDocument();
});
