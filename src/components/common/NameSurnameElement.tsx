import React from 'react';
import style from "./styles/NameSurnameElement.module.css"
import WritinItSelf from './WritingItSelf';


const NameSurnameElement: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.name}>Мишков Илья</h1>
      <WritinItSelf text={"Junior Frontend Developer"} size={1} />      
    </div>
  );
}
export default NameSurnameElement;


