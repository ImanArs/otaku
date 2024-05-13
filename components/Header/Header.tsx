'use client';
import { useEffect, useRef, useState } from 'react';
import s from './header.module.scss';
import { HeaderMenu } from './ui/menu';
import Link from 'next/link';
import Login from '../auth/Login';
import Register from '../auth/Register';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  useEffect(() => {
    const token = getCookie('access');
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
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
      <img className={s.header_images} src="/assets/images/Rectangle 43.svg" alt="" />

      <div className={s.header_blocks}>
        <Link href="/">
          <img className={s.logo} src="/assets/images/logo.svg" alt="logo" />
        </Link>
        {isAuthenticated ? null : (
          <div className={s.header_blocks_registr}>
            <span onClick={() => setShowLoginModal(true)}>Войти</span>/
            <span onClick={() => setShowRegisterModal(true)}>Зарегистрироваться</span>
          </div>
        )}
        <div className={s.header_blocks_text} ref={menuRef} onClick={() => setOpenMenu(!openMenu)}>
          <h3>MENU</h3>
          <div className={s.lini}>
            <img src="/assets/images/lini-menu.svg" alt="logo" />
            <img src="/assets/images/lini-menu.svg" alt="logo" />
            <img src="/assets/images/lini-menu.svg" alt="logo" />
          </div>
          {openMenu && (
            <div className={s.menu}>
              <HeaderMenu />
            </div>
          )}
          {showLoginModal && <Login showModal={showLoginModal} setShowModal={setShowLoginModal} />}
          {showRegisterModal && <Register showModal={showRegisterModal} setShowModal={setShowRegisterModal} />}
        </div>
      </div>
    </header>
  );
}
