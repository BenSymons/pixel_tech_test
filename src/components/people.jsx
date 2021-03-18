import React, { useEffect, useState } from "react"
import MyList from "./mylist"

const People = () => {
    const [list, setList] = useState("none")
    const [userList, setUserList] = useState([])
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
    console.log(userList)
    if (loading) return <p>loading...</p>

    const handleAdd = (person) => {
        setUserList(prevUserList => [...prevUserList,
        {
            name: person.name,
            email: person.email
        }])
    }

    const handleRemove = (person) => {
        setUserList(prevUserList => {
            const newUserList = prevUserList.filter(item => {
                return item.name !== person.name
            })
            return newUserList
        })
    }

    return (
        <div>
            <ul>
                {list.data.map(person => {
                    return (<li>
                        <p>{person.name}</p>
                        <p>{person.email}</p>
                        <button onClick={() => handleAdd(person)}>add to list</button>
                        <button onClick={() => handleRemove(person)}>remove from list</button>
                    </li>)
                })}
            </ul>
            <MyList theirList={userList} />
        </div>
    )
}
export default People