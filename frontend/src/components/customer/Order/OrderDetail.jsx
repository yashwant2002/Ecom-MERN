import React from 'react'
import AddressCard from '../Cart/AddressCard'
import OrderTacker from './OrderTacker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
    <div className=' px-5 lg:px-20'>
        <div>
        <h1 className='font-bold text-xl py-2'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTacker activeStep={1} />
        </div>
        <Grid container className=' space-y-5'>
            {
                [1, 1, 1, 1,].map((item)=><Grid key={item} item container className=' shadow-xl rounded-md p-5 border' sx={{alignContent:"center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://chawkbazar.vercel.app/assets/images/products/p-11-m.png'/>

                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>allfj aljdl aljld aljld</p>
                            <p className=' space-x-5 opacity-50 text-xs font-semibold'>
                                <span>Color : Pink</span>
                                <span> Size : M</span>
                                
                            </p>
                            <p>Seller : Linaria</p>
                            <p>Price : $100</p>
                        </div>
                    </div>
                </Grid>
                <Grid item>
                    <Box sx={{color: deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize: "2rem"}} className='px-2' />
                        <span>Rate & Review Product</span>
                    </Box>
                </Grid>
            </Grid>)
            }
        </Grid>
    </div>
  )
}

export default OrderDetail