import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

import CheckToken from '../../hooks/CheckToken';
import FirstNameHooks from '../../hooks/FirstNameHooks';
import LastNameHooks from '../../hooks/LastNameHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import EmailHooks from '../../hooks/EmailHooks';
import PasswordStrength from '../passwordStrength/PasswordStrength';
import '../../App.css';

function Signup() {
	const [
		firstName,
		handleFirstNameOnChange,
		firstNameError,
		setFirstNameOnBlur,
	] = FirstNameHooks();
	const [lastName, handleLastNameOnChange, lastNameError, setLastNameOnBlur] =
		LastNameHooks();
	const [email, handleEmailOnChange, emailError, setEmailOnBlur] = EmailHooks();
	const [
		password,
		handlePasswordOnChange,
		passwordError,
		setPasswordOnBlur,
		setConfirmOnBlur,
		confirmError,
		handleConfirmOnChange,
	] = PasswordHooks();

	const navigate = useNavigate();
	const { checkJwtToken } = CheckToken();
	useEffect(() => {
		if (checkJwtToken()) {
			navigate('/');
		}
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			let url = "http://localhost:3001/api/auth/users/create-user";
				// process.env.NODE_ENV === 'production'
				// 	? 'https://team-2-movie-backend.herokuapp.com/api/users/create-user'
				// 	: 'http://localhost:3001/api/users/create-user';

			await axios.post(url, {
				firstName,
				lastName,
				email,
				password,
			});

			toast.success('Account created!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (e) {
			toast.error(e.response.data.error, {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			console.log(e.response.data)
		}
	}

	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<form class="form-group card-body" onSubmit={handleSubmit}>
					<h2>Sign up</h2>
					<div className="m-3">
						<label class="m-1">First Name</label>
						<input
							type="text"
							onChange={handleFirstNameOnChange}
							id={firstName}
							onBlur={setFirstNameOnBlur}
							placeholder="First name"
							className={`${
								!firstNameError
									? 'form-control border border-success'
									: 'form-control border border-danger'
							}`}
						/>
						{firstNameError && (
							<div className="error text-danger p" role="alert">
								{firstNameError}{' '}
							</div>
						)}
					</div>
					<div className="m-3">
						<label className="m-1">Last Name</label>
						<input
							type="text"
							onChange={handleLastNameOnChange}
							id={lastName}
							onBlur={setLastNameOnBlur}
							placeholder="last name"
							className={`${
								!lastNameError
									? 'form-control border border-success'
									: 'form-control border border-danger'
							}`}
						/>
						{lastNameError && (
							<div className="error text-danger p" role="alert">
								{lastNameError}{' '}
							</div>
						)}
					</div>
					<div className="m-3">
						<label className="m-1">Email</label>
						<input
							type="text"
							onChange={handleEmailOnChange}
							id={email}
							onBlur={setEmailOnBlur}
							placeholder="Email"
							className={`${
								!emailError
									? 'form-control border border-success'
									: 'form-control border border-danger'
							}`}
						/>
						{emailError && (
							<div className="error text-danger p" role="alert">
								{emailError}{' '}
							</div>
						)}
					</div>
					<div className="m-3">
						<label className="m-1">Password</label>
						<input
							type="password"
							placeholder="Password"
							onChange={handlePasswordOnChange}
							onBlur={setPasswordOnBlur}
							className={`${
								!passwordError
									? 'form-control border border-success'
									: 'form-control border border-danger'
							}`}
						/>
						<PasswordStrength password={password} />
						{passwordError && (
							<div className="error text-danger p" role="alert">
								{passwordError}{' '}
							</div>
						)}
					</div>
					<div className="m-3">
						<label className="m-1">Confirm Password</label>
						<input
							type="password"
							placeholder="Confirm password"
							className={`${
								!confirmError
									? 'form-control border border-success'
									: 'form-control border border-danger'
							}`}
							onChange={handleConfirmOnChange}
							onBlur={setConfirmOnBlur}
						/>
						{confirmError && (
							<div className="error text-danger p" role="alert">
								{confirmError}{' '}
							</div>
						)}
					</div>
					<button
						type="submit"
						className="btn btn-outline-success m-3 p-3 w-25"
					>
						Sign up
					</button>
					<div className="m-3">
						<Link to="/sign-in" className="text-success">
							Already have an account?
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
