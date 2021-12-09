import { useState, useEffect } from 'react'
import PasswordHooks from './PasswordHooks';

const ConfirmPasswordHooks = () => {

    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [onBlur, setOnBlur] = useState(false);

    const {password} = PasswordHooks()

    useEffect(() => {
        if (onBlur) {
            if (confirmPassword !== password) {
                setError('Passwords must match');
            } else {
                setError('');
            }
        }
    }, [confirmPassword, onBlur])

    function handleConfirmOnChange(e) {
        setConfirmPassword(e.target.value);
    }

    return [confirmPassword, handleConfirmOnChange, error, setOnBlur]
}

export default ConfirmPasswordHooks;
