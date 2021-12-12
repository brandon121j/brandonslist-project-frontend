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
		<>
			<h1>Profile</h1>
			<button onClick={onClickHandler}>Log out</button>
		</>
	);
}

export default Profile;
