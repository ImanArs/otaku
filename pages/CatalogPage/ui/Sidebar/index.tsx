"use client"
import React, { useState } from "react";
import cls from "./styles.module.scss";
import { Checkbox } from "../checkbox";
import { useCategory, useSubCategory } from "@/hook/UseCategory";


interface Category {
  id: number;
  name: string;
}

export const Sidebar = () => {
  const [amount, setAmount] = useState({ min: 0, max: 100 });
  const [checked, setChecked] = useState(false);
  const categories = useCategory()
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({}); 
  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: isChecked,
    }));
  };
  const subCategories = useSubCategory(); 
  console.log(categories);
  
  const changeRange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setAmount((prevAmount) => ({ ...prevAmount, [key]: event.target.value }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <aside>
      <form className={cls.sidebar} onSubmit={onSubmit}>
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
          {categories && categories?.map((category: Category) => ( 
            <Checkbox
              key={category.id}
              id={category.id} 
              checked={!!checkedItems[category.id]}
              onChange={handleCheckboxChange} 
              label={category.name}
              className={cls.heading}
            />
          ))}
        </div>
        {/* <div className={cls.filter}>
          {subCategories && subCategories?.map((subCategories: Category) => ( // Добавлено условие
            <Checkbox
              key={subCategories.id}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              label={subCategories.name}
              className={cls.heading}
            />
          ))}
        </div> */}

        <button type="submit">сбросить</button>
      </form>
    </aside>
  );
};
