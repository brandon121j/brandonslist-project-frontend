import { useState, useEffect } from 'react';

function ImageHooks() {
	const [img, setImg] = useState('');
    const [imgClass, setImgClass] = useState('form-control')
    const [imgBlur, setImgBlur] = useState(false);

    useEffect(() => {
        if (imgBlur) {
            if (img.length === 0) {
                setImgClass('form-control');
                console.log('Image Length is 0')
            } else {
                setImgClass('form-control is-valid');
                console.log('Image length > 0')
            }
        }
    }, [imgBlur, img])

	function handleImgChange(e) {
		setImg(`http://localhost:3001/public/images/${e.target.value}`);
	}

	return [img, handleImgChange, setImgBlur, imgClass];
}

export default ImageHooks;