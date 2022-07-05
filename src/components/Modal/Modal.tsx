import React, {FC, ReactNode} from 'react';
import style from './Modal.module.sass'
import Button from "../../ui/Button/Button";
import button from "../../ui/Button/Button";

interface ModalProps{
    title: string
    children: JSX.Element | ReactNode | JSX.Element[] | ReactNode[]
    buttons: number[]
    visible: boolean
    setVisible: (visible: boolean) => void
}

const Modal:FC<ModalProps> = ({children, buttons, title, visible, setVisible}) => {
    return (
        <>
            <div className={style.modal} style={{
                display: visible?'block':'none'
            }}>
                <div className={style['modal__header']}>
                    <h1>{title}</h1>
                </div>
                {children}
                <div className={'modal__buttons'}>
                    {
                        buttons.map((e, index)=><button>index</button>)
                    }
                </div>
            </div>
            <div className={style.darkening} onClick={()=>setVisible(false)}/>
        </>
    );
};

export default Modal;