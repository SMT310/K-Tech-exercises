import React from 'react'

function Footer(props) {
    return (
        <div>
            <span>Welcome: {props.name}, Id:{props.id}<br /></span>
            <span> to Like Lion class</span>
        </div>
    )
}

export default Footer