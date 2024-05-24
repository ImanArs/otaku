"use client"
import React, { useState, useEffect, useCallback, useMemo } from "react";
import cls from "./styles.module.scss";
import useProduct from "@/hook/UseProduct";
import Sidebar from "./ui/Sidebar";
import { Search } from "@/shared/ui/Search";
import { ProductCard } from "@/shared/ui/ProductCard";

interface Product {
  id: number;
  images: { id: number; image: string }[] | null;
  category: {
    id: number;
    name: string;
    codename: string;
    is_active: boolean;
  };
  sub_category: {
    id: number;
    name: string;
    codename: string;
    is_active: boolean;
  } | null;
  title: string;
  description: string;
  price: number;
  views: number;
}

const CatalogPage: React.FC = () => {
  const [categoryCodename, setCategoryCodename] = useState<string | null>(null);
  const products: Product[] = useProduct();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathSegments = window.location.pathname.split('/');
      const codename = pathSegments[pathSegments.length - 1];
      setCategoryCodename(codename);
    }
  }, []);

  const filterProducts = useCallback((product: Product) => {
    return product.category.codename === categoryCodename ||
      (product.sub_category && product.sub_category.codename === categoryCodename);
  }, [categoryCodename]);

  const filteredProducts = useMemo(() => {
    return categoryCodename && categoryCodename !== 'catalog' ? products.filter(filterProducts) : products;
  }, [categoryCodename, products, filterProducts]);

  return (
    <main className={cls.catalogPage}>
      {/* <div className={cls.sidebarBlock}>lol</div> */}
      <div className={cls.sidebarBlock}>
      <Sidebar />
      </div>
      <div className={cls.catalogContent}>
        <Search reversed className={cls.search} searchArr={products} />
        <div className={cls.cards}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {
          filteredProducts.length === 0 && (
            <div className={cls.noProducts}>
              <h2>Нет товаров</h2>
            </div>
          )
        }
      </div>
    </main>
  );
};
export default CatalogPage;