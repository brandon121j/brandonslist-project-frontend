import { useState, useEffect } from 'react';
import { isAlpha } from 'validator';

function FirstNameHooks() {
	const [firstName, setFirstName] = useState('');
	const [error, setError] = useState('');
    const [onBlur, setOnBlur] = useState(false);

    useEffect(() => {
        if (onBlur) {
            if (firstName.length === 0) {
                setError('First name cannot be empty')
            } else if (!isAlpha(firstName)) {
                setError('Cannot have special characters or numbers')
            } else {
                setError('')
            }
        }

	}, [firstName, onBlur]);

	function handleFirstNameOnChange(e) {
		setFirstName(e.target.value);
	}

	return [firstName, handleFirstNameOnChange, error, setOnBlur];
}

export default FirstNameHooks;