import React from 'react';

interface Product {
  id: number;
  title: string;
  thumbnailUrl: string;
}

interface ServerComponentProps {
  searchParams: {
    page?: string;
  };
}

const ServerComponent = async ({ searchParams }: ServerComponentProps) => {
  const page = parseInt(searchParams.page || '1', 10);
  const limit = 20; // Items per page
  const offset = (page - 1) * limit;

  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=${limit}`);
  const data: Product[] = await response.json();

  // Simulate a total count (assuming 5000 items in total)
  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div className="w-5/6 m-auto flex flex-wrap gap-3 mt-5 p-2 text-[12px]">
      {data.map((e: Product) => (
        <div key={e.id} className="bg-orange-50 p-1 w-[200px]">
          <div>
            <h1>id: {e.id}</h1>
            <p>title: {e.title}</p>
          </div>
          <div>
            <img src={e.thumbnailUrl} alt={e.title} />
          </div>
        </div>
      ))}
      <div className="w-full flex justify-center gap-2 m-auto mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <a
            key={index + 1}
            href={`?page=${index + 1}`}
            className={`p-2 font-bold ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-pink-300 text-white'}`}
          >
          {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServerComponent;
