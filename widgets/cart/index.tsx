'use client'
import React from 'react'
import cls from './styles.module.scss'
import classNames from 'classnames'
import { Card } from './ui/Card';

const mockData = [
  {id: 1, title: 'lol1', price: 150, description: 'lsadsdassada'},
  {id: 2, title: 'lol2', price: 150, description: 'lsadsdassada'},
  {id: 3, title: 'lol3', price: 150, description: 'lsadsdassada'},
  {id: 4, title: 'lol4', price: 150, description: 'lsadsdassada'},
  {id: 5, title: 'lol5', price: 150, description: 'lsadsdassada'},
  {id: 6, title: 'lol6', price: 150, description: 'lsadsdassada'},
  {id: 7, title: 'lol7', price: 150, description: 'lsadsdassada'},
  {id: 8, title: 'lol8', price: 150, description: 'lsadsdassada'},
  {id: 9, title: 'lol9', price: 150, description: 'lsadsdassada'},
  {id: 10, title: 'lol10', price: 150, description: 'lsadsdassada'}
];

export const CartWidget = () => {
  const [openCart, setOpenCart] = React.useState(false)
  const handleClick = () => {
    console.log('wasClick');
    setOpenCart(!openCart)
  }
  return (
    <div className={classNames('', {
      [cls.openCart]: openCart
    }, [cls.cart])} onClick={handleClick}>
      <div className={cls.heading}>CartWidget</div>
      <div className={cls.cartContent}>
        <div className={cls.cartItems}>
          {mockData.map((item, i) => (
            <Card key={i} product={item} />
          ))}
        </div>
        <div className={cls.cartTotal}>
          <h3>Итого:</h3>
          <p>1500</p>
        </div>
      </div>
    </div>
  )
}
