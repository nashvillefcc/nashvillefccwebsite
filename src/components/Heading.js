import React from "react"

const Heading = () => {

    setTimeout(() => {
        let content = document.querySelector(".main-header");
        content.classList.add('hidden');
        console.log(content)
    }, 800)

    return (
        <div className="main-header justify-center align-center">
            <h1 className="text-4xl font-normal">Welcome to
                <br></br>
                FreeCodeCamp
                <br></br>
                Nashville
            </h1>
        </div>
    )
}

export default Heading