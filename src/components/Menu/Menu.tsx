import React from 'react'
import style from './Menu.module.sass'
import logo from './images/logo.png'
import dashboard from './images/dashboard.png'
import users from './images/users.png'
import settings from './images/settings.png'
import pl from './images/pl.png'
import vacation from './images/vacation.png'
import notification from './images/notification.png'
import avatar from './images/Avatar.png'

const Menu = () => {
    return (
        <aside className={style.menu}>
            <div className={style['menu__logo']}>
                <img src={logo} alt="logo" width='34' height='34'/>
            </div>
            <ul className={style['menu__pages']}>
                <li>
                    <button>
                        <img src={dashboard} alt="dashboard" width='20' height='20'/>
                        <p className={style['menu__text']}>Dashboard</p>
                    </button>
                </li>
                <li>
                    <button>
                        <img src={users} alt="users" width='20' height='20'/>
                        <p className={style['menu__text']}>Users</p>
                    </button>
                </li>
                <li>
                    <button>
                        <img src={settings} alt="settings" width='20' height='20'/>
                        <p className={[style['menu__text'], style['menu__text--active']].join(' ')}>Settings</p>
                    </button>
                </li>
                <li>
                    <button>
                        <img src={pl} alt="pl" width='20' height='20'/>
                        <p className={style['menu__text']}>P&L</p>
                    </button>
                </li>
                <li>
                    <button>
                        <img src={vacation} alt="vacation" width='20' height='20'/>
                        <p className={style['menu__text']}>Vacation<br/>Manager</p>
                    </button>
                </li>
            </ul>
            <div className={style['menu__user']}>
                <button className={style.notification}>
                    <img src={notification} alt="notification" width='12' height='14.5'/>
                    <div className={style['notification__circle']}></div>
                </button>
                <button>
                    <img src={avatar} alt="avatar" width='34' height='34'/>
                </button>
            </div>
        </aside>
    );
};

export default Menu;