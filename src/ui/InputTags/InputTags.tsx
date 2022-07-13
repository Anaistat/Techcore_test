import React, {FC, useState} from 'react';
import style from './InputTags.module.sass'

interface InputTagsProps{
    options: string[]
    enteredOptions: string[]
    setEnteredOptions: (newEnteredOptions: string[]) => void
    placeholder?: string
    name?: string
    label?: string
}

const InputTags:FC<InputTagsProps> = ({
    options,
    enteredOptions,
    setEnteredOptions,
    placeholder,
    name,
    label
}) => {

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [searchOption, setSearchOption] = useState<string>('')
    const filteredOptions = options.filter(e=>(e.toLowerCase().includes(searchOption.toLowerCase())) && !(enteredOptions.includes(e)))

    const addUser = (user:string) =>{
        setEnteredOptions([...enteredOptions, user])
    }

    const removeUser = (user:string) =>{
        setEnteredOptions(enteredOptions.filter(e=>e !== user))
    }

    const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === 'Enter'){
            addUser(filteredOptions[0])
        }
        if(e.key === 'Backspace' && searchOption === ''){
            removeUser(enteredOptions[enteredOptions.length - 1])
        }
    }

    return (
        <div className={style['input-container']}>
            <label className={style.label} data-name={label}>
                {
                    enteredOptions.map(e=>
                        <span className={style.tag}>{e}
                            <span className={style.remove} onClick={()=>removeUser(e)}>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.78228 5.00019L9.10497 1.6773C9.32058 1.46168 9.32058 1.11184 9.10497 0.895413C8.88935 0.678989 8.53951 0.679799 8.32309 0.895413L5.00019 4.21811L1.6773 0.895413C1.46168 0.679799 1.11184 0.679799 0.895413 0.895413C0.678989 1.11103 0.679799 1.46087 0.895413 1.6773L4.21811 5.00019L0.895413 8.32309C0.679799 8.5387 0.679799 8.88855 0.895413 9.10497C1.00312 9.21288 1.14504 9.26673 1.28595 9.26673C1.42767 9.26673 1.56878 9.21288 1.67649 9.10497L5.00019 5.78228L8.32309 9.10497C8.43079 9.21288 8.57271 9.26673 8.71362 9.26673C8.85453 9.26673 8.99645 9.21288 9.10416 9.10497C9.31977 8.88935 9.31977 8.53951 9.10416 8.32309L5.78228 5.00019Z" fill="white"/>
                                    <path d="M5.78228 5.00019L9.10497 1.6773C9.32058 1.46168 9.32058 1.11184 9.10497 0.895413C8.88935 0.678989 8.53951 0.679799 8.32309 0.895413L5.00019 4.21811L1.6773 0.895413C1.46168 0.679799 1.11184 0.679799 0.895413 0.895413C0.678989 1.11103 0.679799 1.46087 0.895413 1.6773L4.21811 5.00019L0.895413 8.32309C0.679799 8.5387 0.679799 8.88855 0.895413 9.10497C1.00312 9.21288 1.14504 9.26673 1.28595 9.26673C1.42767 9.26673 1.56878 9.21288 1.67649 9.10497L5.00019 5.78228L8.32309 9.10497C8.43079 9.21288 8.57271 9.26673 8.71362 9.26673C8.85453 9.26673 8.99645 9.21288 9.10416 9.10497C9.31977 8.88935 9.31977 8.53951 9.10416 8.32309L5.78228 5.00019Z" fill="#00A0EC" fillOpacity="0.7"/>
                                </svg>
                            </span>
                        </span>)
                }
                <input
                    className={[style['search-input'], style[enteredOptions.length?'search-input--not-empty':'']].join(' ')}
                    type='text'
                    placeholder={placeholder}
                    name={name}
                    onFocus={()=>setIsFocused(true)}
                    value={searchOption}
                    onChange={e=>setSearchOption(e.target.value)}
                    onKeyDown={keyHandler}
                />
                <span className={style['placeholder']}>Users</span>
            </label>
            <div className={style.select} style={{
                display: isFocused?'block':'none'
            }}>
                <ul className={style['select__list']}>
                    {
                        filteredOptions.map(user=>
                            <li
                                className={style.users}
                                key={user}
                                onClick={()=>addUser(user)}
                            >
                                {user}
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default InputTags;