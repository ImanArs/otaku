"use client"
import React, { useState, useEffect } from "react";
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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    // Access window only on the client-side
    if (typeof window !== "undefined") {
      const pathSegments = window.location.pathname.split('/');
      const codename = pathSegments[pathSegments.length - 1];
      setCategoryCodename(codename);
    }
  }, []);

  useEffect(() => {
    if (categoryCodename && categoryCodename !== 'catalog') {
      const filtered = products.filter(
        (product) =>
          product.category.codename === categoryCodename ||
          (product.sub_category && product.sub_category.codename === categoryCodename),
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryCodename, products]);

  return (
    <div className={cls.catalogPage}>
      <div className={cls.sidebar}>
        <Sidebar />
      </div>
      <div className={cls.catalogContent}>
        <Search reversed className={cls.search} searchArr={products} />
        <div className={cls.cards}>
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CatalogPage;
