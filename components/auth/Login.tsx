"use client"
import { useState } from 'react';
import s from './register.module.scss';
import { Button } from '@/shared/ui/Button';
import X from '@/public/assets/icons/x.svg';
import useAuthentication from '@/hook/useAuthentication';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate, error, isLoading } = useAuthentication();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authenticate(email, password);
  };

  return (
    <div>
      <button className={s.qwe} onClick={openModal}>Open Register Modal</button>
      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <span className={s.close} onClick={closeModal}><X /></span>
            <div className={s.text}>Вход</div>
            <form className={s.register} onSubmit={handleSubmit}>
              <div className={s.box}>
                <input
                  type="email"
                  id="email"
                  placeholder="Ваш email..."
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className={s.box}>
                <input
                  type="password"
                  id="password"
                  placeholder="Пароль..."
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {error && <div className={s.error}>{error}</div>}
              <div className={s.actions}>
                <Button type="black" >Войти</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
