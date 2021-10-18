import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e6e4dc;
  max-width: 100%;
  height: 50px;
  overflow: auto;
`;

export const List: any = styled.div`
  height: 100%;
  position: relative;
  width: ${({ width }: any) => width};
`;

export const ListItem: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: ${(props: any) => props.transform};
  font-weight: ${(props: any) => (props.isCurrentConf ? "bold" : "normal")};
`;
