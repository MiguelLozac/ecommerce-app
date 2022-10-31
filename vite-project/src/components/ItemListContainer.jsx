import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className='card mt-5'> 
        <ItemCount/> 
    </div>
  )
}
