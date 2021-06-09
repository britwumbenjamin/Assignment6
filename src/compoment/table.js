
function Table(props) {

    return (
        <table border="3">
            <top>
                <th>Username</th>
                <th>Fullname</th>
                <th>Email</th>
            </top>

            <down>
                {
                    props.data.map((data, key) => <tr key={key}>
                        <td>{data.username}</td>
                        <td>{data.fullname}</td>
                        <td>{data.email}</td>
                    </tr>
                    )
                }
            </down>
        </table>
    )
}

export default Table;