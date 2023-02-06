import React from "react";

const Logo =({type='default'}) => {
    return (
        <div>
            {type === 'default' && <img src='./images/logo.svg' alt="Default logo"></img>} 
            {type ==='muted' && <img src='./images/logo-muted.svg' alt="Muted logo"></img>}
        </div>
    )
}

export {Logo};