import React from 'react';
import style from './styles/InfoElemet.module.css'


const InfoElemet: React.FC<{ children: React.ReactNode, text: string }> = ({ children, text }) => {
  return (
    <div className={style.infoContainer}>
      <div className={style.img}>
        {children}
      </div>
      <p>{text}</p>
    </div>
  )
}
export default InfoElemet;