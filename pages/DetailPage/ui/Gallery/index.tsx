"use client";
import React, { useState } from "react";
import cls from "./styles.module.scss";

const DetailGallery = () => {
  const [selectedPicture, setSelectedPicture] = useState(0);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={cls.gallery}>
      <div className={cls.gallery_list}>
        {arr.slice(0, 5).map((pic, index) => (
          <div key={index} className={cls.img}>
            <img src="" alt="" />
          </div>
        ))}
      </div>
      <div className={cls.selected_picture}>
        <img src="" alt="" />
      </div>
    </div>
  );
};
export default DetailGallery;
