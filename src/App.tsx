import React from 'react';
import style from './App.module.sass';
import Menu from "./components/Menu/Menu";
import Settings from "./components/Settings/Settings";
import VacationManagerPage from "./components/Vacation Manager Page/VacationManagerPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className={style.App}>
        <Menu/>
        <Routes>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/settings/vacation' element={<><Settings/><VacationManagerPage/></>}/>
        </Routes>
    </div>
  );
}

export default App;
