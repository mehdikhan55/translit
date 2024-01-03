import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Tranlation from './components/Translation/Translation';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [auth, setAuth] = useState(false);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, replace with your actual logic
    const checkCurrentUser =  () => {
      const isCurrentUser = localStorage.getItem('isCurrentUser');

      if (isCurrentUser==='true') {
        setAuth(true);
      } else {
        setAuth(false);
      }

      console.log('auth: '+auth)
      setUserLoading(false);
    };

    checkCurrentUser();
  }, []);

  


  return (
    <BrowserRouter>
      {userLoading ? (
        <div>loading...</div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              auth ? (
                <Home />
              ) : (
                // Redirect to login if not authenticated
                <Navigate to="/login" />
              )
            }
          />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      )
      }
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <main className="main">
      <div className="app">
        <Hero />
        <Tranlation />
      </div>
    </main>
  );
};

export default App;
