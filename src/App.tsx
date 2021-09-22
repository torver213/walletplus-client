import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css'
import { useAuthContext } from './contexts/AuthContext';
import ProtectedRoute from './views/ProtectedRoute';
import Login from './views/auth/login'
import Register from './views/auth/register'
import LoaderSpinner from './components/others/LoadingSpinner';
import WalletDataFetcher from './fetchers/WalletDataFetcher';
import UserDataFetcher from './fetchers/UserDataFetcher';

const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);

const App = () =>{
  const{authState:{isAuthenticated,isAuthenticating}} = useAuthContext()
  return (
    <React.Fragment>
      <WalletDataFetcher />
      <UserDataFetcher />
      <Suspense fallback={<LoaderSpinner />}>
        <Router>
          <Switch>
              <ProtectedRoute
                path="/dashboard"
                isAuthenticated={isAuthenticated}
                isAuthenticating={isAuthenticating}
                component={ViewApp}
                
              />
              <Route
                  path="/auth/register"
                  exact
                  component={Register}
              />
              <Route
                path="/"
                exact
                component={Login}
              />
              <Redirect to="/" />
          </Switch>
        </Router>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
