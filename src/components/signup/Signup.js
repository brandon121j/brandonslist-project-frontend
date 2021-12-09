import React from 'react';

import FirstNameHooks from '../../hooks/FirstNameHooks';
import LastNameHooks from '../../hooks/LastNameHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import EmailHooks from '../../hooks/EmailHooks';

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

	return (
		<div class="d-flex justify-content-center text-center rounded m-5">
			<div class="card w-25">
			<form class="form-group card-body">
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					onChange={handleFirstNameOnChange}
					id={firstName}
					onBlur={setFirstNameOnBlur}
					placeholder="First name"
					class="form-control"
				/>
				{firstNameError && (
					<div className="alert alert-danger" role="alert">
						{firstNameError}{' '}
					</div>
				)}
				<label>Last Name</label>
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
				<label>Email</label>
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
				<label>Password</label>
				<input type="password" o/>
				<label htmlFor="">Confirm Password</label>
				<input type="password" />
			</form>
			</div>
		</div>
	);
}

export default Signup;
