import React from 'react'

function Navigation() {
  return (
    <nav className="flex flex-row items-center justify-around pt-1.5%">
        {/* Left side of navigation */}
        <div>
            <h1>Brainwave.io</h1>
        </div>

        {/* right side of navigation */}
        <div>
            <ul className="flex justify-evenly items-center flex-row">
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