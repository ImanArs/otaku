import React from 'react'
// import { ProductVariantCard } from './ui/ProductVariantCard'
// import { DetailGallery } from './ui/Gallery'
import { Button } from '@/shared/ui/Button'
import cls from './styles.module.scss'
import { ProductCard } from '@/shared/ui/ProductCard'
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getPostById } from '@/hook/usePro'
import { DetailGallery } from '@/pages/DetailPage/ui/Gallery';
import { ProductVariantCard } from '@/pages/DetailPage/ui/ProductVariantCard';
type Props = {
  params: {
    id: string;
  };
};



export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPostById(id);

  return {
    title: post.title,
  };
}

async function removePost(id: string) {
  "use server";
  await fetch(`http://localhost:3300/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/");
  redirect("/");
}


export default async function DetailPage({ params: { id } }: Props) {
  const post = await getPostById(id);
  console.log(post);
  
  return (
    <main>
      <div className={cls.detail}>
        <DetailGallery />
        <div className={cls.info}>
          <div className={cls.heading}>
            <h2>{post.title}</h2>
            <h2>{post.price}</h2>
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