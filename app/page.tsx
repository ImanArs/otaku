import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/shared/ui/Button';
import { Label } from '@/shared/ui/Label';
import { ProductCard } from '@/shared/ui/ProductCard';
import { MainPage } from '@/pages/MainPage';

export default function Home() {
  return (
    <>
      <MainPage />
      {/* <Button type='red'>123</Button>
      <Button className='primary' type='red'>КАТАЛОГ</Button>
      <Button className='primary' type='black'>КАТАЛОГ</Button>
      <Button className='primary1' type='black'>КАТАЛОГ</Button>
      <Button className='primary2' type='black'>КАТАЛОГ</Button>
      <Label type='red'>lol</Label>
      <Label type='black'>товар закончился</Label>
      <ProductCard /> */}
    </>
  );
}
