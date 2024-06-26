'use client';
import React from 'react';
import cls from '../../pages/MainPage/ui/newest/styles.module.scss';

import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import s from './aboutcom.module.scss';
import { Button } from '@/shared/ui/Button';
import Link from 'next/link';

export default function AboutComponents() {
  return (
    <div className={s.about}>
      <h1>О нас</h1>
      <div className={s.about_one}>
        <div className={s.about_one_text}>
          <p>
            Приветствуем вас в мире &ldquo;OTAKU&ldquo; – вашем надежном проводнике по вселенной
            аниме, где любовь к японской культуре встречает страсть к высококачественной атрибутике.
            Мы – команда энтузиастов из сердца Бишкека, и наша миссия – делать мир ярче и ближе к
            мечтам каждого отаку.
          </p>
          <br />
          <br />
          <p>
            &ldquo;О нас&ldquo; – это не просто раздел на сайте, это история о людях, которые
            вложили душу в создание места, где каждый предмет пронизан духом приключений и великих
            саг. Наш теплый коллектив – это не только команда профессионалов, но и настоящие фанаты
            аниме, которые знают о своем деле абсолютно все.
          </p>
        </div>
        <div className={s.newest} style={{ background: 'transparent' }}>
          <div className={s.newest_wrapper}>
            <div className={s.right}>
              <div className={s.img}>
                <Swiper
                  modules={[Pagination, A11y]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  className="mySwiper">
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
          </div>
        </div>
      </div>
      <div className={s.about_two}>
        <div>
          <p>
            Мы гордимся тем, что предлагаем широчайший ассортимент продукции: от эксклюзивных
            фигурок до авторских принтов и аксессуаров. В &ldquo;OTAKU&ldquo; каждый товар проходит
            тщательный отбор, чтобы вы могли наслаждаться истинным качеством и долговечностью.
          </p>
          <Button type="red">
            <Link href="/catalog">КАТАЛОГ</Link>
          </Button>
        </div>
      </div>
      <div className={s.about_thee}>
        <h1>Наши магазины</h1>
        <div className={s.about_thee_text}>
          <div className={s.newest} style={{ background: 'transparent' }}>
            <div className={s.newest_wrapper}>
              <div className={s.right}>
                <div className={s.img}>
                  <Swiper
                    modules={[Pagination, A11y]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="mySwiper">
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
            </div>
          </div>
          <div className={s.about_thee_text_box}>
            <h2>
              Г. Бишкек, <br />
              <br />
              цум УЛ. Шопокова, 91 <br />
              <br />
              -1 этаж, L-40 бутик
            </h2>
            <br />
            <span>
              ПН-СБ с 10.00 до 22.00 <br /> <br />
              +7(900)123-45-67
              <br />
              <br />
              +1(234)567-89-10
            </span>
            <Link href="https://2gis.kg/bishkek/inside/70030076176806058/firm/70000001064772335?floor=0&m=74.614961%2C42.876732%2F19.97">
              <Button type="black"> Oткрыть карту</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={s.about_thee}>
        <h5>
          Наш самый главный филиал магазина, с него всё началось, мы очень любим это место и ждём
          Вас к нам в гости!
          <br />
          <br />
          &ldquo;О нас&ldquo; – это не просто раздел на сайте, это история о людях, которые вложили
          душу в создание места, где каждый предмет пронизан духом приключений и великих саг. Наш
          теплый коллектив – это не только команда профессионалов, но и настоящие фанаты аниме,
          которые знают о своем деле абсолютно все.&ldquo;О нас&ldquo; – это не просто раздел на
          сайте, это история о людях, которые вложили душу в создание места, где каждый предмет
          пронизан духом приключений и великих саг. Наш теплый коллектив – это не только команда
          профессионалов, но и настоящие фанаты аниме, которые знают о своем деле абсолютно
          все.&ldquo;О нас&ldquo; – это не просто раздел на сайте, это история о людях, которые
          вложили душу в создание места, где каждый предмет пронизан духом приключений и великих
          саг. Наш теплый коллектив – это не только команда профессионалов, но и настоящие фанаты
          аниме, которые знают о своем деле абсолютно все.&ldquo;О нас&ldquo; – это не просто раздел
          на сайте, это история о людях, которые вложили душу в создание места, где каждый предмет
          пронизан духом приключений и великих саг. Наш теплый коллектив – это не только команда
          профессионалов, но и настоящие фанаты аниме, которые знают о своем деле абсолютно
          все.&ldquo;О нас&ldquo; – это не просто раздел на сайте, это история о людях, которые
          вложили душу в создание места, где каждый предмет пронизан духом приключений и великих
          саг. Наш теплый коллектив – это не только команда профессионалов, но и настоящие фанаты
          аниме, которые знают о своем деле абсолютно все.&ldquo;О нас&ldquo; – это не просто раздел
          на сайте, это история о людях, которые вложили душу в создание места, где каждый предмет
          пронизан духом приключений и великих саг. Наш теплый коллектив – это не только команда
          профессионалов, но и настоящие фанаты аниме, которые знают о своем деле абсолютно
          все.&ldquo;О нас&ldquo; – это не просто раздел на сайте, это история о людях, которые
          вложили душу в создание места, где каждый предмет пронизан духом приключений и великих
          саг. Наш теплый коллектив – это не только команда профессионалов, но и настоящие фанаты
          аниме, которые знают о своем деле абсолютно все.
        </h5>
      </div>
    </div>
  );
}
