import { useState, useEffect } from 'react';
import { isEmpty } from 'validator';

function CategoryHooks() {
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [validator, setValidator] = useState('form-control')
    const [onBlur, setOnBlur] = useState(false);

    useEffect(() => {
        if (onBlur) {
            console.log('working')
            if (isEmpty(category)) {
                setError('Category is required')
                setValidator('form-control is-invalid');
            } else if (category == 'Select a Category') {
                setError('Category is required');
                setValidator('form-control is-invalid')
                console.log(validator)
                console.log('CATEGORY HOOK WORKING')
            } else {
                setError('');
                setValidator('form-control is-valid')
            }
        }
    }, [category, onBlur, validator])

    function handleCategoryOnChange(e) {
        setCategory(e.target.value);
        
    }

    return [category, handleCategoryOnChange, error, setOnBlur, validator]
}

export default CategoryHooks