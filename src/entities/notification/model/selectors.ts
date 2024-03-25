export const selectNotification = (state: RootState) =>
  state.notificationReducer;

export const fetchNotificationAction = (payload?: any) => {
  return { type: 'FETCH_NOTIFICATIONS', payload };
};

export const updateNotificationAction = (payload?: any) => {
  return { type: 'UPDATE_NOTIFICATIONS', payload };
};
