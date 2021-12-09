import React from 'react';
import { Link } from 'react-router-dom';

import FirstNameHooks from '../../hooks/FirstNameHooks';
import LastNameHooks from '../../hooks/LastNameHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import EmailHooks from '../../hooks/EmailHooks';
import PasswordStrength from '../passwordStrength/PasswordStrength';
import ConfirmPasswordHooks from '../../hooks/ConfirmPasswordHooks';

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
	const [password, handlePasswordOnChange, passwordError, setPasswordOnBlur] =
		PasswordHooks();
	const [confirm, handleConfirmOnChange, confirmError, setConfirmOnBlur] =
		ConfirmPasswordHooks();

	return (
		<div class="d-flex justify-content-center text-center rounded m-5">
			<div class="card w-25">
				<form class="form-group card-body">
					<h2>Sign up</h2>
					<div class="m-3">
						<label class="m-1">First Name</label>
						<input
							type="text"
							onChange={handleFirstNameOnChange}
							id={firstName}
							onBlur={setFirstNameOnBlur}
							placeholder="First name"
							class="form-control"
						/>
						{firstNameError && (
							<div className="alert alert-danger h-1" role="alert">
								{firstNameError}{' '}
							</div>
						)}
					</div>
					<div class="m-3">
						<label class="m-1">Last Name</label>
						<input
							type="text"
							onChange={handleLastNameOnChange}
							id={lastName}
							onBlur={setLastNameOnBlur}
							placeholder="last name"
							class="form-control"
						/>
						{lastNameError && (
							<div className="alert alert-danger" role="alert">
								{lastNameError}{' '}
							</div>
						)}
					</div>
					<div class="m-3">
						<label class="m-1">Email</label>
						<input
							type="text"
							onChange={handleEmailOnChange}
							id={email}
							onBlur={setEmailOnBlur}
							placeholder="Email"
							class="form-control"
						/>
						{emailError && (
							<div className="alert alert-danger" role="alert">
								{emailError}{' '}
							</div>
						)}
					</div>
					<div class="m-3">
						<label class="m-1">Password</label>
						<input
							type="password"
							placeholder="Password"
							class="form-control"
							onChange={handlePasswordOnChange}
							onBlur={setPasswordOnBlur}
						/>
						<PasswordStrength password={password} />
						{passwordError && (
							<div className="alert alert-danger" role="alert">
								{passwordError}{' '}
							</div>
						)}
					</div>
					<div class="m-3">
						<label class="m-1">Confirm Password</label>
						<input
							type="password"
							placeholder="Confirm password"
							class="form-control"
							onChange={handleConfirmOnChange}
							onBlur={setConfirmOnBlur}
						/>
					</div>
					<button type="button" class="btn btn-outline-primary m-3 p-3 w-25">
						Sign up
					</button>
					<div class='m-3'>
						<Link to="/sign-in">Already have an account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
