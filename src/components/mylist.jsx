import React, { useState } from "react"

const MyList = (props) => {

    return (
        <div>
            <h2>Your list:</h2>
            <button onClick={() => props.handleSort("asc")}>Sort A-Z</button>
            <button onClick={() => props.handleSort("desc")}>Sort Z-A</button>
            <ul>
                {props.theirList.map(person => {
                    return (
                        <li>
                            <p>{person.name}</p>
                            <p>{person.email}</p>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default MyList