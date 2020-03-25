import React from "react"

const NavMenu = () => {

    setTimeout(() => {
        let content = document.querySelector(".nav-menu");
        content.classList.remove('hidden');
        console.log(content)
    }, 2000)

    return (
        <div className="nav-menu hidden">
            <h1>freeCodeCamp Nashville</h1>
            <ul>
                <li>About Us</li>
                <li>Events</li>
                <li>Sponsor Us</li>
            </ul>
        </div>
    )
}

export default NavMenu