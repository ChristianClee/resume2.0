import React from 'react';
import style from './styles/InputElement.module.css'
import { labelName } from '../../constants/const'
import { ReactComponent as PersonSVG } from "../../assets/img/svg/person.svg"
import { ReactComponent as EmailSVG } from "../../assets/img/svg/envelope.svg"
import { ReactComponent as PhoneSVG } from "../../assets/img/svg/phone.svg"

// 
type InputElementT = {
  label: string,
  value: string,
  func: (arg:string)=>void,
}

const InputElement: React.FC<InputElementT> = ({ label, value, func }) => {
  function onchange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    func(e.currentTarget.value)
  }

  return (
    <div className={style.container}>
      <textarea
        className={style.inputInput}
        required
        value={value}
        onChange={(e) => onchange(e)}
      >
      </textarea>

      <label>{label}</label>
      {
        label === labelName.NAME ?
          <PersonSVG className={style.icon} />
          :
          label === labelName.IMAIL
          ?
          <EmailSVG className={style.icon} />
          :
          <PhoneSVG className={style.icon} />
      }
      
    </div>
  )
  
}

export default InputElement;