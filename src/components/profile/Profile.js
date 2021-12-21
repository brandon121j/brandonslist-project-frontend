import React, { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import axios from 'axios';

import CheckToken from '../../hooks/CheckToken';
import { AuthContext } from '../../context/AuthContext';

function Profile() {
	const { state: email, dispatch } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
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
		setData(decodedToken);
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

	return (
		<div>
			<div class="d-flex justify-content-center">
				<div>
					<h1>
						{data.firstName} {data.lastName}
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
							console.log(item)
							return (
								<>
									<div class="col-3">
										<div className="text-center rounded p-3">
											<div
												className="card border-secondary"
												style={{ height: '350px', width: '302px' }}
											>
												<img
													className="card-img-top"
													src={item.picture}
													style={{ height: '190px', width: '300px' }}
												/>
												<div className="card-body">
													<h4
														className="card-title"
														style={{ maxHeight: '50px' }}
													>
														{item.title}
													</h4>
													<p
														className="card-text"
														style={{ maxHeight: '25px' }}
													>
														{item.city}, {item.state}, {item.zip}{' '}
													</p>
													<button 
													className="btn btn-outline-danger"
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
