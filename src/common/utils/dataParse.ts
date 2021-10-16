export interface Grouped<T> {
  [key: string]: T[];
}
export type GroupBy<T> = (key: string) => (arr: T[]) => Grouped<T>;

interface dataObj {
  [key: string]: any;
}

export const groupBy: GroupBy<dataObj> = (key) => (arr) =>
  arr.reduce(
    (acc, curr) => ({
      ...acc,
      [curr[key]]: (acc[curr[key]] || []).concat(curr),
    }),
    {} as Grouped<dataObj>,
  );
