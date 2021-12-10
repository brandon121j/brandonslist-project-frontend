import { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';

function PasswordHooks() {
	const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
	const [error, setError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [confirmBlur, setConfirmBlur] = useState(false);
	const [onBlur, setOnBlur] = useState(false);
    const passwordTester = zxcvbn(password);

    useEffect(() => {
        if (onBlur) {
            if (password.length === 0) {
                setError('Password cannot be empty')
            } else if (passwordTester.score < 2) { 
                setError('Password too weak');
                console.log('TOO WEAK');
            } else {
                setError('')
            }
        }

        if (confirmBlur) {
            if (confirm.length === 0) {
                setConfirmError('Confirm password cannot be empty')
            } else if (confirm !== password) {
                console.log('Confirm: ', confirm,'Password: ', password)
                setConfirmError('Passwords must match')
            } else {
                setConfirmError('')
            }
        }
    }, [password, confirm, onBlur, confirmBlur])

	function handlePasswordOnChange(e) {
		setPassword(e.target.value);
	}

    function handleConfirmOnChange(e) {
        setConfirm(e.target.value);
    }

	return [password, handlePasswordOnChange, error, setOnBlur, setConfirmBlur, confirmError, handleConfirmOnChange];
}

export default PasswordHooks;
