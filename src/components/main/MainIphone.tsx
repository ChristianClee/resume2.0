import React from 'react';
import style from './MainIpad.module.css';

import DecorElem from '../common/DecorElem';
import DecorElemText from '../common/DecorElemText';
import { ReactComponent as BookSVG } from '../../assets/img/svg/book.svg'
import { ReactComponent as TelegramSVG } from '../../assets/img/svg/telegram.svg'
import { ReactComponent as EnvelopeSVG } from '../../assets/img/svg/envelope.svg'
import { ReactComponent as PhoneSVG } from '../../assets/img/svg/phone.svg'
import { ReactComponent as CapSVG } from '../../assets/img/svg/graduation.svg'
import { ReactComponent as GearSVG } from '../../assets/img/svg/gear.svg'
import { ReactComponent as CertificationSVG } from '../../assets/img/svg/certification.svg'
import { ReactComponent as PersonSVG } from '../../assets/img/svg/person2.svg'
import { ReactComponent as PlaceSVG } from "../../assets/img/svg/place.svg"
import { ReactComponent as InfoSVG } from "../../assets/img/svg/info.svg"
import { ReactComponent as OfficeBagSVG } from "../../assets/img/svg/officeBag.svg"
import ContactElement from '../common/ContactElement';
import SkillElement from '../common/SkillElement';
import PhotoElem from '../common/PhotoElem';
import NameSurnameElement from '../common/NameSurnameElement';
import InfoElemet from '../common/InfoElemet';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/redux';
import { selectResume } from '../../redux/resumeSlice'


const MainDesktop: React.FC = () => {


  return (
    <div className={style.container}>
      <Aside />
      <Center />
    </div>
  );
}
export default MainDesktop;



const Aside: React.FC = () => {
  const { changeAsideState } = useActions()
  const { asideState } = useSelector(selectResume)
  const active: string = ['ipad__aside', "active"].join(" ")
  const click: string = ['ipad__aside', "click"].join(" ")
  return (

    <div
      className={asideState ? click : 'ipad__aside'}
    >
      <div
        className={style.asideBtn}
        onClick={() => changeAsideState()}
      >
        <p className={style.asideInscript}>SCILLS</p>
      </div>

      <div className={style.asideContainerLittle}>
        <div className={style.shortContainer}>
          <InfoElemet text={'г. Москва, м Селигерская'}><PlaceSVG /></InfoElemet>
          <InfoElemet text={'возраст, 31'}><InfoSVG /></InfoElemet>
          <InfoElemet text={'офис/удаленно'}><OfficeBagSVG /></InfoElemet>
        </div>
        <section className={style.language}>
          <DecorElemText>Languages</DecorElemText>
          <div className={style.bigContainer}>
            <SkillElement text={'Английский, B1-B2'} num={2} />
          </div>
        </section>

        <section className={style.scills}>
          <DecorElemText>Skills</DecorElemText>
          <div className={style.shortContainer}>
            <SkillElement text={'TypeScript'} num={3} />
            <SkillElement text={'JavaScript'} num={3} />
            <SkillElement text={'React JS'} num={3} />
            <SkillElement text={'Redux Toolkit'} num={3} />
            <SkillElement text={'HTML, CSS'} num={3} />
            <SkillElement text={'Unit Tests (Jest)'} num={2} />
            <SkillElement text={'Git'} num={2} />
            <SkillElement text={'Figma'} num={2} />
            <SkillElement text={'SCSS'} num={2} />
            <SkillElement text={'npm'} num={2} />
            <SkillElement text={'Photoshop'} num={1} />
            <SkillElement text={'Bootstrap'} num={1} />
            <SkillElement text={'PostgreSQL'} num={1} />
            <SkillElement text={'PHP'} num={1} />
            <SkillElement text={'Node JS'} num={1} />
            <SkillElement text={'Python'} num={1} />
          </div>

        </section>
      </div>


    </div>
  );
}

const Center: React.FC = () => {
  return (
    <div className="ipad__main">

      <section>
        <div className={style.shortContainer}>
          <div className={style.shortContainer2}>
            <PhotoElem />
            <NameSurnameElement />
          </div>
        </div>

        <div className={style.bigContainer}>
          <DecorElem text={"Контакты"}><GearSVG /></DecorElem>
          <ContactElement text={"8-977-439-34-18"}><PhoneSVG /></ContactElement>
          <ContactElement text={"ilya.mishkov@gmail.com"}><EnvelopeSVG /></ContactElement>
          <ContactElement text={"@IlyaMishkov"}><TelegramSVG /></ContactElement>
        </div>
      </section>

      <section className={style.experience}>
        <div className={style.shortContainer}>
          <DecorElem text={"Опыт работы"}><GearSVG /></DecorElem>
          <div className={style.dateContainer}>
            <p className={style.date}>2022.08 - нв</p>
            <div className={style.dateContent}>
              <h3 className={style.dateTitle}>Freelance</h3>
              <p>Основной стек - React/Redux Toolkit</p>
              <p>Получаю заказы на сайтах:  WorkZilla, FreelanceJob, Upwork. в мою работу входит:</p>
              <ul className={style.job__column}>
                <li>Разработка Frontend-проектов с нуля</li>
                <li>Проектирование пользовательских интерфейсов</li>
                <li>Кросбраузерная и адаптивная вёрстка</li>
                <li>Создание CSS анимаций</li>
                <li>Перенос лендингов на React JS</li>
                <li>Работа с асинхронные запросы REST API, обрабатываю ошибки</li>
                <li>Тестирование ответственных частей приложений, написание тестов</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={style.shortContainer}>
          <DecorElem text={"Курсы"}><CertificationSVG /></DecorElem>
          <div className={style.dateContainer}>
            <p className={style.date}>2022.08</p>
            <div className={style.dateContent}>
              <h3 className={style.dateTitle}>FreeCodeCamp</h3>
              <p>JavaScript Algorithms and Data Structures / 300 hours of work</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={style.shortContainer}>
          <DecorElem text={"Education"}><CapSVG /></DecorElem>
          <div className={style.dateContainer}>
            <p className={style.date}>2014</p>
            <div className={style.dateContent}>
              <h3 className={style.dateTitle}>Брянский Гос Университет</h3>
              <p>Инженер проектирования защитных сооружений </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={style.shortContainer}>
          <DecorElem text={"Abot me"}><PersonSVG /></DecorElem>
          <div className={style.dateContainer}>
            <p>
              Имею год опыта неприрывной Frontend разработки
              За плечами накопленный опыт проектов, начиная от одностраничных лендингов
              и заканчивая frontend частью интернет магазинов. Хочу попасть в опытную
              команду разработчиков
            </p>
          </div>
        </div>
      </section>
    </div>



  )
}