function App () {
  const e = React.createElement;
  const Router = ReactRouterDOM.HashRouter;
  const Routes = ReactRouterDOM.Routes;
  const Route = ReactRouterDOM.Route;
  const hashHistory = ReactRouterDOM.hashHistory;

  // that's just to reuse variables as keys for react router components
  const loginPath = '/'
  const listPath = '/list'
  
  return (
    e(Router, null, (
      {history: hashHistory},
      e(Routes, null, ([
        e(Route, {
          key: loginPath,
          path: loginPath,
          element: e(Login) // <Login /> should work too
        }),
        e(Route, {
          key: listPath,
          path: listPath,
          element: e(UsersList) // <UsersList /> should work too
        })
      ]))
    ))
  )
}