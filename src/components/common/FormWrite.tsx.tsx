import React, { useRef } from 'react';
import style from "./styles/FormWrite.module.css"

import { selectResume } from "../../redux/resumeSlice"
import { selectForm } from "../../redux/formSlice"
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/redux'

import { useTuggleForm } from "../../hooks/castomHooks"
import { labelName } from '../../constants/const' 

import InputArea from './InputArea';
import InputElement from './InputElement';
import BurgerElement from './BurgerElement';

import { ReactComponent as Css3SVG } from "../../assets/img/svg/css3.svg"
import { ReactComponent as JsSVG } from "../../assets/img/svg/js.svg"
import { ReactComponent as ReactSVG } from "../../assets/img/svg/react.svg"
import { ReactComponent as InterfaceSVG } from "../../assets/img/svg/interface.svg"
import SubmitButton from './SubmitButton';



const FormWrite: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null)
  const ariaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLDivElement>(null)


  useTuggleForm(formRef, ariaRef, inputRef, style.textAriaActive, style.inputFormActive) // open writing form

  return (
    <div ref={formRef} className={style.fone}>
      <form className={style.container}>
        <MessagePart reff={ariaRef} />
        <InputPart reff={inputRef} />
      </form>
    </div>
  );
}
export default FormWrite;


const MessagePart: React.FC<{ reff: React.RefObject<HTMLDivElement> }> = ({ reff }) => {
  const { message } = useSelector(selectForm)
  const { saveMessage } = useActions()
  return (
    <div ref={reff} className={style.textAria}>
      <InputArea value={message} func={saveMessage} />
      <SubmitButton/>
      <div className={style.containerImeges}>
        <Css3SVG className={style.imeges} />
        <JsSVG className={style.imeges} />
        <ReactSVG className={style.imeges} />
        <InterfaceSVG className={style.imeges} />
      </div>
    </div>
  );
}


const InputPart: React.FC<{ reff: React.RefObject<HTMLDivElement> }> = ({ reff }) => {
  const { changeFormState, saveEmail, saveName, savePhone } = useActions()
  const { writeFormState } = useSelector(selectResume)
  const { email, name, phone } = useSelector(selectForm)


  return (
    <div ref={reff} className={style.inputForm}>
      <div className={style.burgerBox}>
        <BurgerElement state={writeFormState} func={changeFormState} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.inputInscript}>
          <p className={ `${style.title} ${"item__button"}`}>
            write me
          </p>
          <p className={style.subtitle}>
            Новые проекты, freelance, просто общение
          </p>
        </div>
        <div className={style.inputContainer}>
          <InputElement label={labelName.NAME} value={name} func={saveName} />
          <InputElement label={labelName.IMAIL} value={email} func={saveEmail} />
          <InputElement label={labelName.PHONE} value={phone} func={savePhone } />
        </div>
      </div>
    </div>
  )
}








