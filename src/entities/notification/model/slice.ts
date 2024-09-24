import { NotificationType } from '@/entities/notification';
import type { IBaseStore } from '@/shared/lib/baseStore';
import { baseReducers, baseStore } from '@/shared/lib/baseStore';

// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type NotificationState = IBaseStore<NotificationType> & {
  counter: number;
};

const initialState: NotificationState = {
  ...baseStore<NotificationType>(),
  counter: 0,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    ...baseReducers<NotificationType>(),

    updateCounter: (
      state: NotificationState,
      action: PayloadAction<number>
    ) => {
      state.counter = action.payload;
    },

    readNotification: (
      state: NotificationState,
      action: PayloadAction<NotificationType>
    ) => {
      const { id } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          ...action.payload,
        };
      }
    },
  },
});

export const notificationsActions = notificationSlice.actions;

export default notificationSlice.reducer;
