import React, {useEffect, useState} from 'react';
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import style from './VacationManager.module.sass'
import Button from "../../ui/Button/Button";
import VacationCard from "./VacationCard/VacationCard";
import profile1 from './VacationCard/images/profile1.png'
import profile2 from './VacationCard/images/profile2.png'
import profile3 from './VacationCard/images/profile3.png'
import Modal from "../Modal/Modal";
import CreateLocation from "./CreateLocation/CreateLocation";
import {useDispatch, useSelector} from "react-redux";

const VacationManagerPage = () => {

    const users = [profile1, profile2, profile3, profile2, profile3, profile1, profile1, profile2, profile3, profile1, profile1, profile2, profile3]
    const users1 = [profile1, profile2, profile3, profile2, profile3]
    const users2 = [profile1, profile2, profile3, profile2, profile3, profile3, profile2]

    const dispatch = useDispatch()
    const vacation:any = useSelector<any>(state=>state.vacation)
    const addNewLocation = () => {
        dispatch({type: 'ADD_LOCATION', payload: ['Poland', 'false']})
        console.log(vacation)
    }


    const buttons = [<Button text='Cancel' color='grey' onClick={()=>setCreateLocation(false)}/>, <Button text='Create' color='blue' className={style['create-location']} onClick={addNewLocation}/>]

    const [createLocation, setCreateLocation] = useState<boolean>(false)

    return (
        <div className={style['vacation-manager']}>
            <BreadCrumbs/>
            <div className={style.location}>
                <h1 className={style['location__header']}>Locations</h1>
                <p className={style['location__description']}>Create new users or update the existing users. You can then set their permissions here too. </p>
                <div className={style['location__create-button']}>
                    <Button color='blue' text='Create Location' disabled={false} onClick={()=>setCreateLocation(true)}/>
                </div>
            </div>
            <div className={style['vacation-manager__cards']}>
                <VacationCard country='Australia' users={users} defaultCard={true}/>
                <VacationCard country='Belarus' users={users1} defaultCard={false}/>
                <VacationCard country='USA' users={users2} defaultCard={false}/>
            </div>
            {
                createLocation
                ?
                    <Modal title='Create Location' buttons={buttons} setVisible={setCreateLocation}>
                        <CreateLocation/>
                    </Modal>
                :
                    <></>
            }
        </div>
    );
};

export default VacationManagerPage;