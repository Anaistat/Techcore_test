import React, {useEffect, useState} from 'react';
import style from './CreateLocation.module.sass'
import Input from "../../../ui/Input/Input";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import Select from "../../../ui/Select/Select";
import Info from "./Info/Info";


const CreateLocation = () => {

    const week:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const month:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days:string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
    const timezone: string[] = ['(GMT + 02:00) Vilnius', '(GMT + 03:00) Nairobi', '(GMT + 03:00) Minsk', '(GMT + 03:00) Qatar']

    const [locationName, setLocationName] = useState<string>('')
    const [users, setUsers] = useState<string>('')
    const [expiryDate, setExpiryDate] = useState<string>('')
    const [locationDefault, setLocationDefault] = useState<string>('')


    return (
        <form action=''>
            <ul className={style['form-container']}>
                <li className={style.name}>
                    <Input type='text' placeholder='Location Name' value={locationName} onChange={e=>setLocationName(e.target.value)}/>
                </li>
                <li className={style.workweek}>
                    <h2 className={style['workweek__text']}>Workweek <span className={style['workweek__required']}>*</span></h2>
                    <ul className={style['workweek__days']}>
                        {
                            week.map(day=><li className={style['workweek__days--item']}><Checkbox label={day} name={day}/></li>)
                        }
                    </ul>
                </li>
                <li className={style['leave-quota']}>
                    <Select values={['Accounting year', 'User Employment Date']} label='Leave Quota Reset Based on' name='quota' className={style['leave-quota__select']}/>
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
                        <Select values={days} label='' name='days'/>
                    </div>
                </li>
                <li className={style['expiry-date']}>
                    <Checkbox label={'No Brought Forward Expiry Date'} name='expiry-date' boldFont={true} value={expiryDate} onChange={e=>setExpiryDate(e.target.value)}/>
                    <Info text={`Each year, the user's rolled over leaves will expire on the date you set. 
                    The quotas for each leave type are configured through the Leave Types section for this 
                    location and each can be set individually to allow or not allow roll overs.`}/>
                </li>
                <li className={style['week-starts']}>
                    <Select values={week.slice(0,2)} label='Week Starts on' name='week-start'/>
                </li>
                <li className={style['timezone']}>
                    <Select values={timezone} label='Time Zone*' name='timezone' className={style['timezone__select']}/>
                    <Info text={`This setting will determine if your 
                    leave balance will be reset based on the accounting 
                    year (company's fiscal year) or based on the employee's 
                    start date. Besides quotas, your roll-over policy will 
                    also be affected according to this setting.`}/>
                </li>
                <li className={style['add-users']}>
                    <Input type='text' placeholder='Add Users' value={users} onChange={e=>setUsers(e.target.value)}/>
                </li>
                <li className={style['default-location']}>
                    <Checkbox label='Make This Location Default' boldFont={true} name='default-location' value={locationDefault} onChange={e=>setLocationDefault(e.target.value)}/>
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