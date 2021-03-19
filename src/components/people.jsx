import React, { useEffect, useState } from "react"
import MyList from "./mylist"

const People = () => {
    const [list, setList] = useState("none")
    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(true)
    const [, reRender] = useState()

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

    if (loading) return <p>loading...</p>

    const handleSort = (direction) => {
        if (direction === "asc") {
            setUserList(userList.sort(function (a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
            )
        } else if (direction === "desc") {
            setUserList(userList.sort(function (a, b) {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            })
            )
        }
        reRender({})
    }

    const isEmpty = () => {
        if (userList.length > 0) {
            return "hidden"
        }
    }


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

    const isDisabled = (person) => {
        for (let i = 0; i < userList.length; i++) {
            const values = Object.values(userList[i])
            if (values.includes(person.name)) {
                return true
            }
        }
        return false
    }

    return (
        <div className="listContainer">
            <div className="panel">
                <ul className="no-bullets">
                    {list.data.map(person => {
                        return (<li key={person.name}>
                            <p>Name: {person.name}</p>
                            <p>email: {person.email}</p>
                            <button disabled={isDisabled(person)} onClick={() => handleAdd(person)}>add to list</button>
                            <button onClick={() => handleRemove(person)}>remove from list</button>
                        </li>)
                    })}
                </ul>
            </div>
            <MyList theirList={userList} handleSort={handleSort} isEmpty={isEmpty} />
        </div>
    )
}
export default People