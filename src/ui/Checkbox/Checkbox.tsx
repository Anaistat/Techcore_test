import React, {FC} from 'react';
import './Checkbox.sass'

interface CheckBoxProp{
    label?: string
    name?: string
    boldFont?: boolean
    value: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox:FC<CheckBoxProp> = ({label, name, boldFont = false, checked, value, onChange}) => {
    return (
        <>
            <label htmlFor={name} className="label-checkbox">
                <input id={name} type="checkbox" name={name} className="invisible-input" value={value} onChange={onChange} checked={checked}/>
                    <div className="checkbox">
                        <svg width="20px" height="20px" viewBox="0 0 20 20">
                            <path
                                d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                            <polyline points="4 11 8 15 16 6"></polyline>
                        </svg>
                    </div>
                    <span className={`${!boldFont?'check-text':'check-text--bold'}`}>{label}</span>
            </label>
        </>
    );
};

export default Checkbox;