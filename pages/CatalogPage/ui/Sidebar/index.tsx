import React, { useState, useEffect } from "react";
import cls from "./styles.module.scss";
import useCategory from "@/hook/UseCategory";
import { useRouter } from "next/router";
import Link from "next/link";
import Checkbox from "../checkbox";
import Icons from "@/public/assets/images/filtercatolog.png"
interface Category {
  id: number;
  name: string;
  subCategories: SubCategory[];
  codename: string;
}

interface SubCategory {
  id: number;
  name: string;
  codename: string;
}

const Sidebar = () => {
  const initialAmount = { min: 0, max: 3000 };
  const initialCheckedItems: { [key: string]: boolean } = {};
  const [amount, setAmount] = useState(initialAmount);
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия панели
  const categories = useCategory();
  // const router = useRouter();

  useEffect(() => {
    const resetCheckedItems = categories.reduce((acc, category: Category) => {
      acc[category.codename] = false;
      category.subCategories.forEach((subCategory: SubCategory) => {
        acc[subCategory.codename] = false;
      });
      return acc;
    }, {} as { [key: string]: boolean });
    setCheckedItems(resetCheckedItems);
  }, [categories]);

  const handleCheckboxChange = (codename: string, isChecked: boolean) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [codename]: isChecked,
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
    // Логика для отправки формы, если необходимо
  };

  const handleReset = () => {
    setAmount(initialAmount);
    setCheckedItems(initialCheckedItems);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Кнопка для открытия/закрытия боковой панели */}
      <button className={cls.buttonopen} onClick={toggleSidebar}>Фильтр</button>

      {/* Содержимое боковой панели */}
      <aside className={`${cls.sidebar} ${isOpen ? cls.open : ""}`}>
        <div className={cls.sidebar_amountWrapper}>
          <div className={cls.amount}>
            <input
              type="text"
              value={amount.min}
              onChange={(e) => changeRange(e, "min")}
            />
            <span>сом</span>
            <img
              className={cls.input1}
              src="/assets/icons/Rectangle230.svg"
              alt=""
            />
          </div>
          <div className={cls.amount}>
            <input
              type="text"
              value={amount.max}
              onChange={(e) => changeRange(e, "max")}
            />
            <span>сом</span>
            <img
              className={cls.input2}
              src="/assets/icons/Rectangle227.svg"
              alt=""
            />
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
            max={3000}
            onChange={(e) => changeRange(e, "max")}
          />
        </div>

        <div className={cls.filter}>
          {categories &&
            categories.map((category: Category) => (
              <div key={category.codename}>
                <Checkbox
                  codename={category.codename}
                  checked={!!checkedItems[category.codename]}
                  onChange={handleCheckboxChange}
                  label={category.name}
                  className={cls.heading}
                />
                {category.subCategories.map((subCategory: SubCategory) => (
                  <Checkbox
                    key={subCategory.codename}
                    codename={category.codename}
                    codenamesub={subCategory.codename}
                    checked={!!checkedItems[subCategory.codename]}
                    onChange={handleCheckboxChange}
                    label={subCategory.name}
                    className={cls.subheading}
                  />
                ))}
              </div>
            ))}
        </div>

        <button type="button" onClick={handleReset}>
          <Link href="/catalog">сбросить</Link>
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
