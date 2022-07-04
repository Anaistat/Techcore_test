import React from 'react'
import style from './Menu.module.sass'
import logo from './images/logo.png'
import dashboard from './images/dashboard.png'
import users from './images/users.png'
import settings from './images/settings.png'
import pl from './images/pl.png'
import vacation from './images/vacation.png'
import notification from './images/notfications.png'
import avatar from './images/Avatar.png'

const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style['menu__logo']}>
                <img src={logo} alt="logo" width='34' height='34'/>
            </div>
            <div className={style['menu__pages']}>
                <button>
                    <img src={dashboard} alt="dashboard" width='70' height='42'/>
                </button>
                <button>
                    <img src={users} alt="users" width='70' height='42'/>
                </button>
                <button>
                    <img src={settings} alt="settings" width='70' height='42'/>
                </button>
                <button>
                    <img src={pl} alt="pl" width='70' height='42'/>
                </button>
                <button>
                    <img src={vacation} alt="vacation" width='70' height='56'/>
                </button>
            </div>
            <div className={style['menu__user']}>
                <button className={style.notification}>
                    <img src={notification} alt="notification" width='16' height='16'/>
                </button>
                <button>
                    <img src={avatar} alt="avatar" width='34' height='34'/>
                </button>
            </div>
        </div>
    );
};

export default Menu;