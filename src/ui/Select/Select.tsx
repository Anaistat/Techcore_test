import React, {FC} from 'react';
import './Select.sass'

interface SelectProp{
    values: string[]
    label: string
    name: string
    className?: string
}

const Select:FC<SelectProp> = ({values, label, name, className}) => {
    return (
        <div className={`${['select-container', className].join(' ')}`}>
            <label htmlFor={name} className='select-name'>{label}</label>
            <details className="custom-select">
                    <summary className="radios">
                        <input type='radio' name={name} id={`${name}0`} title={values[0]} checked/>
                        {
                            values.map((value, index)=><input type='radio' name={name} title={value} key={index} id={`${name}${index}`}/>)
                        }
                    </summary>
                    <ul className="select-list">
                        {
                            values.map((value, index)=>{
                                return <li className='select-item' key={index}>
                                        <label htmlFor={`${name}${index}`} className='select-label'>
                                            {value}
                                            <span></span>
                                        </label>
                                       </li>
                            })
                        }
                    </ul>
            </details>


        </div>
    );
};

export default Select;