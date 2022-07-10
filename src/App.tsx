import React from 'react';
import style from './App.module.sass';
import Menu from "./components/Menu/Menu";
import Settings from "./components/Settings/Settings";
import VacationManagerPage from "./components/Vacation Manager Page/VacationManagerPage";

function App() {
  return (
    <div className={style.App}>
        <Menu/>
        <Settings/>
        <VacationManagerPage/>
    </div>
  );
}

export default App;
