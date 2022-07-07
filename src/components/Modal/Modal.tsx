import React, {FC, ReactNode} from 'react';
import style from './Modal.module.sass'
import close from './images/close.png'

interface ModalProps{
    title: string
    children: JSX.Element | ReactNode | JSX.Element[] | ReactNode[]
    buttons: JSX.Element[]
    setVisible: (visible: boolean) => void
}

const Modal:FC<ModalProps> = ({children, buttons, title, setVisible}) => {
    return (
        <>
            <div className={style.modal}>
                <div className={style['modal__header']}>
                    <h1 className={style.title}>{title}</h1>
                    <img src={close} alt="close" width='16' height='16' className={style.close} onClick={()=>setVisible(false)}/>
                </div>
                <div className={style['modal__content']}>
                    {children}
                </div>
                <div className={style['modal__buttons']}>
                    {
                        buttons.map((button, index)=><React.Fragment key={index}>{button}</React.Fragment>)
                    }
                </div>
            </div>
            <div className={style.darkening} onClick={()=>setVisible(false)}/>
        </>
    );
};

export default Modal;