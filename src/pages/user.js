import Table from '../compoment/table'
import { useState, useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/api/v1/user')
            .then(response => response.json())
            .then(response => {
                const { data } = response
                setUsers(data);
            })
    }, [])


    return (

        <div>
            <Table data={users} />
        </div>
    )
}


export default Users;