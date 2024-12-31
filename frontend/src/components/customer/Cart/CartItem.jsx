import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-ful h-full object-cover object-top' src='https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-14-md.png&w=384&q=100' />
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>ljlldk aljkjldjklj aljlkjk akdkklj</p>
                <p className=' opacity-70'>Size : L, White</p>
                <p className='opacity-70 mt-2'>Seller : H&M </p>
                <div className="flex space-x-5 items-center pt-6  text-gray-900 mt-6">
                    <p className=" font-semibold">₹199</p>
                    <p className="opacity-50 line-through">₹1000</p>
                    <p className="text-green-600 font-semibold">80% off</p>
              </div>
            </div>
            
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton  sx={{color:" RGB(145 85 253)"}}><RemoveCircleOutlineIcon/></IconButton>
                    <span className=' py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{color:" RGB(145 85 253)"}}><AddCircleOutlineIcon/></IconButton>
                    
                </div>
                <div>
                    <Button>REMOVE</Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem