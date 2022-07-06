import React from 'react';
import style from './CreateLocation.module.sass'
import Input from "../../../ui/Input/Input";
import Checkbox from "../../../ui/Checkbox/Checkbox";

const CreateLocation = () => {

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return (
        <form>
            <div className={style['form-container']}>
                <div className={style.name}>
                    <Input type='text' placeholder='Location Name'/>
                </div>
                <div className={style.workweek}>
                    <h2 className={style['workweek__text']}>Workweek <span className={style['workweek__required']}>*</span></h2>
                    <ul className={style['workweek__days']}>
                        {
                            week.map(day=><li className={style['workweek__days--item']}><Checkbox label={day}/></li>)
                        }
                    </ul>
                </div>
            </div>
        </form>
    );
};

export default CreateLocation;