import React from 'react';
import style from "./styles/DecorElemText.module.css"

const DecorElemText: React.FC<{ children: string }> = ({children}) => {
  return (
    <div className={style.container}>
      <h3>{children}</h3>
    </div>
  );
}
export default DecorElemText;