import { useMemo } from 'react'
import { useDispatch} from 'react-redux'
import type { AppDispatch } from '../redux/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as resumeAction} from '../redux/resumeSlice'
import { actions as formAction} from '../redux/formSlice'
export const useAppDispatch: () => AppDispatch = useDispatch


  const rootActions = {
  ...resumeAction, ...formAction
}


export const useActions = () => {
  // useActions это специальная утилита, которая позволяет упростить порядок вызова dispatch в теле функций
  const dispatch = useAppDispatch()
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch )
  ,[dispatch])
}
