import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
const Login = React.lazy(() =>
  import(/* webpackChunkName: "login" */ './login')
);
const Register = React.lazy(() =>
  import(/* webpackChunkName: "register" */ './register')
);


const Index = (props: any) => {
    const { match } = props;
        return (
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              
              <Route
                path={`${match.url}/register`}
                exact
                render={(props:any) => <Login {...props} />}
              />
              <Route
                path={`${match.url}/*`}
                exact
                render={(props:any) => <Register {...props} />}
              />
            </Switch>
          </Suspense>
    );
}

export default Index
