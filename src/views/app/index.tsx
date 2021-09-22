import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingSpinner from '../../components/others/LoadingSpinner';
import AppLayout from '../../layout';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const UserTransactions = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './pages/userTransactions')
);
const Transactions = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './pages/transaction')
);
const Users = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './pages/users')
);
const Profile = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './pages/profile')
);

const App = (props: any) =>{
    const { match } = props;
    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route
                path={`${match.url}/`}
                exact
                render={(props: any) => <Dashboards {...props} />}
              />
              <Route
                path={`${match.url}/transactions/user`}
                exact
                render={(props: any) => <UserTransactions {...props} />}
              />
              <Route
                path={`${match.url}/transactions`}
                exact
                render={(props: any) => <Transactions {...props} />}
              />
              <Route
                path={`${match.url}/users`}
                exact
                render={(props: any) => <Users {...props} />}
              />
              <Route
                path={`${match.url}/profile`}
                exact
                render={(props: any) => <Profile {...props} />}
              />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
}
export default App
