import classNames from "classnames";
import React from "react";
import cls from "./styles.module.scss";
import Link from "next/link";

interface CheckboxProps {
  label?: string | React.ReactNode;
  checked: boolean;
  className?: string;
  codenamesub?: string;
  codename: string;
  onChange: (id: string, checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  className,
  codename,
  codenamesub,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(codename, e.target.checked);
  };
  const linkHref = codenamesub
    ? `/catalog/${codename}/${codenamesub}`
    : `/catalog/${codename}`;
  return (
    <>
      <Link href={linkHref}>
        <label className={classNames("", {}, [cls.checkbox, className])}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
          <span className={cls.checkmark}>{label}</span>
        </label>
      </Link>
    </>
  );
};

export default Checkbox;
