'use client';
import React, { useEffect, useRef } from 'react';
import cls from './styles.module.scss';
import classNames from 'classnames';
import { Card } from './ui/Card';
import { Button } from '@/shared/ui/Button';
import Checkout from '../checkout/Checkout';

const mockData = [
  { id: 1, title: 'lol1', price: 150, description: 'lsadsdassada' },
  { id: 2, title: 'lol2', price: 150, description: 'lsadsdassada' },
  { id: 3, title: 'lol3', price: 150, description: 'lsadsdassada' },
  { id: 4, title: 'lol4', price: 150, description: 'lsadsdassada' },
  { id: 5, title: 'lol5', price: 150, description: 'lsadsdassada' },
  { id: 6, title: 'lol6', price: 150, description: 'lsadsdassada' },
  { id: 7, title: 'lol7', price: 150, description: 'lsadsdassada' },
  { id: 8, title: 'lol8', price: 150, description: 'lsadsdassada' },
  { id: 9, title: 'lol9', price: 150, description: 'lsadsdassada' },
  { id: 10, title: 'lol10', price: 150, description: 'lsadsdassada' },
];

export const CartWidget = () => {
  const [openCart, setOpenCart] = React.useState(false);
  const [openCheckout, setOpenCheckout] = React.useState(false);
  const cartRef = useRef(null);

  const handleClick = () => {
    setOpenCart(!openCart);
  };

  const handleOpenCheckout = () => {
    setOpenCheckout(!openCheckout);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && (cartRef.current as HTMLElement).contains(event.target as Node)) {
      setOpenCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);

  return (
    <>
      <div
        ref={cartRef}
        className={classNames(
          '',
          {
            [cls.openCart]: openCart,
          },
          [cls.cart],
        )}>
        <div className={cls.heading} onClick={handleClick}>Корзина</div>
        <div className={cls.cartContent}>
          <div className={cls.cartItems}>
            {mockData.map((item, i) => (
              <Card key={i} product={item} />
            ))}
          </div>
          <div className={cls.cartTotal}>
            <div>
              <h3>Итого:</h3>
              <p>1500 сом</p>
            </div>
            <button onClick={handleOpenCheckout}>К оплате</button>
          </div>
        </div>
      </div>
      {openCheckout && <Checkout active={openCheckout} handleClick={handleOpenCheckout} />}
    </>
  );
};
