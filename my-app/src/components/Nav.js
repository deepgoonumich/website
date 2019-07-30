import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Nav.css'

function Nav () {
    return (
        <nav className ="nav">
             <Link className ="nav-logo" to ="/">
                 <p>logo</p>
            </Link>

            <ul className = "nav-links">
                <Link className ="nav-style" to ="/about">
                    <li>ABOUT</li>
                </Link>
                <Link className ="nav-style" to ="/Resume">
                    <li>RESUME</li>
                </Link>
                <Link className ="nav-style" to ="/Contact">
                    <li>CONTACT</li>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav