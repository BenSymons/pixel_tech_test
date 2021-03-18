import React, { useEffect, useState } from "react"

const People = () => {
    const [list, setList] = useState("none")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch("https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users")
            .then(res => res.json())
            .then(data => {
                setList(data)
                setLoading(false)
            })
    }
    console.log(loading)
    console.log(list)
    if (loading) return <p>loading...</p>
    return (
        <div>
            <ul>
                {list.data.map(person => {
                    return (<li>
                        <p>{person.name}</p>
                        <p>{person.email}</p>
                    </li>)
                })}
            </ul>
        </div>
    )
}
export default People