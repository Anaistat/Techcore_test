import React, {FC} from 'react';
import style from './Card.module.sass'

interface CardProps{
    country: string
    users: string[]
}

const Card:FC<CardProps> = ({country, users}) => {
    return (
        <div className={style.card}>
            <div className={style['card__title']}>
                 <h2 className={style.country}>{country}</h2>
                <div className={style['default-card']}>
                    <span className={style['default-card__text']}>default</span>
                </div>
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

export default Card;