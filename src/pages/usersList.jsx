function UsersList () {
  // that would be better if the token state was reused instead of creating a new one, but
  // that's not my focus.
  const [token, setToken] = React.useState(null)
  const [users, setUsers] = React.useState([])

  const navigate = ReactRouterDOM.useNavigate()

  React.useEffect(() => {
    setToken(localStorage.getItem('@login/token'))

    try {
      fetch('http://fakeapi.jsonparseronline.com/users?_page=1&_limit=10', {
      method: 'GET',
      headers: {
        'Authorization': token,
      }
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
    } catch (err) {
      // it will return to the login page if the api tells the user don't have admin access
      navigate('/')
    }
  }, [])

  return (
    <main id="users-list">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Age</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}