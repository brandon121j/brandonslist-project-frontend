import { useState, useEffect } from 'react';
import { isAlpha } from 'validator';

function FirstNameHooks() {
	const [firstName, setFirstName] = useState('');
	const [error, setError] = useState('');
    const [className, setClassName] = useState('form-control');
    const [onBlur, setOnBlur] = useState(false);

    useEffect(() => {
        if (onBlur) {
            if (firstName.length === 0) {
                setClassName('form-control is-invalid');
                setError('First name cannot be empty');
            } else if (!isAlpha(firstName)) {
                setError('Cannot have special characters or numbers');
                setClassName('form-control is-invalid');
            } else {
                setError('');
                setClassName('form-control is-valid');
            }
        }

	}, [firstName, onBlur]);

	function handleFirstNameOnChange(e) {
		setFirstName(e.target.value);
	}

	return [firstName, handleFirstNameOnChange, error, setOnBlur, className];
}

export default FirstNameHooks;