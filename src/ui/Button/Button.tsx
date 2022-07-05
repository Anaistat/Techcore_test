import React, {FC} from 'react';
import style from './Button.module.sass'

interface ButtonProp{
    className: 'blue' | 'grey' | 'outline-red'
    text: string
    disabled: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button:FC<ButtonProp> = ({text, className, disabled, onClick}) => {
    return (
        <button className={[style['button-ui'], style[className]].join(' ')} onClick={onClick} disabled={disabled}>{text}</button>
    );
};

export default Button;