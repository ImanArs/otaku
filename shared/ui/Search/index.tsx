'use client'
import React, { useState } from 'react';
import cls from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  reversed?: boolean;
  placeholder?: string;
  btnTitle?: string;
  value?: string;
  className?: string;
  onChange?: () => void;
  searchArr?: any[];
}

export const Search = (props: Props) => {
  const { reversed = false, placeholder, btnTitle, value, className, searchArr, onChange } = props;
  const [openSearch, setOpenSearch] = useState(false);
  const [searchResults, setSearchResults] = useState(searchArr || []);

  const filterSearch = (title: string) => {
    const filteredResults: any = searchArr?.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
    setSearchResults(filteredResults);
    if (title === '') {
      setOpenSearch(false)
    }
  }
  return (
    <div className={classNames('', {
      [cls.search_reversed]: reversed
    }, [cls.search, className])}>
      <button onClick={() => setOpenSearch(!openSearch)}>{btnTitle ? btnTitle : 'Поиск в каталоге'}</button>
      <input 
        type="text" 
        name="" 
        id="" 
        value={value}
        placeholder={placeholder ? placeholder : 'Начните вводить название товара'}
        onChange={(e) => filterSearch(e.target.value)}
      />
      <div className={cls.search_results}>
      {
        openSearch ? (
            searchResults?.map((item, index) => (
                <div key={index} className={cls.search_result}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
            ))
        ) : (
          <p>ничего не найдено</p>
        )
      }
      </div>
    </div>
  )
}