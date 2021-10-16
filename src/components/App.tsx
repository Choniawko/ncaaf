import { Redirect, Route, Switch, useHistory } from "react-router-dom";
// import "./App.css";
import { Schedule } from "./game/Schedule/Schedule";
import { LeagueOverview } from "./league/LeagueOverview/LeagueOverview";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";
import { TeamOverview } from "./team/TeamOverview/TeamOverview";
import { TeamStatsProvider } from "./league/LeagueOverview/teamStatsService";

export const NavBar = () => {
  const { push } = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    { label: "League", path: "/league", icon: "pi pi-fw pi-home" },
    { label: "Schedule", path: "/schedule", icon: "pi pi-fw pi-calendar" },
    { label: "Teams", path: "/teams", icon: "pi pi-fw pi-user" },
  ];
  return (
    <TabMenu
      model={items}
      activeIndex={activeIndex}
      onTabChange={(e) => {
        setActiveIndex(e.index);
        push(items[e.index].path);
      }}
    />
  );
};

export const Routes = () => (
  <>
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
  </>
);

function App() {
  return (
    <div className='App'>
      <h3>NCAA Football</h3>
      <Routes />
    </div>
  );
}

export default App;
