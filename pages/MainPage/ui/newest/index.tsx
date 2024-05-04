"use client";
import React from "react";
import cls from "./styles.module.scss";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MainNewest = () => {
  return (
    <div className={cls.newest}>
      <div className={cls.newest_wrapper}>
        <div className={cls.left}>
          <div className={cls.img}>
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="mySwiperBlack sm"
            >
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={cls.img}>
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="mySwiperBlack sm"
            >
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={cls.right}>
          <div className={cls.img}>
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="mySwiperBlack"
            >
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
                <div className={cls.info}>
                  <h2>Lorem, ipsum dolor.</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, officia!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt=""
                />
                <div className={cls.info}>
                  <h2>Lorem, ipsum dolor.</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, officia!
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainNewest;
