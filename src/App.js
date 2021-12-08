import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';

import './App.css';

import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Nav from './components/nav/Nav';

function App() {
	return (
		<>
			<ToastContainer theme="colored" />
      <Router>
        <Nav />
        <Routes>
          <Route path ='/' element={<Signup />} />
          <Route path='/sign-in' element={<Signin />} />
        </Routes>
      </Router>
		</>
	);
}

export default App;
