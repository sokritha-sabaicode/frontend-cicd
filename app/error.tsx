"use client"
import React from 'react'

const error = ({error}:{error:Error }) => {
  return (
    <div >hi
        {error.message}
    </div>
  )
}

export default error