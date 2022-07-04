import React from 'react';
import style from './App.module.sass';
import Menu from "./components/Menu/Menu";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className={style.App}>
      <Menu/>
        <Settings/>
    </div>
  );
}

export default App;
