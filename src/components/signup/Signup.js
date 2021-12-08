import React from 'react'

import FirstNameHooks from '../../hooks/FirstNameHooks';
import LastNameHooks from '../../hooks/LastNameHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import EmailHooks from '../../hooks/EmailHooks';

function Signup() {
    const [firstName, handleFirstNameOnChange, firstNameError,setFirstNameOnFocus, setFirstNameOnBlur] = FirstNameHooks();
    const [lastName, handleLastNameOnChange, lastNameError, setLastNameOnBlur] = LastNameHooks()

    return (
        <div className='signup'>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    onChange={handleFirstNameOnChange}
                    id={firstName}
                    onBlur={setFirstNameOnBlur}
                    />
                    {firstNameError && (
							<div className="alert alert-danger" role="alert">
								{firstNameError}{' '}
							</div>
						)}
                <label>Last Name</label>
                <input
							type="text"
							className="form-control"
							id={lastName}
							placeholder="last name"
							onChange={handleLastNameOnChange}
							onBlur={setLastNameOnBlur}
						/>
                        {lastNameError && (
							<div className="alert alert-danger" role="alert">
								{lastNameError}{' '}
							</div>
						)}
                <label>Email</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <label htmlFor="">Confirm Password</label>
                <input type="password" />
            </form>
        </div>
    )
}

export default Signup
