import { useEffect, useState } from 'react';

const useCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://13.60.49.147:8000/api/categories/category/list/');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data.results);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();

    return () => {
    };
  }, []);

  return categories;
};

const useSubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await fetch('http://13.60.49.147:8000/api/categories/sub_category/list/');
        if (!response.ok) {
          throw new Error('Failed to fetch subcategories');
        }
        const data = await response.json();
        setSubCategories(data.results);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubCategories();

    return () => {
    };
  }, []);

  return subCategories;
};

export { useCategory, useSubCategory };
