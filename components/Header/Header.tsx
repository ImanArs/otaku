'use client'
import { useEffect, useRef, useState } from 'react';
import s from './header.module.scss';
import { HeaderMenu } from './ui/menu';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent ) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className={s.header}>
      <img
        className={s.header_images}
        src="/assets/images/Rectangle 43.svg"
        alt=""
      />
      <div className={s.header_blocks}>
        <img src="/assets/images/logo.svg" alt="logo" />
        <div className={s.header_blocks_text} ref={menuRef} onClick={() => setOpenMenu(!openMenu)}>
          <h3>MENU</h3>
          <div className={s.lini}>
            <img src="/assets/images/lini-menu.svg" alt="logo" />
            <img src="/assets/images/lini-menu.svg" alt="logo" />
            <img src="/assets/images/lini-menu.svg" alt="logo" />
          </div>
          {
            openMenu && (
            <div className={s.menu}>
              <HeaderMenu />
            </div>
            )
          }
        </div>
      </div>
    </header>
  );
}
