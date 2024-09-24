export const selectSessionUser = (state: RootState) => state.sessionUserReducer;

export const fetchSessionUserAction = (payload?: any) => {
  return { type: 'FETCH_SESSION_USER', payload };
};
export const fetchProfileInfoAction = (payload?: any) => {
  return { type: 'FETCH_PROFILE_INFO', payload };
};
