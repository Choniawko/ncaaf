import { rest } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
  rest.get("/LeagueHierarchy", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          ConferenceID: 1,
          ConferenceName: "American Athletic",
          DivisionName: "East",
          Name: "American Athletic - East",
          Teams: [],
        },
      ]),
    );
  }),
);
