import React from 'react';

import './styles/normolize.css';
import './styles/react-transition-group.css';
import './styles/fonts.css'
import './styles/buttons.css'
import './styles/App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom";
import GreetingMessage from './components/popUpMessage/GreetingMessage';
import { useCustomHeaderScroll, useSizeDeviceMain } from './hooks/castomHooks'
import FormWrite from './components/common/FormWrite.tsx';



function App() {
  useCustomHeaderScroll(["header", ".ipad__aside", ".ipad__main"])  // делает динамически изменяющийся header
  useSizeDeviceMain() // устанавливает в redux тип ширины дисплея, нужен для изменения html main эдемента 
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />

      {/* <GreetingMessage /> */}
      <FormWrite />
    </div>

  );
}

export default App;
