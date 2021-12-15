import React, {useState, useEffect} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import CheckToken from '../../hooks/CheckToken';
import { toast } from 'react-toastify';
import axios from 'axios';

function Home() {
	const [postings, setPostings] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getPosts()
	}, [])

	async function getPosts() {
		try {
			setLoading(true)
			let url = 'http://localhost:3001/api/auth/postings/get-all-listings';

			let posts = await axios.get(url);

			setPostings(posts);

			setLoading(false);

			console.log(postings)

		} catch(e) {
			toast.error(e.response.data.error, {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	return (
		<>
		{loading ? (
			<>
				<h1>Hello</h1>
			</>
		) :  (
			<>
			<div className="d-flex justify-content-center text-center rounded m-5">
				<h1>Home</h1>
				</div>
			<div className="d-flex justify-content-center text-center rounded m-5 p-3">
				<div className="card w-25">
						<h3>Posting Title</h3>
						<div className='card-body'>
							<p>Posting Content</p>
						</div>
				</div>
			</div>
			</>

		)}
		</>

	);
}

export default Home;
