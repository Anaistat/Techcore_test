import React, {FC, useState} from 'react';
import style from "./Select.module.sass"

interface SelectProp{
    values: string[]
    label: string
    name: string
    className?: string
}

const Select:FC<SelectProp> = ({values, label, name, className}) => {

    const [chosenElement, setChosenElement] = useState<string>(values[0])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const chooseElement = (elem:string) =>{
        setChosenElement(elem)
        setIsOpen(false)
    }

    return (

        <div className={style['select-container']}>
            <div className={[style['chosen-option'], style[isOpen?'chosen-option--open':'']].join(' ')} onClick={()=>setIsOpen(prev=>!prev)}>
                <span className={style['chosen-option__label']}>{label}</span>
                <span>{chosenElement}</span>
            </div>
            <ul className={style['elements-list']} style={{
                display: isOpen?'block':'none'
            }}>
                {
                    values.map(e=>
                        <li
                            key={e}
                            onClick={()=>chooseElement(e)}
                            className={style['elements-list__item']}
                        >
                            {e}
                        </li>)
                }
            </ul>
        </div>
    );
};

export default Select;