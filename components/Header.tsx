import s from './header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <img
        className={s.header_images}
        src="/assets/images/Rectangle 43.svg"
        alt=""
      />
      <div className={s.header_blocks}>
        <img src="/assets/images/logo.svg" alt="logo" />
        <div className={s.header_blocks_text}>
          <h3>MENU</h3>
          <div className={s.lini}>
            <img src="/assets/images/lini-menu.svg" alt="logo" />
            <img src="/assets/images/lini-menu.svg" alt="logo" />
            <img src="/assets/images/lini-menu.svg" alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
}
