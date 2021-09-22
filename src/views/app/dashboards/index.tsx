import React from 'react'
import { useAuthContext } from '../../../contexts/AuthContext';

const UserDashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './userDashboard')
);
const AdminDashboard = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './adminDashboard')
);

const Index =  () =>{
  const {authState:{user:{role}}} = useAuthContext()
  if(role === 'admin'){
    return (<AdminDashboard />)
  }
  return (<UserDashboard />)
}
export default Index