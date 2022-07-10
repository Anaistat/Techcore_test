import React, {FC, useEffect, useState} from 'react';
import style from './More.module.sass'
import edit from './images/edit.png'
import defaultCard from './images/default.png'
import deleteCardImg from './images/delete.png'
import Modal from "../../Modal/Modal";
import warning from './images/warning.png'
import Button from "../../../ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";

interface MoreProps{
    open: boolean
    setIsOpen: (open:boolean)=>void
    country: string
}

const More:FC<MoreProps> = ({open, country, setIsOpen}) => {

    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false)
    const dispatch = useDispatch()
    const deleteCard = () =>{
        dispatch({type: 'DELETE_CARD', payload: {location: country}})
    }
    const makeDefault = () =>{
        dispatch({type: 'MAKE_DEFAULT', payload: {location: country}})
    }
    const buttons = [<Button text='Yes, Delete' color='red-outline' onClick={deleteCard}/>]

    return (
        <div className={style.more} style={{
            display: open?'block':'none'
        }}>
            <ul className={style['actions']}>
                <li className={style['actions__action']}>
                    <img src={edit} alt="edit" width='13' height='13'/>
                    <span className={style['actions-text']}>Edit</span>
                </li>
                <li className={[style['actions__action'], style['actions__action--middle']].join(' ')} onClick={makeDefault}>
                    <img src={defaultCard} alt="default" width='13' height='13'/>
                    <span className={style['actions-text']}>Set as Default</span>
                </li>
                <li className={style['actions__action']} onClick={()=> setIsDeleteModal(true)}>
                    <img src={deleteCardImg} alt="delete" width='13' height='13'/>
                    <span className={style['actions-text']}>Delete</span>
                </li>
            </ul>
            {
                isDeleteModal?
                    <Modal title='Delete Location' buttons={buttons} setVisible={setIsDeleteModal}>
                        <p className={style['warn-text']}>Are you sure uou want to delete {`"${country}"`} Location?</p>
                        <div className={style['warn-info']}>
                            <img src={warning} alt="warning" width='16' height='16'/>
                            <p className={[style['warn-text'], style['warn-text--deleting']].join(' ')}>Deleting a location might impact the users' configuration and leave information (e.g. the initial brought forward days).</p>
                        </div>
                    </Modal>
                    :
                    <></>
            }
        </div>
    );
};

export default More;