import { useLayoutEffect, useEffect } from "react"
import { size, sizeName } from '../constants/const'
import { useSelector } from 'react-redux';
import { selectResume } from '../redux/resumeSlice'
import { useActions } from '../hooks/redux'


export function useCustomHeaderScroll(quaryParam: string[]) {
  console.log(quaryParam)
  
  function getScrollHeader() {
    const items: (Element|null)[] = []
    quaryParam.forEach((item) => {
      const queryItem = document.querySelector(item)
      items.push(queryItem)
    })
    let scroll = 0
    return () => {
      window.onscroll = (e) => {
        if (window.scrollY > scroll) {
          items.map(item => item?.classList.add("active"))
          scroll = window.scrollY
        } else {
          items.map(item => item?.classList.remove("active"))
          scroll = window.scrollY
        }
      }
    }
  }
    useLayoutEffect(() => {
    
      getScrollHeader()()
      return () => getScrollHeader()()
  }, [])
}

export function useSizeDeviceMain() {
  const { currentSize } = useSelector(selectResume)
  const { changeSize } = useActions()
  function resize() {
    const windowWidth = window.innerWidth
    switch (true) {
      case size.desktop < windowWidth:
        if (currentSize !== sizeName.DESKTOP) {
          changeSize(sizeName.DESKTOP)
        }
        break

      case size.ipad < windowWidth:
        if (currentSize !== sizeName.IPAD) {
          changeSize(sizeName.IPAD)
        }
        break

      default:
        if (currentSize !== sizeName.IPHONE) {
          changeSize(sizeName.IPHONE)
        }
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [currentSize])
}

type TuggleForm = React.RefObject<HTMLDivElement> | null
type TuggleFormFunc = (formRef: TuggleForm, ariaRef: TuggleForm, inputRef: TuggleForm, textAriaActive: string, inputFormActive: string) => void

export const useTuggleForm: TuggleFormFunc = (formRef, ariaRef, inputRef, textAriaActive, inputFormActive) => {
  const { writeFormState } = useSelector(selectResume)
  
  useEffect(() => {
    const _formRef = formRef?.current
    const _ariaRef = ariaRef?.current
    const _inputRef = inputRef?.current
      
    if (_formRef && _ariaRef && _inputRef) {  // check TS
      if (writeFormState) {                   // check redux
        _formRef.style.display = ""
        setTimeout(() => {
          _ariaRef.classList.add(textAriaActive)
          _inputRef.classList.add(inputFormActive)
        }, 30)
      } else {
        _ariaRef.classList.remove(textAriaActive)
        _inputRef.classList.remove(inputFormActive)
        setTimeout(() => {
          _formRef.style.display = "none"
        },530)
      }
    }
    
  }, [writeFormState])
}