import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function PostDetails() {
	const [post, setPost] = useState([]);
	const location = useLocation();
	const { id } = location.state;

	useEffect(() => {
		postDetails();
	}, []);

	async function postDetails() {
		try {
			let url = `http://localhost:3001/api/auth/postings/single-listing/${id}`;

			let payload = await axios.get(url);

			setPost(payload.data.payload);

			console.log(payload.data.payload);
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<div className="d-flex justify-content-center m-5">
				<div>
					<h3 className="d-flex justify-content-center">{post.listing}</h3>
					<div>
						<img src={post.picture} />
					</div>
					<h4 className="d-flex justify-content-center">
						{post.category}
					</h4>

					<p className="d-flex justify-content-center">{post.description}</p>
                    <p className="d-flex justify-content-center">{post.city}, {post.state}, {post.zip}</p>
				</div>
			</div>
		</>
	);
}

export default PostDetails;
