import React, {FC} from 'react';
import './Input.sass'

interface InputProps{
    type: 'text' | 'number'
    placeholder?: string
}

const Input:FC<InputProps> = ({type, placeholder}) => {
    return (
        <div className="form__group field">
            <input type={type} className="form__field" placeholder={placeholder} name="name" required/>
            <label htmlFor="name" className="form__label">{placeholder}</label>
        </div>
    );
};

export default Input;