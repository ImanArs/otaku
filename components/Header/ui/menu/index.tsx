import React, { useEffect } from 'react'
import cls from './styles.module.scss'
import Link from 'next/link'

const headerMenuLinks = [
  {name: 'каталог', link: '#'},
  {name: 'Контакты', link: '#'},
  {name: 'МАГАЗИНЫ', link: '#'},
  {name: 'Доставка', link: '#'},
  {name: 'siad90sau', link: '#'},
  {name: 'вОЗВРАТ', link: '#'},
  {name: 'О нас', link: '#'},
]

export const HeaderMenu = () => {
  return (
    <ul className={cls.menu}>
      {headerMenuLinks.map((link, index) => (
        <li key={index}><Link href={link.link}>{link.name.toUpperCase()}</Link></li>
      ))}
    </ul>
  )
}
