import classNames from 'classnames';
import React from 'react';
import cls from './styles.module.scss'

interface CheckboxProps {
  label?: string | React.ReactNode;
  checked: boolean;
  className?: string;
  onChange: (e: any) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, className, onChange }) => {
  return (
    <label className={classNames('', {}, [cls.checkbox, className])}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={cls.checkmark}>{label}</span>
    </label>
  );
};