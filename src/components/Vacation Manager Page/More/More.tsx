import React, {FC, useState} from 'react';
import style from './More.module.sass'
import edit from './images/edit.png'
import defaultCard from './images/default.png'
import deleteCard from './images/delete.png'
import Modal from "../../Modal/Modal";

const More:FC<{open: boolean}> = ({open}) => {

    const [isDeleteModal, setIsDeleteModal] = useState<boolean>(false)

    return (
        <div className={style.more} style={{
            display: open?'block':'none'
        }}>
            <ul className={style['actions']}>
                <li className={style['actions__action']}>
                    <img src={edit} alt="edit" width='13' height='13'/>
                    <span className={style['actions-text']}>Edit</span>
                </li>
                <li className={[style['actions__action'], style['actions__action--middle']].join(' ')}>
                    <img src={defaultCard} alt="default" width='13' height='13'/>
                    <span className={style['actions-text']}>Set as Default</span>
                </li>
                <li className={style['actions__action']} onClick={()=>setIsDeleteModal(true)}>
                    <img src={deleteCard} alt="delete" width='13' height='13'/>
                    <span className={style['actions-text']}>Delete</span>
                </li>
            </ul>
            <Modal title='Delete Location' buttons={[1,2]} visible={isDeleteModal} setVisible={setIsDeleteModal}>
                123
            </Modal>
        </div>
    );
};

export default More;