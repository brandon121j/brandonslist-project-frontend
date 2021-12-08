import { useState, useEffect } from 'react';
import { isAlpha } from 'validator';

function LastNameHooks() {
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const [onBlur, setOnBlur] = useState(false);
    
    useEffect(() => {
        if (onBlur) {
            if (lastName.length === 0) {
                setError('Last name cannot be empty')
            } else if (!isAlpha(lastName)) {
                setError('Cannot have special characters or numbers')
            } else {
                setError('')
            }
        }
    }, [lastName, onBlur])

    function handleLastNameOnChange(e) {
        setLastName(e.target.value)
    }

    return [lastName, handleLastNameOnChange, error, setOnBlur]
}

export default LastNameHooks;