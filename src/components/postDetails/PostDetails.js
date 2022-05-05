import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiAxios from '../util/apiAxios';

function PostDetails() {
	const [post, setPost] = useState([]);
	const location = useLocation();
	const { id } = location.state;

	useEffect(() => {
		postDetails();
	}, []);

	async function postDetails() {
		try {
			ApiAxios.get(`/auth/postings/single-listing/${id}`)
				.then((result) => setPost(result.data.payload))
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
						<img src={post.picture} alt='posting'/>
					</div>
					<h4 className="d-flex justify-content-center">
						{post.category}
					</h4>

					<p className="d-flex justify-content-center">{post.description}</p>
                    <p className="d-flex justify-content-center">{post.city}, {post.state}, {post.zip}</p>
                    <p className="d-flex justify-content-center">$ {post.price}</p>
				</div>
			</div>
		</>
	);
}

export default PostDetails;
