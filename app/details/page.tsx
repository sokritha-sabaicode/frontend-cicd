// Use client-side hooks if needed
"use client";

import React, { useEffect, useState } from 'react';

interface DetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: React.FC<DetailProps> = ({ params }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/details/${params.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found</div>;

  return (
    <div>
      <h1>Details for ID: {params.id}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default ProductDetail;
