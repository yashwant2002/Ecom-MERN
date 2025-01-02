import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {

    const navigate = useNavigate()

  return (
    <div onClick={navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://chawkbazar.vercel.app/assets/images/products/p-11-m.png' />
                    <div className='ml-5 space-y-2'>
                        <p>Armani Veni Vidi Vici</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>$100</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon className='text-green-600 mr-2' sx={{width:"15px", height:"15px"}}/>
                    <span>Delivered On Mar 03</span>
                    
                </p>
                <p>Your Item Has Been Delivered</p>
                </div>}
                
               {false && <p>
                    <span>
                        Expected Delivery On Mar 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard