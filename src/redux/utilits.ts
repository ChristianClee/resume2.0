import { size, sizeName } from '../constants/const'

export function getSize() {
  const windowWidth = window.innerWidth
  switch (true) {
    case size.desktop < windowWidth:
      return sizeName.DESKTOP
    case size.ipad < windowWidth:
      return sizeName.IPAD
    default:
      return sizeName.IPHONE
  }
}