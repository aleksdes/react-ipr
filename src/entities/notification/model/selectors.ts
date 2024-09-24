export const selectNotification = (state: RootState) =>
  state.notificationReducer;

export const fetchNotificationActionCounter = (payload?: any) => {
  return { type: 'FETCH_NOTIFICATIONS_COUNTER', payload };
};

export const fetchNotificationAction = (payload?: any) => {
  return { type: 'FETCH_NOTIFICATIONS', payload };
};

export const updateNotificationAction = (payload?: any) => {
  return { type: 'UPDATE_NOTIFICATIONS', payload };
};
