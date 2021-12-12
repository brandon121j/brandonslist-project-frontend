import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

function Profile() {
	const { state: user, dispatch } = useContext(AuthContext);
	


	const onClickHandler = () => {
		dispatch({
			type: 'LOGOUT',
		});
		window.localStorage.removeItem('jwtToken');
	};

	return (
		// <div>{user.user.firstName}</div>
		<div className='d-flex justify-content-center'>
		<div className='d-flex justify-content-center flex-column'>
			<h1>Profile</h1>
			<button className="btn btn-info" onClick={onClickHandler}>Log out</button>
			</div>
		</div>
	);
}

export default Profile;
