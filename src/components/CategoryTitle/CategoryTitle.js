import React from 'react'

//mui:
import Container from '@mui/material/Container'

const CategoryTitle = ({category}) => {
    return (
        <h2>{category.name}</h2>
    )
}

export default CategoryTitle