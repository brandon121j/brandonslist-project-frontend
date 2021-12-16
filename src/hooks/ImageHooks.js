import { useState } from 'react';

function ImageHooks() {
	const [img, setImg] = useState('');

	function handleImgChange(e) {
		setImg(e.target.value);
	}

	return [img, handleImgChange];
}

export default ImageHooks;