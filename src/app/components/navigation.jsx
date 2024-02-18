import React from 'react'

function Navigation() {
  return (
    <nav>
        <div className="left">
            <h1>Brainwave.io</h1>
        </div>

        <div className="right">
            <ul>
                <li>Demos</li>
                <li>Pages</li>
                <li>Support</li>
                <li>Contact</li>
                <li>Sign In</li>
                <a href="#">Sign Up</a>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation