import React from 'react'
import { Sidebar } from './ui/Sidebar'
import { Search } from '@/shared/ui/Search'
import { ProductCard } from '@/shared/ui/ProductCard'
import cls from './styles.module.scss'

const mockData = [
  {id: 1, title: 'lol1', price: 150, description: 'lsadsdassada'},
  {id: 2, title: 'lol2', price: 150, description: 'lsadsdassada'},
  {id: 3, title: 'lol3', price: 150, description: 'lsadsdassada'},
  {id: 4, title: 'lol4', price: 150, description: 'lsadsdassada'},
  {id: 5, title: 'lol5', price: 150, description: 'lsadsdassada'},
  {id: 6, title: 'lol6', price: 150, description: 'lsadsdassada'},
  {id: 7, title: 'lol7', price: 150, description: 'lsadsdassada'},
  {id: 8, title: 'lol8', price: 150, description: 'lsadsdassada'},
  {id: 9, title: 'lol9', price: 150, description: 'lsadsdassada'},
  {id: 10, title: 'lol10', price: 150, description: 'lsadsdassada'}
];

export const CatalogPage = () => {
  return (
    <div className={cls.catalogPage}>
      <div className={cls.sidebar}>
      <Sidebar />
      </div>
      <div className={cls.catalogContent}>
        <Search reversed className={cls.search} searchArr={mockData} />
        <div className={cls.cards}>

        {mockData.map((card, i) => (
          <ProductCard key={i} product={card} />
        ))}
        </div>
      </div>
    </div>
  )
}
