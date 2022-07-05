import React, {FC, useState} from 'react';
import style from './VacationCard.module.sass'
import More from "../More/More";

interface CardProps{
    country: string
    users: string[]
    defaultCard: boolean
}

const VacationCard:FC<CardProps> = ({country, users, defaultCard}) => {

    const [isMoreOpen, setIsMoreOpen] = useState<boolean>(false)
    const openCloseMore = (e: any) =>{
        e.stopPropagation()
        setIsMoreOpen(prev=>!prev)
    }

    return (
        <div className={style.card}>
            <div className={style['card__title']}>
                 <h2 className={style.country}>{country}</h2>
                <div className={`${defaultCard?style['default-card']:style['default-card--disable']}`}>
                    <span className={style['default-card__text']}>default</span>
                </div>
                <ul className={style.more} onClick={e=>openCloseMore(e)}>
                    <li className={style['more__dot']}/>
                    <li className={[style['more__dot'], style['more__dot--middle']].join(' ')}/>
                    <li className={style['more__dot']}/>
                </ul>
                <More open={isMoreOpen}/>
            </div>
            <div className={style['card__info']}>
                <div className={style['card__left']}>
                    <p className={style['info-text']}>Holidays</p>
                    <p className={style['info-text']}>Leave Policies</p>
                </div>
                <div>
                    <p className={[style['info-text'], style['info-text--active']].join(' ')}>View Holidays</p>
                    <p className={[style['info-text'], style['info-text--active']].join(' ')}>View Leave Policies</p>
                </div>
            </div>
            <div className={style['card__customers']}>
                {
                    users.length > 7
                        ?
                        <>
                            {users.slice(0, 7).map((image, index)=><img src={image} className={style['customer-profile']} alt={`profile${index}`} width='30' height='30' key={`img-${index}`}/>)}
                            <span className={style['customers-count']}>+{users.length - 7}</span>
                        </>
                        :
                        users.map((image, index)=><img src={image} className={style['customer-profile']} alt={`profile${index}`} width='30' height='30' key={`img-${index}`}/>)

                }
            </div>
        </div>
    );
};

export default VacationCard;