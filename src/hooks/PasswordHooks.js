import { useState, useEffect } from 'react';

function PasswordHooks() {
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const [onFocus, setOnFocus] = useState(false);

	const [onBlur, setOnBlur] = useState(false);



	function handlePasswordOnChange(e) {
		setPassword(e.target.value);
	}

	return [password, handlePasswordOnChange, error, setOnFocus, setOnBlur];
}

export default PasswordHooks;
