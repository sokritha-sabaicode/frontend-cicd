import React from 'react';

interface Product {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

interface PageProps {
  params: {
    page: number;
  };
}

const Page = async ({ params }: PageProps) => {
  const limit = 10; // Number of items per page
  const page = params.page || 1; // Current page number

  // Fetch the products data based on the current page
  const fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data as Product[];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  const products = await fetchProducts();

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold">Product List</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow">
            <h2 className="font-bold text-xl">{product.title}</h2>
            <img className="w-full h-[200px] object-cover mt-2" src={product.thumbnailUrl} alt={product.title} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <a
          href={`/?page=${page - 1}`}
          className={`btn ${page === 1 ? 'invisible' : ''}`}
        >
          Previous
        </a>
        <a href={`/?page=${page + 1}`} className="btn">
          Next
        </a>
      </div>
    </div>
  );
};

export default Page;
