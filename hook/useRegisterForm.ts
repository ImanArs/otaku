import Router from 'next/router';
import { useState } from 'react';

interface FormData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  password2: string;
}

const useRegisterForm = () => {

  const [formData, setFormData] = useState<FormData>({
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    password2: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.password2) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://13.60.49.147:8000/api/users/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      Router.push('/'); 
      setFormData({
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        password2: ''
      });

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return { formData, setFormData, handleInputChange, handleSubmit };
};

export default useRegisterForm;