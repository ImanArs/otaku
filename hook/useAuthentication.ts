import { useState } from 'react';

const useAuthentication = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const authenticate = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://13.60.49.147:8000/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      // Если нужно обработать успешную аутентификацию, например, получить токен, то это можно сделать здесь

    } catch (error) {
      setError('Failed to log in');
    } finally {
      setIsLoading(false);
    }
  };

  return { authenticate, error, isLoading };
};

export default useAuthentication;
