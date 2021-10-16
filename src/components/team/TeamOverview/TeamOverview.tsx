import { useQuery } from "react-query";
import { OrderList } from "primereact/orderlist";
import { Game } from "../../game/game";
import { fetchData } from "../../../common/services/api";

export const TeamOverview = () => {
  const { data: teams } = useQuery<Game[]>("teams", () => fetchData("/Teams"));
  return (
    <div>
      <OrderList
        value={teams || []}
        itemTemplate={({ Name, TeamLogoUrl }) => (
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div>
              <img src={TeamLogoUrl} alt='' style={{ width: "30px" }} />
            </div>
            <div>{Name}</div>
          </div>
        )}
        header='Teams'
        dataKey='TeamID'
      />
    </div>
  );
};
