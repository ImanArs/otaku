import React from 'react'

import { Button } from '@/shared/ui/Button'
import { ProductCard } from '@/shared/ui/ProductCard'
import { Search } from '@/shared/ui/Search'

import cls from './styles.module.scss'

export const MainBestSellers = () => {
  const newestData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className={cls.bestsellers}>
      <div className={cls.top}/>
      <Search />
      <div className={cls.bestsellers_wrapper}>
        {newestData.slice(0,10).map((card, index) => (
          <ProductCard key={index} />
        ))}
        <Button className={cls.bestsellers_button} type='black'>Больше</Button>
      </div>
    </div>
  )
}
