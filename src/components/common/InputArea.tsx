import React from 'react';
import style from './styles/InputArea.module.css'

type funcT = (arg: string) => void

const InputArea: React.FC<{ value: string, func: funcT }> = ({ value, func }) => {
  function onchange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    func(e.currentTarget.value)
  }

  return (
    <div className={style.container}>
      <textarea
        id="textarea"
        className={style.inputInput}
        required
        value={value}
        onChange={(e) => onchange(e)}
      >
      </textarea>
      <label htmlFor='textarea'>your message</label>
    </div>
  );
}
export default InputArea;