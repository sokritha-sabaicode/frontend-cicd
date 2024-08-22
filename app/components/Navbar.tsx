import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=' p-2 bg-black '>
     <div className='flex m-auto w-5/6 gap-4'>
     <div className='w-[70px]  '>
        <img className='rounded-[100px]' src="https://static.vecteezy.com/system/resources/previews/017/047/854/original/cute-cat-illustration-cat-kawaii-chibi-drawing-style-cat-cartoon-vector.jpg" alt="" />
      </div>
      <ul className='flex space-x-10 p-4 text-[20px] text-white'>
        <li className='text-red-400 p-1 px-2 hover:bg-white hover:text-black'><Link href="/home">home</Link></li>
        <li className='p-1 px-2  hover:bg-white hover:text-black'><Link href="/about">about</Link></li>
        <li className='p-1 px-2  hover:bg-white hover:text-black'><Link href="/service">service</Link></li>
      </ul>
     </div>
    </nav>
  )
}

export default Navbar