import React from 'react'

import Connect from '../assets/Connect.svg'

function footer () {
    return (
        <footer>
            <nav className="footerNav">
                <div className="socials">
                    <Connect className="connectLogo" alt={`Connect Logo`}/>
                    <ul>
                        <li>
                           <a href="https://www.meetup.com/freeCodeCamp-Nashville/" aria-label="Meetup" rel="noopener noreferrer" target="_blank">
                               
                           </a>
                        </li>
                        <li>
                           <a href="#discord" aria-label="Discord" rel="noopener noreferrer" target="_blank">
                               
                           </a> 
                        </li>
                        <li>
                           <a href="https://nashdev.com/" aria-label="Slack" rel="noopener noreferrer" target="_blank">
                               
                           </a> 
                        </li>
                        <li>
                           <a href="https://github.com/nashvillefcc/" aria-label="GitHub" rel="noopener noreferrer" target="_blank">
                               
                           </a> 
                        </li>
                        <li>
                           <a href="https://twitter.com/nashvillefcc/" aria-label="Twitter" rel="noopener noreferrer" target="_blank">
                               
                           </a> 
                        </li>
                        <li>
                           <a href="https://www.facebook.com/groups/free.code.camp.nashville/permalink/1479740658703738/" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
                               
                           </a> 
                        </li>
                    </ul>
                </div>
                <div className="emailAndCopyright">

                </div>
            </nav>
        </footer>
    )
}

export default footer




/*
flex flex-col justify-between max-w-4xl h-64 p-0 mx-auto text-sm md:p-8
flex flex-row h-1/2 w-full border-2
flex flex-col h-1/2 border-2
*/