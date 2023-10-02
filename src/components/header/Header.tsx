import React from 'react';
import { useActions } from "../../hooks/redux"
import { useSelector } from 'react-redux';
import { selectResume } from '../../redux/resumeSlice'
import BurgerElement from '../common/BurgerElement';
import FormWrite from '../common/FormWrite.tsx';
import WritingItSelf from '../common/WritingItSelf';



const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderContainer />
      <HeaderMenu />
    </header>
  );
}
export default Header;


const HeaderContainer: React.FC = () => {
  const { changeBurgerState } = useActions()
  const { burgerState } = useSelector(selectResume)
  return (
    <div className="header__container">
      <div className="header__body">
        <BurgerElement state={burgerState} func={changeBurgerState} />
      </div>
    </div>
  );
}


const HeaderMenu: React.FC = () => {
  const { burgerState } = useSelector(selectResume)
  const { changeFormState } = useActions()





  return (
    <nav className={burgerState ? "header__menu active" : "header__menu"}>
      <div className="header__disigns">
        <div className='header__disigns-elem'>
          <WritingItSelf text={"Check out these buttons"} size={2} />
        </div>
        
      </div>
      
      <div className="header__links">
        <div
          className="header__link"
          onClick={() => changeFormState()}
        >
          write me</div>
        <div className="header__link">certifications</div>
        <div className="header__link">my portfolio</div>
      </div>
      <div className="header__socials">
        <div className="header__social"></div>
      </div>
    </nav>
  );
}
