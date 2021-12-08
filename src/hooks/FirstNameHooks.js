import { useState, useEffect } from 'react';
import { isAlpha } from 'validator';

function FirstNameHooks() {
	const [firstName, setFirstName] = useState('');
	const [error, setError] = useState('');
    const [onBlur, setOnBlur] = useState(false);
    const [onFocus, setOnFocus] = useState(false);

    useEffect(() => {
        if (onFocus) {
			if (firstName.length > 0) {
				if (!isAlpha(firstName)) {
					setError('Cannot have special character or number');
				}

                if(isAlpha(firstName)){
                    setError("")
                }
			}
		}

        if (onBlur) {
            if (firstName.length === 0) {
                setError('First name cannot be empty')
            } else {setError('')}
        }

	}, [firstName, onFocus, onBlur]);

	function handleFirstNameOnChange(e) {
		setFirstName(e.target.value);
	}

	return [firstName, handleFirstNameOnChange, error, setOnFocus, setOnBlur];
}

export default FirstNameHooks;