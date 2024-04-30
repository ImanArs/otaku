"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/shared/ui/Button";
import s from "./favorite.module.scss";
import Login from '../auth/Login';
import Register from '../auth/Register';
import Link from 'next/link';

const Favorites: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = getCookie("access");
    setIsAuthenticated(!!token);
  }, []);

  const openLoginModal = () => {
    setShowModal(true);
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  return (
    <div className={s.main}>
      <div className={s.favorite}>
        <h1>Избранные товары</h1>
      </div>
      {isAuthenticated ? (
        <div className={s.favoritetext}>
          <p>Здесь пока ничего нет :(</p>
          <span>
            Добавьте товары в “избранное”,<br />
            чтобы они отобразились на этой странице
          </span>
          <Link href="/catalog"><Button type="red">Каталог</Button></Link>
        </div>
      ) : (
        <div className={s.authtext}>
          <p onClick={openLoginModal}>Войдите <span> или </span> зарегистрируйтесь</p>
          <h5>Чтобы добавлять товары в раздел “избранное” необходимо иметь учётную запись</h5>
        </div>
      )}
      {showModal && <Login showModal={showModal} setShowModal={setShowModal}/>}
    </div>
  );
};

export default Favorites;
