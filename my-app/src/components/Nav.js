import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Nav.css'

function Nav () {
    return (
        <nav className ="nav">
             <Link className ="nav-logo" to ="/">
            </Link>

            <div className = "nav-links">
                <Link className ="nav-style" to ="/">
                    <p>HOME</p>
                </Link>
                <Link className ="nav-style" to ="/about">
                    <p>ABOUT</p>
                </Link>
                <Link className ="nav-style" to ="/Resume">
                    <p>RÉSUMÉ</p>
                </Link>
                <Link className ="nav-style" to ="/Contact">
                    <p>CONTACT</p>
                </Link>
            </div>
        </nav>
    )

}

export default Nav