import React from 'react';
import style from './Settings.module.sass'
import settingGeneral from './images/settings-general.png'
import vacationManager from './images/vacation-manager.png'
import arrow from './images/Arrow.png'

const Settings = () => {
    return (
        <div className={style.settings}>
            <h2>Settings</h2>
            <div>
                <div className={style['settings__item']}>
                    <img src={settingGeneral} alt="setting-general" width='20' height='20'/>
                    <span className={style['settings__text']}>General</span>
                </div>
                <div className={style['settings__item']}>
                    <img src={vacationManager} alt="setting-general" width='20' height='20'/>
                    <span className={[style['settings__text'], style['settings__text--active']].join(' ')}>Vacation Manager</span>
                </div>
            </div>
            <ul className={style['settings__subitems']}>
                <li>
                    <span className={style['text']}>Leave Types</span>
                </li>
                <li className={style['cell--active']}>
                    <span className={[style['text'], style['text--active']].join(' ')}>Locations</span>
                </li>
            </ul>
            <div className={style.arrow}>
                <img src={arrow} alt="arrow" width='12px' height='10px'/>
            </div>
        </div>
    );
};

export default Settings;