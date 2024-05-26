import React from 'react'
import cls from './styles.module.scss';
import Link from 'next/link';


const headerMenuLinks = [
  { name: 'каталог', link: '/catalog' },
  { name: 'Контакты', link: '/contacts' },
  { name: 'МАГАЗИНЫ', link: '/shops' },
  { name: 'Доставка', link: '/delivery' },
  { name: 'Возврат', link: '/return' },
  { name: 'О нас', link: '/about' },
  { name: 'новости', link: '/news' },
];

export const HeaderMenu = () => {
  return (
    <ul className={cls.menu}>
      {headerMenuLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.link}>{link.name.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  )
}
