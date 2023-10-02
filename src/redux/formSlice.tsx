import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'





export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveName(state, active:PayloadAction<string>) {
      state.name = active.payload
    },
    saveEmail(state, active:PayloadAction<string>) {
      state.email = active.payload
    },
    savePhone(state, active: PayloadAction<string>) {
      if (!!Number(active.payload) || active.payload === "") {
        state.phone = active.payload
      }
    },
    saveMessage(state, active:PayloadAction<string>) {
      state.message = active.payload
    },
    resetInputData(state) {
      state.name = ""
      state.email = ""
      state.phone = ""
      state.message = ""
    },
  },
})


export const { actions, reducer } = formSlice
export const selectForm = (state: RootState) => state.form // export initialState<FormState>