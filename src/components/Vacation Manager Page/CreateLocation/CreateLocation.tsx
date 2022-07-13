import React, {FC, useEffect, useState} from 'react';
import style from './CreateLocation.module.sass'
import Input from "../../../ui/Input/Input";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import Select from "../../../ui/Select/Select";
import Info from "./Info/Info";
import warning from './../More/images/warning.png'
import InputTags from "../../../ui/InputTags/InputTags";

interface LocationProps{
    setLocation: (location: string) => void
}

const CreateLocation:FC<LocationProps> = ({setLocation}) => {

    const week:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const month:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const daysValues:string[] = Array(31).fill(0).map((e, index)=>String(index + 1))
    const timezone: string[] = ['(GMT + 02:00) Vilnius', '(GMT + 03:00) Nairobi', '(GMT + 03:00) Minsk', '(GMT + 03:00) Qatar']
    const users = ['Julia Senko', 'Alexander', 'Bigus', 'Jessica Monroe', 'Kamila', 'Menon Kritika', 'Dan Brown', 'Mister X', 'Biba i Boba', 'Amogus', 'Bimbim Bombom']

    const [locationName, setLocationName] = useState<string>('')
    const [expiryDate, setExpiryDate] = useState<boolean>(false)
    const [locationDefault, setLocationDefault] = useState<boolean>(false)
    const [days, setDays] = useState<string[]>([])
    const [enteredUsers, setEnteredUsers] = useState<string[]>([])


    useEffect(()=>{
        console.log(enteredUsers)
    }, [enteredUsers])


    const dayCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.checked){
            if(days.includes(e.target.value)) return
            return setDays(prevState => [...prevState, e.target.value])
        }
        setDays(prevState => prevState.filter(elem=> elem !== e.target.value))
    }

    const isChecked = (day: string) =>{
        return days.includes(day)
    }

    useEffect(()=>{
        setLocation(locationName)
    }, [locationName])

    return (
        <form action=''>
            <ul className={style['form-container']}>
                <li className={style.name}>
                    <Input
                        type='text'
                        placeholder='Location Name'
                        value={locationName}
                        onChange={e=>setLocationName(e.target.value)}/>
                </li>
                <li className={style.workweek}>
                    <h2 className={style['workweek__text']}>Workweek
                        <span className={style['workweek__required']}>*</span>
                    </h2>
                    <ul className={style['workweek__days']}>
                        {
                            week.map(day=><li className={style['workweek__days--item']} key={day}>
                                            <Checkbox
                                                label={day}
                                                name={day}
                                                value={day}
                                                onChange={dayCheckboxHandler}
                                                checked={isChecked(day)}/>
                                        </li>)
                        }
                    </ul>
                </li>
                <li className={style['leave-quota']}>
                    <Select
                        values={['Accounting year', 'User Employment Date']}
                        label='Leave Quota Reset Based on'
                        name='quota'
                        className={style['leave-quota__select']}
                    />
                    <Info text={`This setting will determine if your 
                    leave balance will be reset based on the accounting 
                    year (company's fiscal year) or based on the employee's 
                    start date. Besides quotas, your roll-over policy will 
                    also be affected according to this setting.`}
                    />
                </li>
                <li className={style['fiscal-start']}>
                    <div className={style['fiscal-start__year']}>
                        <Select values={month} label='Fiscal Year Start' name='month'/>
                    </div>
                    <div className={style['fiscal-start__day']}>
                        <Select values={daysValues} label='' name='days'/>
                    </div>
                </li>
                <li className={style['expiry-date']}>
                    <Checkbox
                        label={'No Brought Forward Expiry Date'}
                        name='expiry-date'
                        boldFont={true}
                        value='expiry-date'
                        checked={expiryDate}
                        onChange={e=>setExpiryDate(e.target.checked)}
                    />
                    <Info text={`Each year, the user's rolled over leaves will expire on the date you set. 
                    The quotas for each leave type are configured through the Leave Types section for this 
                    location and each can be set individually to allow or not allow roll overs.`}/>
                </li>
                <li className={style['week-starts']}>
                    <Select values={week.slice(0,2)} label='Week Starts on' name='week-start'/>
                </li>
                <li className={style['timezone']}>
                    <Select
                        values={timezone}
                        label='Time Zone*'
                        name='timezone'
                        className={style['timezone__select']}/>
                    <Info text={`This setting will determine if your 
                    leave balance will be reset based on the accounting 
                    year (company's fiscal year) or based on the employee's 
                    start date. Besides quotas, your roll-over policy will 
                    also be affected according to this setting.`}/>
                </li>
                <li className={style['add-users']}>
                    <InputTags
                        options={users}
                        enteredOptions={enteredUsers}
                        setEnteredOptions={setEnteredUsers}
                        placeholder='Add Users'
                        label='Users'
                        name='Users'
                    />
                    <div className={style['add-users__warning']}>
                        <img src={warning} alt="warning" width='16' height='16'/>
                        <p className={style['add-users__warning--text']}>Adding or removing a user might impact the user's configuration and leave information (e.g. the initial brought forward days).</p>
                    </div>
                </li>
                <li className={style['default-location']}>
                    <Checkbox
                        label='Make This Location Default'
                        boldFont={true}
                        name='default-location'
                        value='default-location'
                        checked={locationDefault}
                        onChange={e=>setLocationDefault(e.target.checked)}
                    />
                    <Info text={`Each year, the user's rolled over leaves will expire on the date you set. 
                    The quotas for each leave type are configured through the Leave Types section for this 
                    location and each can be set individually to allow or not allow roll overs.`}/>
                </li>
                <li className={style['leave-policy']}>
                    <p className={style['leave-policy__text']}>Once you've created a Location,
                        assign a <a href="#" className={style['leave-policy__link']}>Leave Policy</a> to the Location,
                        in order to enable Users to request Leave.
                        To assign a Leave Policy, go to Location {'>'}
                        Leave Policies {'>'} Assign Leave Policy.
                    </p>
                </li>
            </ul>
        </form>
    );
};

export default CreateLocation;