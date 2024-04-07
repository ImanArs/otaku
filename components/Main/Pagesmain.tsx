import { Button } from '@/shared/ui/Button';
import s from './pagesmain.module.scss';

export default function Pagesmain() {
  return (
    <div className={s.main}>
      <div className={s.main_one}>
        <div className={s.qq}>
          <div className={s.qr}>
            <img src="/assets/images/OTAKU.svg" alt="logo" />
            <img src="/assets/images/OTAKU inc..svg" alt="logo" />
          </div>
          <img className={s.imgkrug} src="/assets/images/111.png" alt="logo" />
        </div>
        <div className={s.qwe}>
          <h3>Всё, что связано с аниме, можно найти здесь.</h3>
          <div className={s.qwe_red}>
            <p>...</p>
            <div>
              <span>Каталог</span>
              <img src="/assets/images/red-button.png" alt="logo" />
            </div>
          </div>
          <div className={s.qwe_black}>
            <img
              className={s.qwe_black_one}
              src="/assets/images/button-black.png"
              alt="logo"
            />
            <div className={s.qwe_black_img}>
              <img src="/assets/icons/FAN SERVICE {LOADED}.svg" alt="logo" />
              <img
                src="/assets/icons/BEACH EPISODE PROCESSING....svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.main_two}>
        <img src="/assets/images/qwe.png" alt="logo" />
      </div>
    </div>
  );
}
