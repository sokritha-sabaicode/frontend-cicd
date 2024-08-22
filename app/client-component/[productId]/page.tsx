
"use client";
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

interface PageProps {
  params: {
    productId: number;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.productId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found</div>;

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold">Title:{product.title}</h1>
      <p className="mt-4 text-[20px] ">Product ID: <span className='text-red-600'>{product.id}</span> </p>
      <div className="bg-white w-[400px] h-[400px] mt-4">
        <img className="w-full h-full" src={product.url} alt={product.title} />
      </div>
    </div>
  );
};

export default Page;
