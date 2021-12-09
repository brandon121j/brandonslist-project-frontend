import { useState, useEffect } from 'react';
import { isEmail } from 'validator';

function EmailHooks() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [onBlur, setOnBlur] = useState(false);

    useEffect(() => {
        if (onBlur) {
            if (email.length === 0) {
                setError('Email cannot be empty')
            } else if (!isEmail(email)) {
                setError('Please enter a valid email')
            } else {
                setError('')
            }
        }
    }, [email, onBlur]);

    function handleEmailOnChange(e) {
        setEmail(e.target.value)
    }

    return [email, handleEmailOnChange, error, setOnBlur]
}

export default EmailHooks;