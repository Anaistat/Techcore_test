import React, {FC} from 'react';
import style from './Button.module.sass'

interface ButtonProp{
    className?: string
    text: string
    disabled: boolean
    color?: 'blue' | 'grey' | 'red-outline'
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button:FC<ButtonProp> = ({text, className, disabled, onClick, color}) => {
    return (
        <button className={[style['button-ui'], style['color--' + color || 'blue'], className].join(' ')} onClick={onClick} disabled={disabled}>{text}</button>
    );
};

export default Button;