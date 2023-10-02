import React from 'react';
import style from './styles/ContactElement.module.css'

const ContactElement: React.FC<{ children: React.ReactNode, text:string }> = ({children, text}) => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        {children}
      </div>
      <div className={style.text}>{text}</div>
    </div>
    
  );
}
export default ContactElement;