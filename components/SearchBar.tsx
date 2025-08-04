"use client"

import { useState } from "react"

const page = () => {
    const [searchinput, setsearchinput] = useState('')
    function validation(e: any) {
        const input = e.target.value;
        const validstring = input.toLowerCase();
        console.log(validstring)
        setsearchinput(validstring);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Game Name"
                value={searchinput}
                onChange={validation}
            />
            <p>type {searchinput} </p>
        </div>

    )
}

export default page;