import React from "react"
import { Link } from "react-router-dom";

const NavMenu = () => {

    setTimeout(() => {
        let content = document.querySelector(".nav-menu");
        content.classList.remove('hidden');
        console.log(content)
    }, 2000)

    return (
        <div className="nav-menu hidden flex">
            <h1 className="font-bold text-3xl justify-start">freeCodeCamp Nashville</h1>
            <nav className="flex space-x-10 justify-end p-3">
                <ul className="items-end">
                    <Link className="pr-3">About Us</Link>               {/* Ideally these will be links/routes */}
                    <Link className="nav-link pr-3" to="/events">
                    Events
                    </Link>
                    <Link>Sponsor Us</Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu