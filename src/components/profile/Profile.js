import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import axios from 'axios';

import CheckToken from '../../hooks/CheckToken';
import { AuthContext } from '../../context/AuthContext';

function Profile() {
	const { state: email, dispatch } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState([]);
	const [postings, setPostings] = useState([]);

	const { checkJwtToken } = CheckToken();

	const onClickHandler = () => {
		dispatch({
			type: 'LOGOUT',
		});
		window.localStorage.removeItem('jwtToken');
	};

	useEffect(() => {
		let payload = window.localStorage.getItem('jwtToken');
		let decodedToken = jwtDecode(payload);
		setUserData(decodedToken);
		getUsersPosts();
	}, []);

	async function getUsersPosts() {
		try {
			setLoading(true);
			let url = 'http://localhost:3001/api/auth/postings/get-users-listings';

			let posts = await axios.get(url, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem('jwtToken')}`,
				},
			});

			setPostings(posts.data.payload.usersPostings);

			setLoading(false);
		} catch (e) {
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

	async function deleteHandler(post_id) {
		let url = `http://localhost:3001/api/auth/postings/delete-post/${post_id}`;

		await axios.delete(url, {
			headers: {
				authorization: `Bearer ${window.localStorage.getItem('jwtToken')}`,
			},
		});

		getUsersPosts();
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
		<div>
			<div class="d-flex justify-content-center">
				<div>
					<h1>
						{userData.firstName} {userData.lastName}
					</h1>
					<div className="d-flex justify-content-center">
						<button className="btn btn-info" onClick={onClickHandler}>
							Log out
						</button>
					</div>
				</div>
			</div>
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
													
													<Link
														to="/update"
														state={{ id: item._id }}
														className="text-decoration-none text-reset"
													>
														<button className="btn btn-outline-warning">
															Edit
														</button>
													</Link>
											
													<button
														className="btn btn-outline-danger ml-5"
														onClick={() => deleteHandler(item._id)}
													>
														Delete
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
		</div>
	);
}

export default Profile;
