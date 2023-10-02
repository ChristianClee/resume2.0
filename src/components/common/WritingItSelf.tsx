import React from 'react';
import style from './styles/WritingItSelf.module.css'

const WritingItSelf: React.FC<{ text: string, size: number }> = ({ text, size }) => {
  const incscript: string = size === 2 ? style.writingInscript : style.writingInscriptLittle
  const container: string = size === 2 ? style.container : style.containerLittle

  return (

    <div className={container}>
      <div className={style.writing}>
        <h2 className={incscript }>{text}</h2> 
      </div>
    </div>
    
    
    
  );
}
export default WritingItSelf;