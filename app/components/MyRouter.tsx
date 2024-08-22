'use client';
import { useRouter } from 'next/navigation'
import React from 'react'

const MyRouter = () => {
    const route=useRouter();
    const openLink=()=>{
      route.push('/home')
    }

  return (
    <div className='flex gap-3 p-1'>
      <button className='bg-sky-300 0 p-2' onClick={openLink}> home</button>
      <button className='bg-sky-300 0 p-2' onClick={()=>route.push('/about')}> about</button>
      <button className='bg-sky-300 0 p-2' onClick={()=>route.replace('/detail')}> detail</button> {/** replace no history */}
      <button className='bg-sky-300 0 p-2' onClick={()=>route.back()}> back</button>
      <button className='bg-sky-300 0 p-2' onClick={()=>route.forward()}> forward</button>
    </div>
  )
}

export default MyRouter