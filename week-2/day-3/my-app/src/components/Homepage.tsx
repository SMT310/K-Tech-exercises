import React, { useContext } from 'react'
import CartContext from './CartContext'

export default function Homepage() {
    const cartInfo = useContext(CartContext);

    return (
      <>
            User Id: {cartInfo.userId}
            <br></br>
            Username: {cartInfo.username}
      </>
    );
}
