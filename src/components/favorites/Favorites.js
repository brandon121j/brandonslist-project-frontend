import React, { useEffect, useContext, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import ApiAxios from '../util/apiAxios';

function Favorites() {
	const [favorites, setFavorites] = useState([]);
	const [userData, setUserData] = useState([]);
	const [loading, setLoading] = useState(false);

	async function getUsersFavorites() {
		try {
			setLoading(true);

			ApiAxios.get('/auth/postings/users-favorites', {headers: {
				authorization: `Bearer ${window.localStorage.getItem('jwtToken')}`,
			}})
			.then((result) => setFavorites(result.data.payload.usersFavorites))
			.then(() => setLoading(false))

		} catch (e) {
			toast.error(e.response, {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	}

	async function removeFavorite(post_id) {
		try {

			ApiAxios.delete(`/auth/postings/remove-favorite/${post_id}`, {
				headers: {
					authorization: `Bearer ${window.localStorage.getItem('jwtToken')}`,
				},
			}).then(() => getUsersFavorites())

		} catch (e) {
			console.log(e.response);
		}
	}

	useEffect(() => {
		let payload = window.localStorage.getItem('jwtToken');
		let decodedToken = jwtDecode(payload);
		setUserData(decodedToken);
		getUsersFavorites()
	}, []);

	return (
		<div>
			<div class="d-flex justify-content-center">
				<div>
					<h1>
						{userData.firstName}'s Favorites
					</h1>
				</div>
			</div>
			{favorites.length === 0 ? (
				<div className="d-flex justify-content-center m-5">
					<div className="d-flex justify-content-center m-5">
						<h1>No favorited items :(</h1>
					</div>
				</div>
			) : (
				<div class="container">
					<div className="row" style={{ margin: 'auto' }}>
						{favorites.map((item) => {
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
													alt='item'
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
														className="btn btn-outline-warning"
														onClick={() => removeFavorite(item._id)}
													>
														Remove Favorite
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

export default Favorites;
