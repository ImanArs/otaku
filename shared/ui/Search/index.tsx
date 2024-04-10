'use client'
import React from 'react'
import cls from './styles.module.scss'
import classNames from 'classnames';

interface Props {
  reversed?: boolean
  placeholder?: string
  btnTitle?: string
  value?: string
  onChange?: () => void
}

export const Search = (props: Props) => {
  const { reversed = false, placeholder, btnTitle, value, onChange } = props;
  return (
    <div className={classNames('', {
      [cls.search_reversed]: reversed
    }, [cls.search])}>

      <button>{btnTitle ? btnTitle : 'Поиск в каталоге'}</button>
      <input 
        type="text" 
        name="" 
        id="" 
        value={value}
        placeholder={placeholder ? placeholder : 'Начните вводить название товара'}
        onChange={onChange}
      />
    </div>
  )
}
