
  
  export const getPostById = async (id: string) => {
    const response = await fetch(
      `http://13.60.49.147:8000/api/products/get/${id}`,
      { headers: { 'Content-type': 'application/json' } }
    );
  
  
    return response.json();
  }
  
  export const getPostsBySearch = async (search: string) => {
    const response = await fetch(
      `/api/posts?q=${search}`
    );
  
  
    return response.json();
  };