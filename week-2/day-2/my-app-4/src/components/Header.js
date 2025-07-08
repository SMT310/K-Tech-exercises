import React from 'react'
import Footer from './Footer'

function Header(props) {
    return (
        <div>
            <Footer id={props.id} name={props.name} />
        </div>
    )
}

export default Header