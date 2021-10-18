import { useHistory } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { useEffect, useState } from "react";

const items = [
  { label: "League", path: "/league", icon: "pi pi-fw pi-home" },
  { label: "Schedule", path: "/schedule", icon: "pi pi-fw pi-calendar" },
  { label: "Teams", path: "/teams", icon: "pi pi-fw pi-user" },
];

export const NavBar = () => {
  const {
    push,
    location: { pathname },
  } = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(items.findIndex(({ path }) => path === pathname) || 0);
  }, [pathname]);
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
