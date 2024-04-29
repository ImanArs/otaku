"use client";
import React, { useState } from "react";
import cls from "./styles.module.scss";
import { Checkbox } from "../checkbox";

export const Sidebar = () => {
  const [amount, setAmount] = useState({ min: 0, max: 100 });
  const [checked, setChecked] = useState(false);
  const changeRange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setAmount((prevAmount) => ({ ...prevAmount, [key]: event.target.value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(123);
  };
  return (
    <aside>
      <form  className={cls.sidebar} onSubmit={onSubmit}>
        <div className={cls.sidebar_amountWrapper}>
          <div className={cls.amount}>
            <input
              type="number"
              value={amount.min}
              onChange={(e) => changeRange(e, "min")}
            />
            <span>сом</span>
          </div>
          <div className={cls.amount}>
            <input
              type="number"
              value={amount.max}
              onChange={(e) => changeRange(e, "max")}
            />
            <span>сом</span>
          </div>
        </div>
        <div className={cls.range}>
          <input
            type="range"
            min={0}
            max={50}
            onChange={(e) => changeRange(e, "min")}
          />
          <input
            type="range"
            min={50}
            max={100}
            onChange={(e) => changeRange(e, "max")}
          />
        </div>

        <div className={cls.filter}>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            label={<h3>Фигурки</h3>}
            className={cls.heading}
          />
          <ul>
            <li>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Акриловые стенды"
              />
            </li>
            <li>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Чиби фигурки"
              />
            </li>
            <li>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="3D Экшн-фигурки"
              />
            </li>
          </ul>
        </div>
        <div className={cls.filter}>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            label={<h3>Фигурки</h3>}
            className={cls.heading}
          />
          <ul>
            <li>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Акриловые стенды"
              />
            </li>
            <li>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="Чиби фигурки"
              />
            </li>
            <li>
              <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                label="3D Экшн-фигурки"
              />
            </li>
          </ul>
        </div>
        <button type="submit">сбросить</button>
      </form>
    </aside>
  );
};
