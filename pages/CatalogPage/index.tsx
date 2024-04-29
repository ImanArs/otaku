"use client"
import React from 'react'
import { Sidebar } from './ui/Sidebar'
import { Search } from '@/shared/ui/Search'
import { ProductCard } from '@/shared/ui/ProductCard'
import cls from './styles.module.scss'
import useProduct from '@/hook/UseProduct'



export const CatalogPage = () => {
  const products = useProduct();
  return (
    <div className={cls.catalogPage}>
      <div className={cls.sidebar}>
      <Sidebar />
      </div>
      <div className={cls.catalogContent}>
        <Search reversed className={cls.search} searchArr={products} />
        <div className={cls.cards}>

        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        </div>
      </div>
    </div>
  )
}
