import classNames from 'classnames';
import React from 'react';
import cls from './styles.module.scss'

interface CheckboxProps {
  label?: string | React.ReactNode;
  id: any; 
  checked: boolean;
  className?: string;
  onChange: (id: string, checked: boolean) => void; 
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, checked, className, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.checked); 
  };

  return (
    <label className={classNames('', {}, [cls.checkbox, className])}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className={cls.checkmark}>{label}</span>
    </label>
  );
};
