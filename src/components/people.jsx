import React, { useEffect, useState } from "react"

const People = () => {
    const [list, setList] = useState("none")

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users")
            .then(res => res.json())
            .then(data => setList(data))
    }
    console.dir(list)
    return (
        <p>list goes here</p>
    )
}

export default People