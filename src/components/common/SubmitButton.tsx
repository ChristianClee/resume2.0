import React from 'react';
import style from './styles/SubmitButton.module.css'
import { FormFetching } from './utilits/submit'
import { selectForm } from '../../redux/formSlice'
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/redux'


const SubmitButton: React.FC = () => {
  const { email, message, name, phone } = useSelector(selectForm)
  const { resetInputData } = useActions()
  const obj = { email, message, name, phone }


  return (
    <button
      className={`${style.buttonSubmit} ${"item__button"}`}
      onClick={(e) => {
        e.preventDefault()
        FormFetching.postDataMessage(e, obj)
        if (FormFetching.isEmpty(obj)) resetInputData() // reset all params
      }}
    >
      submit
    </button>
  );
}
export default SubmitButton;