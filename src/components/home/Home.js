import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Home() {
	const [postings, setPostings] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getPosts();
	}, []);

	async function getPosts() {
		try {
			setLoading(true);
			let url = 'http://localhost:3001/api/auth/postings/get-all-listings';

			let posts = await axios.get(url);

			setPostings(posts.data.allPostings);

			setLoading(false);

		} catch (e) {
			console.log(e.response);
			toast.error(e.response, {
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

	async function addFavorite(post_id) {
		try {
			let url = `http://localhost:3001/api/auth/postings/add-favorite/${post_id}`;


			let payload = await axios.post(url, null, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem('jwtToken')}`,
				},
			});
		} catch (e) {
			console.log(e.response);
		}
	}

	async function postDetails(post_id) {
		try {
			let url = `http://localhost:3001/api/auth/postings/single-listing/${post_id}`;

			let payload = await axios.post(url, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem('jwtToken')}`,
				},
			});
		} catch (e) {
			console.log(e.response);
		}
	}

	return (
		<>
			{loading ? (
				<div className="d-flex justify-content-center m-5">
					<div className="d-flex justify-content-center m-5">
						<div class="spinner-border text-primary" role="status">
							<span class="sr-only"></span>
						</div>
					</div>
				</div>
			) : (
				<div class="container">
					<div className="row" style={{ margin: 'auto' }}>
						{postings.map((item) => {
							return (
								<>
									<div class="col-3">
										<div className="text-center rounded p-3">
											<div
												className="card border-secondary"
												style={{ height: '360px', width: '302px' }}
											>
												<img
													className="card-img-top"
													src={item.picture}
													style={{ height: '190px', width: '300px' }}
												/>
												<div className="card-body">
													<h4
														className="card-title"
														style={{ maxHeight: '20px' }}
													>
														<Link
															to='/post-details'
															state={{id: item._id}}	
															className='text-decoration-none text-reset'				
														>
															{item.listing}
														</Link>
													</h4>
													<p
														className="card-text"
														style={{ maxHeight: '15px' }}
													>
														{item.city}, {item.state}, {item.zip}{' '}
													</p>
													<button
														className="btn btn-outline-warning"
														onClick={() => addFavorite(item._id)}
													>
														Favorite
													</button>
												</div>
												<div class="card-footer" style={{ maxHeight: '50px' }}>
													$ {item.price}
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
}

export default Home;
