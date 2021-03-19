import React from "react"

const MyList = (props) => {

    return (
        <div className="panel">
            <h2>Your list:</h2>
            <button onClick={() => props.handleSort("asc")}>Sort A-Z</button>
            <button onClick={() => props.handleSort("desc")}>Sort Z-A</button>
            <p className={props.isEmpty()}>There are no items in your list yet</p>
            <ul className="no-bullets">
                {props.theirList.map(person => {
                    return (
                        <li key={person.name}>
                            <p>Name: {person.name}</p>
                            <p>email: {person.email}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MyList