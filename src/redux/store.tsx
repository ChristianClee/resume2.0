import { configureStore } from '@reduxjs/toolkit'
import { reducer as  resumeReduser }from "./resumeSlice"
import { reducer as  formReduser }from "./formSlice"

export const store = configureStore({
  reducer: {
    resume: resumeReduser,
    form: formReduser,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch