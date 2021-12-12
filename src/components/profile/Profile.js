import React, { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { AuthContext } from '../../context/AuthContext';

function Profile() {
	const { state: email, dispatch } = useContext(AuthContext);
	const [data, setData] = useState([]);


	const onClickHandler = () => {
		dispatch({
			type: 'LOGOUT',
		});
		window.localStorage.removeItem('jwtToken');
	};

	useEffect(() => {
		let payload = window.localStorage.getItem("jwtToken");
		let decodedToken = jwtDecode(payload);
		setData(decodedToken)
	
	}, [])

	return (
		// <div>{user.user.firstName}</div>
		<div className='d-flex justify-content-center'>
		<div className='d-flex justify-content-center flex-column'>
			<h1>{data.firstName} {data.lastName}</h1>
			
			<button className="btn btn-info" onClick={onClickHandler}>Log out</button>
			</div>
		</div>
	);
}

export default Profile;
