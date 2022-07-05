import React from 'react';
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import style from './VacationManager.module.sass'
import Button from "../../ui/Button/Button";
import Card from "./Cards/Card";
import profile1 from './Cards/images/profile1.png'
import profile2 from './Cards/images/profile2.png'
import profile3 from './Cards/images/profile3.png'

const VacationManagerPage = () => {

    const users = [profile1, profile2, profile3, profile2, profile3, profile1, profile1, profile2, profile3, profile1, profile1, profile2, profile3]
    const users1 = [profile1, profile2, profile3, profile2, profile3]
    const users2 = [profile1, profile2, profile3, profile2, profile3, profile3, profile2]

    return (
        <div className={style['vacation-manager']}>
            <BreadCrumbs/>
            <div className={style.location}>
                <h1 className={style['location__header']}>Locations</h1>
                <p className={style['location__description']}>Create new users or update the existing users. You can then set their permissions here too. </p>
                <div className={style['location__create-button']}>
                    <Button className='blue' text='Create Location' disabled={false}/>
                </div>
            </div>
            <div className={style['vacation-manager__cards']}>
                <Card country='Australia' users={users}/>
                <Card country='Belarus' users={users1}/>
                <Card country='USA' users={users2}/>
            </div>
        </div>
    );
};

export default VacationManagerPage;