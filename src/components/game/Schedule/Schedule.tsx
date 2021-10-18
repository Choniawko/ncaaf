import { useQuery } from "react-query";
import { Card } from "primereact/card";
import { format } from "date-fns";
import { Game } from "../game";
import { groupBy } from "common/utils/dataParse";
import { fetchData } from "common/services/api";
import * as S from "./Schedule.style";
import { DATE_FORMAT, PROP_TO_GROUP, SEASON } from "./Schedule.utils";

const groupByWeek = groupBy(PROP_TO_GROUP);

export const Schedule = () => {
  const { data: games } = useQuery<Game[]>("games", () => fetchData(`/Games/${SEASON}`));
  return games ? (
    <div>
      {Object.entries(groupByWeek(games)).map(([week, games]) => (
        <div key={week}>
          <div>
            <div>Week: {week}</div>
          </div>
          {games.map(
            ({
              GameID,
              HomeTeamName,
              AwayTeamName,
              HomeTeamScore,
              AwayTeamScore,
              Status,
              GameEndDateTime,
            }) => (
              <Card key={GameID}>
                <S.Container>
                  <div>
                    <p>
                      {HomeTeamName}: {HomeTeamScore}
                    </p>
                    <p>
                      {AwayTeamName}: {AwayTeamScore}
                    </p>
                  </div>
                  <div>
                    <p>{Status}</p>
                    <p>{format(new Date(GameEndDateTime), DATE_FORMAT)}</p>
                  </div>
                </S.Container>
              </Card>
            ),
          )}
        </div>
      ))}
    </div>
  ) : null;
};
