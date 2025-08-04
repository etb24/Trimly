import React from 'react'
import ShortItem from './ShortItem'

function ShortUrlList({data}) {
  return (
    <div className='my-6 space-y-4'>
        {data.map((item) => (
            <ShortItem key = {item.id} {...item}/>
        ))}
    </div>
  )
}

export default ShortUrlList