import React, { createContext } from 'react'

export interface CartContextType {
    userId: number,
    username: string
  // add other properties as needed
}
const CartContext = createContext<CartContextType>({
    userId: 1,
    username: ''
});
export default CartContext;
