import { FC } from "react";
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
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("renders App Header", () => {
  render(<App />, { wrapper });
  const headerEl = screen.getByText(/ncaa football/i);
  expect(headerEl).toBeInTheDocument();
});
