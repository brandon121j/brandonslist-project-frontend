import { useState, useEffect } from 'react';
import { isEmail } from 'validator';

function EmailHooks() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [className, setClassName] = useState('form-control')
    const [onBlur, setOnBlur] = useState(false);

    useEffect(() => {
        if (onBlur) {
            if (email.length === 0) {
                setError('Email cannot be empty');
                setClassName('form-control is-invalid');
            } else if (!isEmail(email)) {
                setError('Please enter a valid email');
                setClassName('form-control is-invalid');
            } else {
                setError('');
                setClassName('form-control is-valid');
            }
        }
    }, [email, onBlur]);

    function handleEmailOnChange(e) {
        setEmail(e.target.value)
    }

    return [email, handleEmailOnChange, error, setOnBlur, className]
}

export default EmailHooks;