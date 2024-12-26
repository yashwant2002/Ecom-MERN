import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:"56", height:"56", bgcolor:"#9155fd"}}>Y</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Yash</p>
                        <p className='opacity-70'>April 3, 2024</p>
                    </div>
                </div>
                <Rating readOnly value={3} name='half-rating'/>
                <p >The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release..</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ReviewCard
