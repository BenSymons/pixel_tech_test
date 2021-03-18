import React, { useEffect, useState } from "react"

const People = () => {
    const [list, setList] = useState("none")

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch("https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users")
        const reader = response.body.getReader()

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            setList(value)
        }
    }
    console.dir(list)
    return (
        <p>list goes here</p>
    )
}

export default People