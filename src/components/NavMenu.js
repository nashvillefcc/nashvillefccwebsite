import React from "react"
import { Link } from "react-router-dom";

const NavMenu = () => {

    setTimeout(() => {
        let content = document.querySelector(".nav-menu");
        content.classList.remove('hidden');
        console.log(content)
    }, 2000)

    return (
        <div className="nav-menu hidden">
            <h1>freeCodeCamp Nashville</h1>
            <nav>
                <ul>
                    <li>About Us</li>               {/* Ideally these will be links/routes */}
                    <Link className="nav-link" to="/events">
                    Events
                    </Link>
                    <li>Sponsor Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu