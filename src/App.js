import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';


import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Nav from './components/nav/Nav';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import CreatePosting from './components/createPosting/CreatePosting';
import Favorites from './components/favorites/Favorites';

import "react-toastify/dist/ReactToastify.css";
import './App.css';

import { AuthContext } from "./context/AuthContext";

function App() {

  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    let jwtToken = window.localStorage.getItem("jwtToken");

    if (jwtToken) {
      let decodedToken = jwtDecode(jwtToken);

      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        window.localStorage.removeItem("jwtToken");
        dispatch({ type: "LOGOUT" });
      } else {
        let decodedToken = jwtDecode(jwtToken);

        dispatch({
          type: "LOGIN",
          email: decodedToken.email,
          firstName: decodedToken.firstName,
          lastName: decodedToken.lastName
        });
      }
    }
  }, []);

	return (
		<>
			<ToastContainer theme="colored" />
      <Router>
        <Nav />
        <Routes>
        <Route path="/profile" 
            element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>}
            />
        <Route path="/create-posting"
          element={
            <PrivateRoute>
                <CreatePosting />
            </PrivateRoute>
          }
        />
        <Route path="/favorites"
          element={
            <PrivateRoute>
                <Favorites />
            </PrivateRoute>
          }
        />
          <Route path ='/sign-up' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
		</>
	);
}

export default App;
