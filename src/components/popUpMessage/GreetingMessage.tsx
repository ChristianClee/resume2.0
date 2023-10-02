import React from 'react';
import "./GreetingMessage.css"
import { CSSTransition, Transition } from 'react-transition-group'
import BurgerElement from '../common/BurgerElement';
import { selectResume } from '../../redux/resumeSlice';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/redux'


const GreetingMessage: React.FC = () => {
  const { greetingMessage } = useSelector(selectResume)
  // эту структуру нужно исправить, она очень мвссивная и сложная для всплывающего окна

  return (
    <Transition
      in={greetingMessage}
      timeout={1500}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <div className='greetingPopUp'>
        <CSSTransition
          in={greetingMessage}
          timeout={1500}
          classNames="greetingPopUp"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <GreetingMessageBody />
        </CSSTransition>
      </div>
    </Transition>
  );
}
export default GreetingMessage;



const GreetingMessageBody: React.FC = () => {
  const { greetingMessage } = useSelector(selectResume)
  const { closeGreetingMessage } = useActions()
  return (
    <div className="greetingPopUp__massage-body">
      <div className='greetingPopUp__burger-box'>
        <BurgerElement state={greetingMessage} func={closeGreetingMessage} />
      </div>
      <div className="greetingPopUp__box">
        <div className="greetingPopUp__text">
          <h3 className="greetingPopUp__title">
            Привет
          </h3>
          <p className="greetingPopUp__paragraph">
            Это мое резюме
          </p>
          <p className="greetingPopUp__paragraph">
            Знакомство займет не более 1 минуты
          </p>
          <p className="greetingPopUp__paragraph">
            Для подробного рассмотра кликай по ссылкам
          </p>
        </div>
      </div>
    </div>
  );
}
