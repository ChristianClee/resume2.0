import React from 'react';


interface Iprops {
  state: boolean;
  func: () => void;
}

const BurgerElement: React.FC<Iprops> = ({state, func}) => {
  return (
    <div
        className={(state) ? "header__burger active" : "header__burger"}
        onClick={() => func()}
      >
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
  );
}
export default BurgerElement;