/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import cls from './styles.module.scss';
import HeartIcons from '@/public/assets/icons/heart_white.svg';
import classNames from 'classnames';
import { Label } from '../Label';
import Link from 'next/link';
import { useProductcard } from '@/hook/useProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: { codename: string };
  subcategory?: { codename: string };
  images: { id: number; image: string }[] | null;
}
const baseURL = 'http://13.60.49.147:8000/';

export const ProductCard = ({ product }: { product: Product }) => {
  const {addToFavorite, getAllFavorites, removeFavorite, favorites} = useProductcard()
  const [selectedPicture, setSelectedPicture] = useState(0);
  
  useEffect(() => {
    getAllFavorites()
  }, [favorites, getAllFavorites])
  const isInFavourite = favorites.some((item) => item.id === product.id);

  const quantity = false;
  const sale = false;

  const categoryCodename = product.category.codename;
  const productName = product.title;

  const subcategoryCodename = product.subcategory ? product.subcategory.codename : productName;

  if (!product?.images || product.images.length === 0) {
    return <div className={cls.gallery}>No images available. {product.title}</div>;
  }
  
  const handleFavClick = () => {
    if (isInFavourite) {
      removeFavorite(product.id)
    } else {
      addToFavorite(product.id)
    }
  }

  const addFavourite = async () => {
    try {
      const response = await axios.get(
        `http://13.60.49.147:8000/favorites/products/add/${product.id}/`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200 || 201) {
        setIsFavourite(true);
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cls.card}>
        {sale && (
          <Label type="red" className={cls.card_label}>
            скидка -15%
          </Label>
        )}
        {quantity && (
          <Label type="black" className={cls.card_label}>
            нет в наличии
          </Label>
        )}
        <div className={cls.card_img}>
        <Link href={`/detail/${categoryCodename}/${subcategoryCodename}/${product.id}`}>
          <img
            src={`${baseURL}${product.images[selectedPicture].image}`}
            alt={`Selected Product Image ${selectedPicture + 1}`}
          />
        </Link>
        
          <button
            onClick={handleFavClick}
            className={classNames(
              '',
              {
                [cls.active_heart]: isInFavourite,
              },
              [cls.heart],
            )}
            >
            <HeartIcons />
          </button>
          <div className={cls.triangle_wrapper}>
            <div className={cls.triangle} />
            <div className={cls.triangle} />
            <div className={cls.triangle} />
          </div>
          <div className={cls.card_info}>
            <div className={cls.card_info_wrapper}>
              <h3>{product.title}</h3>
              <h4>{product.price} сом</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      <div className={cls.card_actions}>
        <button onClick={() => console.log('купить')}>купить</button>
        <button>
          <Link href={`/detail/${categoryCodename}/${subcategoryCodename}/${product.id}`}>
            Смотреть
          </Link>
        </button>
      </div>
    </div>
  );
};
