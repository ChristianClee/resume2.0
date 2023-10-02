import React from 'react';
import photo from "../../assets/img/jpg/myPhoto.jpg"
import style from './styles/PhotoElem.module.css'

const PhotoElem:React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.photo}>
        <img className={style.ibg} src={photo} alt="" />
      </div>
    </div>
    
  );
}
export default PhotoElem;