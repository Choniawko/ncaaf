import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const Table = styled.section`
  display: table;
  border-spacing: 0;
  border: 1px solid black;
`;
export const THead = styled.header`
  display: table-header-group;
  &:last-child {
    border-bottom: 1px solid black;
  }
`;
export const TBody = styled.div`
  display: table-row-group;
`;

const Row = styled.div`
  display: table-row;
`;
export const THRow = styled(Row)``;
export const TRow = styled(Row)`
  &:last-child {
    div {
      border-bottom: 0;
    }
  }
`;
export const Cell = styled.div`
  display: table-cell;
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  &:last-child {
    border-right: 0;
  }
`;
export const Td = styled(Cell)``;
export const Th = styled(Cell)`
  font-weight: bold;
`;
