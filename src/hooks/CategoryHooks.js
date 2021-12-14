import { useState, useEffect } from 'react';
import { isEmpty } from 'validator';

function CategoryHooks() {
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [onBlur, setOnBlur] = useState(false);

    useEffect(() => {
        if (onBlur) {
            if (isEmpty(category)) {
                setError('Category is required')
            } else {
                setError('');
            }
        }
    }, [category, onBlur])

    function handleCategoryOnChange(e) {
        setCategory(e.target.value)
    }

    return [category, handleCategoryOnChange, error, setOnBlur]
}