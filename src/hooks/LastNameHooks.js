import { useState, useEffect } from 'react';
import { isAlpha } from 'validator';

function LastNameHooks() {
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const [className, setClassName] = useState('form-control')
    const [onBlur, setOnBlur] = useState(false);
    
    useEffect(() => {
        if (onBlur) {
            if (lastName.length === 0) {
                setClassName('form-control is-invalid');
                setError('First name cannot be empty');
            } else if (!isAlpha(lastName)) {
                setError('Cannot have special characters or numbers');
                setClassName('form-control is-invalid');
            } else {
                setError('');
                setClassName('form-control is-valid');
            }
        }
    }, [lastName, onBlur])

    function handleLastNameOnChange(e) {
        setLastName(e.target.value)
    }

    return [lastName, handleLastNameOnChange, error, setOnBlur, className]
}

export default LastNameHooks;