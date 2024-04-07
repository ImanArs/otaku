import Image from 'next/image';
import styles from './page.module.css';
import Pagesmain from '@/components/Main/Pagesmain';
import Twomain from '@/components/Main/twomain';

export default function Home() {
  return (
    <>
      <Pagesmain />
      <Twomain />
    </>
  );
}
