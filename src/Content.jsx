import { Grid } from '@mui/material'
import React from 'react'
import CoffeeCard from './CoffeeCard'
import constants from './constants'

const Content = () => {
    // const coffeeInfo = {...constants}
  return (
  <Grid container mt={1} spacing={4}>
    {/* <Grid item xs={12} sm={4}>
        {coffeeInfo.map((items) => (
            <CoffeeCard title={items.title} subtitle={items.price} description={items.description} avatarsrc={items.avatarUrl} imgsrc={items.imageUrl}/>
            ))}
    </Grid> */}
    
        {constants.map((items) => (
            <Grid item xs={12} sm={4}>
            <CoffeeCard {...items}/>
            </Grid>
            ))}
    
    
    
  </Grid>
    
  )
}

export default Content