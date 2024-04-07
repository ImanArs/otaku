import Image from 'next/image';
import styles from './page.module.css';
import Pagesmain from '@/components/Main/Pagesmain';
import Twomain from '@/components/Main/twomain';
import { Button } from '@/shared/ui/Button';
import { Label } from '@/shared/ui/Label';

export default function Home() {
  return (
    <>
      <Pagesmain />
      <Twomain />
      <Button type='red'>123</Button>
      <Button className='primary' type='red'>КАТАЛОГ</Button>
      <Button className='primary' type='black'>КАТАЛОГ</Button>
      <Button className='primary1' type='black'>КАТАЛОГ</Button>
      <Button className='primary2' type='black'>КАТАЛОГ</Button>
      <Label type='red'>lol</Label>
      <Label type='black'>товар закончился</Label>
    </>
  );
}
