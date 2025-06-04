import { configureStore } from '@reduxjs/toolkit'

import userReducer from '@/store/reducers/UserReducer'
import globalReducer from '@/store/reducers/globalReducer'

export const store = configureStore({
  reducer: {
    userReducer,
    globalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store;