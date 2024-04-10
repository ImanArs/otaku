'use client'
import React from 'react'
import cls from './styles.module.scss'

import HeartIcons from '@/public/assets/icons/heart_white.svg'
import classNames from 'classnames'
import { Label } from '../Label'

export const ProductCard = () => {
  const isFavourite = Math.random() > 0.5
  const quantity = false
  const sale = false
  return (
    <div className={cls.card}>
      { sale && <Label type='red' className={cls.card_label}>скидка -15%</Label> }
      { quantity && <Label type='black' className={cls.card_label}>нет в наличии</Label> }
      <div className={cls.card_img}>
        <button className={classNames('', {
          [cls.active_heart]: isFavourite
        }, [cls.heart])}>
          <HeartIcons />
        </button>
        <div className={cls.triangle_wrapper}>
          <div className={cls.triangle}/>
          <div className={cls.triangle}/>
          <div className={cls.triangle}/>
        </div>
        {/* раскоментируешь если захочешь увидеть картинку */}
        {/* <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" /> */}
        <div className={cls.card_info}>
        <div className={cls.card_info_wrapper}>
          <h3>Lorem ipsum dolor sit.</h3>
          <h4>55 сом</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque minus temporibus dolore ab alias quaerat quisquam quod adipisci! Ipsam.</p>
        </div>
      </div>
      </div>
      <div className={cls.card_actions}>
        <button onClick={() => console.log('купить')}>купить</button>
        <button onClick={() => console.log('смотреть')}>Смотреть</button>
      </div>
    </div>
  )
}
