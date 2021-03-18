import React, { useState } from "react"

const MyList = (props) => {

    const [list, setList] = useState("none")

    return (
        <div>
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