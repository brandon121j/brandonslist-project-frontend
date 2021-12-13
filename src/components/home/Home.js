import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CheckToken from '../../hooks/CheckToken';

function Home() {
	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<h1>Home</h1>
			<div className="card">
					<h3>Body</h3>
			</div>
		</div>
	);
}

export default Home;
