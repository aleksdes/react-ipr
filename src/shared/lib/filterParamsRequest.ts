export const filterParamsRequest = (params: {
  [key: string]: any;
}): { [key: string]: any } => {
  return Object.keys(params).reduce((acc: { [key: string]: any }, curr) => {
    if (!curr) return acc;
    if (params[curr] !== null && params[curr] !== undefined) {
      acc[curr] = params[curr];
    }
    return acc;
  }, {});
};
