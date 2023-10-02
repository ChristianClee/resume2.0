import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { getSize } from './utilits'




export interface CounterState {
  burgerState: boolean;
  greetingMessage: boolean;
  currentSize: string;
  writeFormState: boolean;
  asideState: boolean;

}

const initialState: CounterState = {
  burgerState: false,
  greetingMessage: true,
  currentSize: getSize(),
  writeFormState: false,
  asideState: false,
}

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    changeBurgerState(state) {
      state.burgerState = !state.burgerState
    },
    closeGreetingMessage(state) {
      state.greetingMessage = false
    },
    changeSize(state, active: PayloadAction<string>) {
      state.currentSize = active.payload
    },
    changeFormState(state) {
      state.writeFormState = !state.writeFormState
    },
    changeAsideState(state) {
      state.asideState = !state.asideState
    }
  },
})


export const { actions, reducer } = resumeSlice
export const selectResume = (state: RootState) => state.resume