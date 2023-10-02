import React from 'react';
import style from './styles/SkillElement.module.css'


const SkillElement: React.FC<{ text: string; num:number }> = ({text, num}) => {
  return (
    <div className={style.container}>
      <div className={style.levels}>
        {
          Array(3).fill("").map((item, index) => {
            index += 1
            if (index <= num) {
              let active:string
              if (num === 3) {
                active = style.levelActiveRed
              } else if (num === 2) {
                active = style.levelActiveYellow
              } else {
                active = style.levelActiveGreen
              }
              return <span className={[style.level, active].join(" ")} key={text + index}></span>
            } else {
              return <span className={style.level} key={text + index}></span>
            }
          })
        }
      </div>

      <p className={style.name}>{text}</p>
    </div>
  );
}
export default SkillElement;