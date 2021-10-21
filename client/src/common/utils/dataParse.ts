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

export const sortBy = (prop: string) => (arr: dataObj[]) =>
  [...arr]
    .map((el) => (el[prop] ? el : { ...el, [prop]: 26 }))
    .sort((a, b) => {
      if (a[prop] > b[prop]) return 1;
      if (a[prop] < b[prop]) return -1;
      return 0;
    });
