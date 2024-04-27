import React from 'react'
import cls from './styles.module.scss'

interface Props {
  product: any
}

export const Card = (props: Props) => {
  const { product } = props
  return (
    <div className={cls.cartCard}>
      <div className={cls.img}>

      </div>
      <div className={cls.info}>
        <h3>Значок сАСКЕ</h3>
        <h3>55 сом</h3>
        <p>Литой значок на пине</p>
      </div>
    </div>
  )
}
