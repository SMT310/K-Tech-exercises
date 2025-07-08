import React from 'react'

const products = null;

function ProductList() {
    return (
        <ul>
            {products?.map((items) => {
                <li>
                    {items.id}, {items.name}
                </li>
            })}
        </ul>
    )
}

export default ProductList