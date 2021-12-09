import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div class='d-flex justify-content-center text-center rounded m-5'>
			<div class="card w-25">
				<form class="form-group card-body">
					<h2>Sign in</h2>
					<div class="m-3">
						<label class="m-1">Email</label>
						<input
							type="text"
							className="form-control"
							id="email"
							placeholder="name@example.com"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div class="m-3">
						<label class="m-1">Password</label>
						<input
							type="text"
							className="form-control"
							id="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="button" class="btn btn-outline-primary m-3 p-3 w-25">
						Sign in
					</button>
                    <div>
                        <Link to='/sign-up'>Don't have an account?</Link>
                    </div>
				</form>
			</div>
		</div>
	);
}
