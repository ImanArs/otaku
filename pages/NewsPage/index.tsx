import React from "react";
import cls from "./styles.module.scss";

export const NewsPage = () => {
  return (
    <main className={cls.root}>
      <h1>Новости</h1>
      <section className={cls.news_wrapper}>
        {[1, 2, 3, 4, 5, 6].map((card, index) => (
          <article className={cls.news_card} key={index}>
            <div className={cls.card_wrapper}>
              <div className={cls.info}>
                <h3>OTAKU – ваш личный портал в мир японской</h3>
                <p>
                  В OTAKU на вас витает аромат зеленого чая и легкие нотки сакуры.
                  Каждый уголок здесь пропитан духом приключений и творчества. В
                  нашем магазине вы не просто покупатель, а член большой и дружной
                  семьи отаку, где каждый сотрудник готов поделиться своими
                  знаниями и помочь найти именно то, что зажглось в вашем
                  воображении.
                </p>
              </div>
              <div className={cls.img}></div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};
