import React, {FC, ReactNode} from 'react';
import style from './Modal.module.sass'
import button from "../../ui/Button/Button";
import Button from "../../ui/Button/Button";

type ButtonsModal = {
    text: string,
    disabled: boolean,
    color: 'blue' | 'grey' | 'red-outline'
}

interface ModalProps{
    title: string
    children: JSX.Element | ReactNode | JSX.Element[] | ReactNode[]
    buttons: []
    setVisible: (visible: boolean) => void
}

const Modal:FC<ModalProps> = ({children, buttons, title, setVisible}) => {
    return (
        <>
            <div className={style.modal}>
                <div className={style['modal__header']}>
                    <h1 className={style.title}>{title}</h1>
                </div>
                <div className={style['modal__content']}>
                    {children}
                </div>
                <div className={'modal__buttons'}>
                    {
                        buttons.map((e)=><Button text={e.text} disabled={e.disabled} color={e.color}/>)
                    }
                </div>
            </div>
            <div className={style.darkening} onClick={()=>setVisible(false)}/>
        </>
    );
};

export default Modal;