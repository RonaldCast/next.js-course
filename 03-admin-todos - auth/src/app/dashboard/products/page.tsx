import React from 'react'
import { ProductCard } from '../../../products'
import { products } from '@/products/data/product'

export default function ProductPage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {/*  */}
      {
        products.map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))
      }
    </div>
  )
}
