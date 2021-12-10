import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";


import SigninHooks from '../../hooks/SigninHooks';

function Signin() {
	const [password, email, handlePasswordOnChange, handleEmailOnChange, emailError, passwordError, setOnPasswordBlur, setOnEmailBlur] = SigninHooks();


    const notifySuccess = () => toast.success('User successfully signed in!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyFailed = (input) => toast.error(`${input}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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
							id={email}
							placeholder="name@example.com"
							name="email"
                            onBlur={setOnEmailBlur}
							onChange={handleEmailOnChange}
                            required='true'
                            className={`${!emailError ? 'form-control border border-primary' : 'form-control border border-danger'}`}

						/>
                        {emailError && (
							<div className="error text-danger p" role="alert">
								{emailError}{' '}
							</div>
						)}
					</div>
					<div class="m-3">
						<label class="m-1">Password</label>
						<input
							type="text"
							className="form-control"
							id={password}
							placeholder="Password"
							name="password"
                            onBlur={setOnPasswordBlur}
							onChange={handlePasswordOnChange}
                            className={`${!passwordError ? 'form-control border border-primary' : 'form-control border border-danger'}`}
						/>
                        {passwordError && (
							<div className="error text-danger p" role="alert">
								{passwordError}{' '}
							</div>
						)}
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

export default Signin;