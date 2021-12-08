import React from 'react'

import FirstNameHooks from '../../hooks/FirstNameHooks';
import LastNameHooks from '../../hooks/LastNameHooks';
import PasswordHooks from '../../hooks/PasswordHooks';
import EmailHooks from '../../hooks/EmailHooks';

function Signup() {
    const [firstName, handleFirstNameOnChange, firstNameError, setFirstNameOnBlur] = FirstNameHooks();


    return (
        <div className='signup'>
            <form>
                <label>First Name</label>
                <input 
                    type="text" 
                    onChange={handleFirstNameOnChange}
                    id="firstName"
                    onBlur={setFirstNameOnBlur}
                    />
                    {firstNameError && (
							<div className="alert alert-danger" role="alert">
								{firstNameError}{' '}
							</div>
						)}
                <label>Last Name</label>
                <input type="text" />
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
