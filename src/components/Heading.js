import React from "react"

const Heading = () => {

    setTimeout(() => {
        let content = document.querySelector(".main-header");
        content.classList.add('hidden');
        console.log(content)
    }, 800)

    return (
        <div className="main-header">
            <h1>welcome to
                <br></br>
                FreeCodeCamp
                <br></br>
                Nashville
            </h1>
        </div>
        )
}

export default Heading