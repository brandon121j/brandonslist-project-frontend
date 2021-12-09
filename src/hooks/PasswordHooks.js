import { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';

function PasswordHooks() {
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [onFocus, setOnFocus] = useState(false);
	const [onBlur, setOnBlur] = useState(false);
    const passwordTester = zxcvbn(password);

    useEffect(() => {
        if (onBlur) {
            if (password.length === 0) {
                setError('Password cannot be empty')
            } else if (passwordTester.score < 3) { 
                setError('Password too weak');
                console.log('TOO WEAK');
            } else {
                setError('');
            }
        }
    }, [password, onBlur])

	function handlePasswordOnChange(e) {
		setPassword(e.target.value);
	}

	return [password, handlePasswordOnChange, error, setOnBlur];
}

export default PasswordHooks;
