import { Redirect, Route, Switch } from "react-router-dom";
import { Schedule } from "../game/Schedule/Schedule";
import { LeagueOverview } from "../league/LeagueOverview/LeagueOverview";
import { TeamOverview } from "../team/TeamOverview/TeamOverview";
import { TeamStatsProvider } from "../league/LeagueOverview/teamStatsService";
import { NavBar } from "./Navbar/Navbar";

function App() {
  return (
    <div className='App'>
      <h3>NCAA Football</h3>
      <NavBar />
      <Switch>
        <Route path='/schedule'>
          <Schedule />
        </Route>
        <Route path='/league'>
          <TeamStatsProvider>
            <LeagueOverview />
          </TeamStatsProvider>
        </Route>
        <Route path='/teams'>
          <TeamOverview />
        </Route>
        <Redirect to='league' />
      </Switch>
    </div>
  );
}

export default App;
