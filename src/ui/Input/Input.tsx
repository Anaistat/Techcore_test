import React, {FC} from 'react';
import './Input.sass'

interface InputProps{
    type: 'text' | 'number'
    placeholder?: string
    value: string | number | undefined
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:FC<InputProps> = ({type, placeholder, value, onChange}) => {
    return (
        <div className="form__group field">
            <input
                type={type}
                className="form__field"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name="name"/>
            <label htmlFor="name" className="form__label">{placeholder}</label>
        </div>
    );
};

export default Input;