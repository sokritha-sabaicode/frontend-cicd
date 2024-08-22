"use client";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/navigation";


import Navbar from "../components/Navbar";

interface Product {
  id: number;
  title: string;
  thumbnailUrl: string;
}
const ClientComponent: React.FC = () => {
  const Router=useRouter()
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page,setPage]=useState<number>(1)
  const fetchProducts = async (page:number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=5`
      );
      if (!response.ok) {
        throw new Error("network respone was not ok");
      }
      const data = await response.json();
      setProduct((prevProducts)=>[...prevProducts,...data]);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(page);
  },[]);
   const handleLoadMore=()=>{
    const nextPage=page+1;
    setPage(nextPage);
    fetchProducts(nextPage)
  }
  const handleClickImg=(id:number)=>{
    Router.push(`/client-component/${id}`)
  }
  if (loading) {
    return <div>Loading....</div>;
  }
  if(error){
    throw new Error('something error')
  }
  return (
    <div className="w-full">
      <ul className=" flex flex-wrap gap-4 m-auto w-5/6 ">
        {products.map((e) => (
          <div key={e.id}>
            <h1>{e.id}</h1>
            <div className="bg-white w-[200px] h-[200px] " onClick={()=>handleClickImg(e.id)} >
              <img className="w-full h-full" src={e.thumbnailUrl} />
            </div>
          </div>
        ))}
      </ul>
      <button className="bg-green-600 text-white p-2 flex mt-[10px] m-auto" onClick={handleLoadMore} disabled={loading} >Load More</button>
    </div>
  );
};

export default ClientComponent;
