"use client"
import React, { useState, useEffect } from "react";
import cls from "./styles.module.scss";
import { Checkbox } from "../checkbox";
import { useCategory, useSubCategory } from "@/hook/UseCategory";

interface Category {
  id: number;
  name: string;
}

export const Sidebar = () => {
  const initialAmount = { min: 0, max: 100 };
  const initialCheckedItems: { [key: string]: boolean } = {};
  const [amount, setAmount] = useState(initialAmount);
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const categories = useCategory();

  useEffect(() => {
    // Reset checkedItems when categories change
    const resetCheckedItems = categories.reduce((acc, category: Category) => {
      acc[category.id.toString()] = false;
      return acc;
    }, {} as { [key: string]: boolean });
    setCheckedItems(resetCheckedItems);
  }, [categories]);

  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: isChecked,
    }));
  };

  const changeRange = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setAmount((prevAmount) => ({ ...prevAmount, [key]: event.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleReset = () => {
    setAmount(initialAmount);
    setCheckedItems(initialCheckedItems);
  };

  return (
    <>
    <aside>
      <img src="/assets/icons/Rectangle122.svg" alt="" className={cls.qwe} />
      <form className={cls.sidebar} onSubmit={onSubmit}>
        <div className={cls.sidebar_amountWrapper}>
          <div className={cls.amount}>
            <input
              type="text"
              value={amount.min}
              onChange={(e) => changeRange(e, "min")}
              // className={cls.input1} 
              />
            <span>сом</span>
              <img className={cls.input1} src="/assets/icons/Rectangle230.svg" alt="" />
          </div>
          <div className={cls.amount}>
            <input
              type="text"
              value={amount.max}
              onChange={(e) => changeRange(e, "max")}
              />
            <span>сом</span>
            <img className={cls.input2} src="/assets/icons/Rectangle227.svg" alt="" />
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


        <button type="button" onClick={handleReset}>сбросить</button>
      </form>
    </aside>
            </>
  );
};
