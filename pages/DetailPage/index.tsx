import React from 'react'
import { ProductVariantCard } from './ui/ProductVariantCard'
import { DetailGallery } from './ui/Gallery'
import { Button } from '@/shared/ui/Button'
import cls from './styles.module.scss'
import { ProductCard } from '@/shared/ui/ProductCard'

export const DetailPage = () => {
  return (
    <main>
      <div className={cls.detail}>
        <DetailGallery />
        <div className={cls.info}>
          <div className={cls.heading}>
            <h2>Значок Наруто название название...</h2>
            <h2>55 сом</h2>
            <Button type='red'>Добавить в корзину</Button>
          </div>
          <div className={cls.variants}>
            {[1,2,3,4,5,6].map((card, index) => (
              <ProductVariantCard key={index} />
            ))}
          </div>
          <div className={cls.options}>
            <ul>
              {[1,2,3,4,5,6].map((option, index) => (
                <li key={index}>
                  <p>lol</p>
                  <div className={cls.line} />
                  <span>значение</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <section className={cls.also_look}>
        <h2>смотрите так же</h2>
        <div className={cls.wrapper}>
          {/* {[1,2,3,4,5].map((card, index) => (
            <ProductCard key={index} />
          ))} */}
        </div>
      </section>
    </main>
  )
}