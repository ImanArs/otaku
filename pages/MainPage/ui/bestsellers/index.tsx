'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { ProductCard } from '@/shared/ui/ProductCard';
import { Search } from '@/shared/ui/Search';
import cls from './styles.module.scss';
import useProduct from '@/hook/UseProduct';

export const MainBestSellers = () => {
  const products = useProduct();

  return (
    <div className={cls.bestsellers}>
      <div className={cls.top} />
      <Search />
      <div className={cls.bestsellers_wrapper}>
       {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
        <Button className={cls.bestsellers_button} type='black'>
          Больше
        </Button>
    </div>
  );
};
