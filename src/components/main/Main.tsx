import React from 'react';
import MainIphone from './MainIphone';
import MainIpad from './MainIpad';
import MainDesktop from './MainDesktop';
import { selectResume } from "../../redux/resumeSlice"
import { useSelector } from 'react-redux';
import { sizeName } from '../../constants/const'



const Main: React.FC = () => {
  const { currentSize } = useSelector(selectResume)
  return (
    <main>
      {
        currentSize === sizeName.DESKTOP ?
            <MainDesktop/>
          // :
          // currentSize === sizeName.IPAD ?
          //   <MainIpad/>
          :
            <MainIphone/>
      }
      
    </main>
  );
}
export default Main;