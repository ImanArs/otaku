"use client"
import { useState } from 'react';
import useRegisterForm from '@/hook/useRegisterForm';
import s from './register.module.scss'
import { Button } from '@/shared/ui/Button'
import X from '@/public/assets/icons/x.svg'

const Register = () => {
  const { formData, handleInputChange, handleSubmit } = useRegisterForm();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className={s.qwe} onClick={openModal}>Open Register Modal</button>
      {showModal && (
        <div className={s.modal}>
          <div className={s.modalContent}>
            <span className={s.close} onClick={closeModal}><X/></span>
            <div className={s.text}>
              Регистрация
            </div>
            <form onSubmit={handleSubmit} className={s.register}>
              <div className={s.box}>
                <input type="text" id="first_name" placeholder='Ваше имя...' name="first_name" value={formData.first_name} onChange={handleInputChange} />
              </div>
              <div className={s.box}>
                <input type="text" id="last_name" placeholder='Ваше фамилия...' name="last_name" value={formData.last_name} onChange={handleInputChange} />
              </div>
              <div className={s.box}>
                <input type="email" id="email" placeholder='Ваш email...'  name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className={s.box}>
                <input type="tel" id="phone_number" placeholder='Номер телефона...' name="phone_number" value={formData.phone_number} onChange={handleInputChange} />
              </div>
              <div className={s.box}>
                <input type="password" id="password" placeholder='Пароль...' name="password" value={formData.password} onChange={handleInputChange} />
              </div>
              <div className={s.box}>
                <input type="password" id="password2" placeholder='Повторите пароль...' name="password2" value={formData.password2} onChange={handleInputChange} />
              </div>
              <div className={s.actions}>
                <Button type={'black'||'submit'}>подтвердить</Button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
