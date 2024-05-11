import React from 'react';
import ProductVariantCard from './ui/ProductVariantCard';
import { Button } from '@/shared/ui/Button';
import s from '@/app/detail/[category]/styles.module.scss';
import { Metadata } from 'next';
import { getPostById } from '@/hook/usePro';
import DetailGallery from './ui/Gallery';
type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getPostById(id);

  return {
    title: post.title,
  };
}

export default async function DetailPage({ params: { id } }: Props) {
  const post = await getPostById(id);
  return (
    <main>
      <div className={s.detail}>
        <DetailGallery />
        <div className={s.info}>
          <div className={s.heading}>
            <h2>Значок Наруто название название...</h2>
            <h1>{post.title}</h1>
            <h2>55 сом</h2>
            <Button type="red">Добавить в корзину</Button>
          </div>
          <div className={s.variants}>
            {[1, 2, 3, 4, 5, 6].map((card, index) => (
              <ProductVariantCard key={index} />
            ))}
          </div>
          <div className={s.options}>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((option, index) => (
                <li key={index}>
                  <p>lol</p>
                  <div className={s.line} />
                  <span>значение</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <section className={s.also_look}>
        <h2>смотрите так же</h2>
        <div className={s.wrapper}>
          {/* {[1,2,3,4,5].map((card, index) => (
            <ProductCard key={index} />
          ))} */}
        </div>
      </section>
    </main>
  );
}
