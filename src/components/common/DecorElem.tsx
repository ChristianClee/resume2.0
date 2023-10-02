import React from 'react';
import style from './styles/DecorElem.module.css'

const DecorElem: React.FC<{children:React.ReactNode,text:string}> = ({children, text}) => {
  return (
    <div className={style.name}>
      <h4>{text}</h4>
      <span className={style.decor}></span>
      <div className={style.icon}>
        <div className={style.img}>{children}</div>
      </div>
    </div>
  );
}
export default DecorElem;