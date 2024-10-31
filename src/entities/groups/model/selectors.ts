export const selectGroups = (state: RootState) => state.groupsReducer;

export const fetchJoinedGroupsAction = (payload?: any) => {
  return { type: 'FETCH_JOINED_GROUPS', payload };
};

export const fetchJoinedGroupsCountAction = (payload?: any) => {
  return { type: 'FETCH_JOINED_COUNT_GROUPS', payload };
};

export const fetchRecommendedGroupsAction = (payload?: any) => {
  return { type: 'FETCH_RECOMMENDED_GROUPS', payload };
};

export const joinGroupAction = (payload?: any) => {
  return { type: 'JOIN_GROUP', payload };
};

export const leaveGroupAction = (payload?: any) => {
  return { type: 'LEAVE_GROUP', payload };
};
