import React from 'react'
import './directory.style.scss'
import CategoryItem from '../category-item/category-items.component'

function Directory({categories}) {
  return (
    <div className='categories-container'>
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
  )
}

export default Directory