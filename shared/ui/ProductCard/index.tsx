'use client'
import React from 'react'
import cls from './styles.module.scss'

import HeartIcons from '@/public/assets/icons/heart_white.svg'
import classNames from 'classnames'
import { Label } from '../Label'
import Link from 'next/link'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  console.log(product);
  
  const isFavourite = Math.random() > 0.5
  const quantity = false
  const sale = false
  return (
    <div className={cls.card}>
      <Link href={`/detail/${product.id}`}>

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
        <div className={cls.card_info}>
        <div className={cls.card_info_wrapper}>
          <h3>{product.title}</h3>
          <h4>{product.price} сом</h4>
          <p>{product.description}</p>
        </div>
      </div>
      </div>
      <div className={cls.card_actions}>
        <button onClick={() => console.log('купить')}>купить</button>
        <button onClick={() => console.log('смотреть')}>Смотреть</button>
      </div>
      </Link>
    </div>
  )
}
