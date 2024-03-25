import { NotificationType } from '@/entities/notification';

// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IBaseStore } from 'shared/lib/baseStore';
import { baseReducers, baseStore } from 'shared/lib/baseStore';

export type NotificationState = IBaseStore<NotificationType>;

const initialState: NotificationState = {
  ...baseStore<NotificationType>(),
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    ...baseReducers<NotificationType>(),

    readNotification: (state, action: PayloadAction<NotificationType>) => {
      const findItem =
        state.items.find(
          (el: NotificationType) => el.id === action.payload.id
        ) || null;
      console.log('findItem', findItem);
      if (!findItem) return;
    },
  },
});

export const notificationsActions = notificationSlice.actions;

export default notificationSlice.reducer;
