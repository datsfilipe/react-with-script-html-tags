function Login () {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    // i don't want to make a fake api to test this since the project was made to use react
    // with script tags in a single html page file and not to make a login page work
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('@login/token', data.token)
      })
  }

  return (
    <main id="login">
      <form onSubmit={handleSubmit}>
        <label className="inputLabel" htmlFor="username">Usuário:</label>
        <input
          name="username"
          className="username"
          id="username"
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        <label className="inputLabel" htmlFor="password">Senha:</label>
        <input
          name="password"
          className="password"
          id="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <span className="passwordRecovery">Esqueceu a senha? <a href="#">clique aqui</a></span>

        <button
          type="submit"
          className="loginButton"
        >
          Login
        </button>
      </form>
    </main>
  );
}