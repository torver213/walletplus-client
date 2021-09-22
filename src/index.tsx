import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './contexts/AuthContext';
import UserProvider from './contexts/UserContext';
import AuthChecker from './fetchers/AuthChecker';
import LoaderSpinner from './components/others/LoadingSpinner';
import WalletProvider from './contexts/WalletContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AuthChecker />
      <UserProvider>
        <WalletProvider>
        <Suspense fallback={<LoaderSpinner />}>
          <App />
        </Suspense>
        </WalletProvider>
      </UserProvider>
    </AuthProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
