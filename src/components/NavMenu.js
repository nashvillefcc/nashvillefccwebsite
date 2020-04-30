import React from "react"
import { Link } from "react-router-dom";

const NavMenu = () => {

    setTimeout(() => {
        let content = document.querySelector(".nav-menu");
        content.classList.remove('hidden');
        console.log(content)
    }, 2000)

    return (
        <div className="nav-menu hidden flex inline mt-1 pl-2">
            <h1 className="flex text-4xl font-bold">freeCodeCamp Nashville</h1>

            <nav>
                <ul className="flex justify-end">
                    <li className="flex nav-link pr-2">About Us</li>               {/* Ideally these will be links/routes */}
                    <Link className="flex nav-link pr-2" to="/events">
                        Events
                    </Link>
                    <li className="flex nav-link">Sponsor Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu