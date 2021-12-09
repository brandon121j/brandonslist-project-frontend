import React from 'react';
import { Link } from 'react-router-dom';

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
	const [password, handlePasswordOnChange, passwordError, setPasswordOnBlur, setConfirmOnBlur, confirmError, handleConfirmOnChange] =
		PasswordHooks();

	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<form class="form-group card-body">
					<h2>Sign up</h2>
					<div className="m-3">
						<label class="m-1">First Name</label>
						<input
							type="text"
							onChange={handleFirstNameOnChange}
							id={firstName}
							onBlur={setFirstNameOnBlur}
							placeholder="First name"
							className={`${!firstNameError ? 'form-control border border-success' : 'form-control border border-danger'}`}
						/>
						{firstNameError && (
							<div className="alert alert-danger h-1" role="alert">
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
							className={`${!lastNameError ? 'form-control border border-success' : 'form-control border border-danger'}`}
						/>
						{lastNameError && (
							<div className="alert alert-danger" role="alert">
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
							className={`${!emailError ? 'form-control border border-success' : 'form-control border border-danger'}`}
						/>
						{emailError && (
							<div className="alert alert-danger" role="alert">
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
							className={`${!passwordError ? 'form-control border border-success' : 'form-control border border-danger'}`}
						/>
						<PasswordStrength password={password} />
						{passwordError && (
							<div className="alert alert-danger" role="alert">
								{passwordError}{' '}
							</div>
						)}
					</div>
					<div className="m-3">
						<label className="m-1">Confirm Password</label>
						<input
							type="password"
							placeholder="Confirm password"
							className={`${!confirmError ? 'form-control border border-success' : 'form-control border border-danger'}`}
							onChange={handleConfirmOnChange}
							onBlur={setConfirmOnBlur}
						/>
						{confirmError && (
							<div className="alert alert-danger" role="alert">
								{confirmError}{' '}
							</div>
						)}
					</div>
					<button type="button" className="btn btn-outline-success m-3 p-3 w-25">
						Sign up
					</button>
					<div className='m-3'>
						<Link to="/sign-in">Already have an account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
