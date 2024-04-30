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
    </>
  );
}
