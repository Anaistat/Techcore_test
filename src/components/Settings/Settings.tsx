import React from 'react';
import style from './Settings.module.sass'
import settingGeneral from './images/settings-general.png'
import vacationManager from './images/vacation-manager.png'
import arrow from './images/Arrow.png'

const Settings = () => {
    return (
        <div className={style.settings}>
            <p>Settings</p>
            <div>
                <div className={style['settings__item']}>
                    <img src={settingGeneral} alt="setting-general" width='20' height='20'/>
                    <span>General</span>
                </div>
                <div className={style['settings__item']}>
                    <img src={vacationManager} alt="setting-general" width='20' height='20'/>
                    <span className={style['active-text']}>Vacation Manager</span>
                </div>
            </div>
            <div className={style['settings__subitems']}>
                <span className={style['subitems-text']}>Leave Types</span>
                <span className={style['subitems-text']}>Locations</span>
            </div>
            <div className={style.arrow}>
                <img src={arrow} alt="arrow" width='12px' height='10px'/>
            </div>
        </div>
    );
};

export default Settings;