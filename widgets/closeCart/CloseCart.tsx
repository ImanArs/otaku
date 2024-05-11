'use client';
import React from 'react';
import classNames from 'classnames';
import cls from './style.module.scss';

interface CheckoutProps {
  active: boolean;
  handleClick: () => void;
}

const CloseCart: React.FC<CheckoutProps> = ({ active, handleClick }) => {
  return (
    <div
      className={classNames(
        '',
        {
          [cls.openCart]: active,
        },
        [cls.cart],
      )}
      onClick={handleClick}>
      <div className={cls.heading}>КОРЗИНА</div>
      <div className={cls.cartContent}>
        <div className={cls.cartTotal}>
          <div>
            <img src="/assets/images/v.png" alt="" />
            <h2>спасибо!</h2>
          </div>
          <p>Наш менеджер свяжется с Вами в течение 10-15 минут для подтверждения заказа</p>
          <button onClick={handleClick}>Закрыть корзину</button>
        </div>
      </div>
    </div>
  );
};

export default CloseCart;
