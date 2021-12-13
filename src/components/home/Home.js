import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CheckToken from '../../hooks/CheckToken';

function Home() {
	return (
        <>
        <div className="d-flex justify-content-center text-center rounded m-5">
			<h1>Home</h1>
            </div>
		<div className="d-flex justify-content-center text-center rounded m-5 p-3">
			<div className="card w-25">
					<h3>Posting Title</h3>
                    <div className='card-body'>
                        <p>Posting Content</p>
                    </div>
			</div>
		</div>
        </>
	);
}

export default Home;
