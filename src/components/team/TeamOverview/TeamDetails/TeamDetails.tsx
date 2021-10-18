import { FC } from "react";
import { Team } from "../../Team";
import * as S from "./TeamDetails.style";

interface Props {
  team: Team;
}
export const TeamDetails: FC<Props> = ({ team: { TeamID, TeamLogoUrl, Name } }) => {
  return (
    <S.Container key={TeamID}>
      <div>
        <img src={TeamLogoUrl} alt='' style={{ width: "30px" }} />
      </div>
      <div>{Name}</div>
    </S.Container>
  );
};
