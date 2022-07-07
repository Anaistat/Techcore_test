import React from 'react';
import style from './BreadCrumbs.module.sass'
import settings from '../Menu/images/settings.png'
import arrow from './images/Down.png'

const BreadCrumbs = () => {
    return (
        <div>
            <ul className={style['bread-crumbs']}>
                <li className={style['bread-crumbs__pages']}>
                    <img src={settings} alt="settings" width='14' height='14' className={style['setting-icon']}/>
                    <a href='#' className={style['page-link']}>Settings</a>
                    <img src={arrow} alt="arrow" width='13' height='13' className={style['arrow-icon']}/>
                </li>
                <li className={style['bread-crumbs__pages']}>
                    <a href='#' className={style['page-link']}>Vacation Manager</a>
                </li>
            </ul>
        </div>
    );
};

export default BreadCrumbs;