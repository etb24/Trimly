import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Loader() {
  return (
    <div className='flex justify-center items-center w-full h-[450px]'>
        <div className='flex flex-col items-center gap-1'>
             <RotatingLines
                visible={true}
                height="65"
                width="65"
                strokeWidth="5"
                strokeColor='#6366f1'
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    </div>           
   
  )
}

export default Loader