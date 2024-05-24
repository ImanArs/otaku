import React, { useState } from 'react';
import cls from './styles.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
}

interface SearchProps {
  reversed?: boolean;
  className?: string;
  searchArr: Product[];
}

export const Search: React.FC<SearchProps> = ({ reversed, className, searchArr }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openSearch, setOpenSearch] = useState<boolean>(false); 
  const filteredProducts = searchArr?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSearch = () => {
    // setOpenSearch(!openSearch); 
    setSearchTerm(''); 
  };

  return (
    <>
      <div className={classNames('', {
        [cls.search_reversed]: reversed
      }, [cls.search, className])}>
        <button onClick={toggleSearch}>
          Поиск в каталоге
        </button>
        {true && ( 
          <>
            <input 
              type="text" 
              name="" 
              id="" 
              value={searchTerm}
              placeholder='Начните вводить название товара'
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className={cls.search_results}>
              {searchTerm && (
                <ul>
                  {filteredProducts?.map(product => (
                    <li key={product.id}>
                      <Link href={`/detail/${product.id}`}>
                      {product.title}
                      </Link>
                    
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
