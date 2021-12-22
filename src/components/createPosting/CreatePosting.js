import React from 'react';
import '../../App.css';
import { usStates } from '../../data/States';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import CategoryHooks from '../../hooks/CategoryHooks';
import TitleHooks from '../../hooks/TitleHooks';
import PriceHooks from '../../hooks/PriceHooks';
import DescriptionHooks from '../../hooks/DescriptionHooks';
import LocationHooks from '../../hooks/LocationHooks';
import ImageHooks from '../../hooks/ImageHooks';

const CreatePosting = () => {
	const [
		category,
		handleCategoryOnChange,
		categoryError,
		setCategoryOnBlur,
		validator,
	] = CategoryHooks();

	const [handleTitleChange, title, titleError, setTitleOnBlur, titleClassName] =
		TitleHooks();

	const [handlePriceChange, price, priceError, setPriceOnBlur, priceClass] =
		PriceHooks();

	const [handleDescChange, desc, descError, setDescOnBlur, descClass] =
		DescriptionHooks();

	const [img, handleImgChange, setImgBlur, imgClass] = ImageHooks()

	const [
		handleCityChange,
		handleStateChange,
		handleZipChange,
		setCityBlur,
		setStateBlur,
		setZipBlur,
		cityError,
		stateError,
		zipError,
		cityClass,
		stateClass,
		zipClass,
        city,
        state,
        zipCode
	] = LocationHooks();

	let navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			if (localStorage.getItem('jwtToken') === null) {
				toast.error('Please Login', {
					position: 'top-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				navigate('/sign-in');
			} else {

			let fd = new FormData();

			fd.append('category', category);
			fd.append('listing', title);
			fd.append('price', price);
			fd.append('description', desc);
			fd.append('city', city);
			fd.append('state', state);
			fd.append('zip', zipCode);
			fd.append('picture', img);

			let url = 'http://localhost:3001/api/auth/postings/create-listing';

			let token = window.localStorage.getItem("jwtToken");


			let payload = await axios.post(url, fd,
			{
				headers : {
					"Authorization" : `Bearer ${localStorage.getItem('jwtToken')}`,
					"Accept": "application/json"
				}
			});

			toast.success('Posting created!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			navigate('/');
		}
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
			console.log(e);
		}
	}


	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<form class="card-body text-center justify-content-center" onSubmit={handleSubmit}  multipart="urlencoded">
					<h2 className="m-3">Create Posting</h2>
					<div className="form-group row justify-content-center m-3">
						<div class="col-sm-12">
							<select
								class="form-control text-center"
								onBlur={setCategoryOnBlur}
								onChange={handleCategoryOnChange}
								id={category}
								name="category"
								className={validator}
							>
								<option selected>Select a Category</option>
								<option value="Jobs">Jobs</option>
								<option value="Housing">Housing</option>
								<option value="For Sale">For Sale</option>
								<option value="Wanted">Wanted</option>
							</select>
							{categoryError && (
								<div className="invalid-feedback" role="alert">
									{categoryError}{' '}
								</div>
							)}
						</div>
					</div>
					<div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 col-form-label">Title</label>
						<div class="col-sm-8">
							<input
								type="text"
								class="form-control"
								placeholder="Posting Title"
								onBlur={setTitleOnBlur}
								onChange={handleTitleChange}
								className={titleClassName}
								id={title}
								required
							/>
							{titleError && (
								<div className="invalid-feedback" role="alert">
									{titleError}{' '}
								</div>
							)}
						</div>
					</div>
					<div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 col-form-label">Price</label>
						<div class="col-sm-8">
							<input
								type="number"
								min="0"
								max="999999"
								class="form-control"
								placeholder="Posting Price"
								onChange={handlePriceChange}
								onBlur={setPriceOnBlur}
								className={priceClass}
								id={price}
								required
							/>
							{priceError && (
								<div className="invalid-feedback" role="alert">
									{priceError}{' '}
								</div>
							)}
						</div>
					</div>
					<div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 col-form-label">Description</label>
						<div class="col-sm-8">
							<textarea
								type="text"
								className="form-control"
								placeholder="Posting Description"
								onChange={handleDescChange}
								onBlur={setDescOnBlur}
								className={descClass}
								id={desc}
								required
							/>
							{descError && (
								<div className="invalid-feedback" role="alert">
									{descError}{' '}
								</div>
							)}
						</div>
					</div>
					<div class="row m-3">
						<div className="form-group col-md-5 ">
							<label className="mb-2">City</label>
							<div class="">
								<input
									type="text"
									className={cityClass}
                                    onChange={handleCityChange}
                                    id={city}
                                    onBlur={setCityBlur}
									placeholder="City"
									required
								/>
								{cityError && (
									<div className="invalid-feedback" role="alert">
										{cityError}{' '}
									</div>
								)}
							</div>
						</div>
						<div className="form-group col-md-3">
							<label className="mb-2">State</label>
							<div class="">
								<select 
                                id={state} 
                                className={stateClass}
                                onBlur={setStateBlur}
                                onChange={handleStateChange}
                                >
									<option selected>...</option>
									{usStates.map((item) => {
										return (
											<option value={item.abbreviation} key={item.abbreviation}>
												{item.abbreviation}
											</option>
										);
									})}
								</select>
								{stateError && (
									<div className="invalid-feedback" role="alert">
										{stateError}{' '}
									</div>
								)}
							</div>
						</div>
						<div className="form-group col-md-4">
							<label className="mb-2">Zip</label>
							<div class="">
								<input
									type="text"
									className={zipClass}
									placeholder="Zip"
                                    onChange={handleZipChange}
                                    onBlur={setZipBlur}
                                    id={zipCode}
									required
								/>
								{zipError && (
									<div className="invalid-feedback" role="alert">
										{zipError}{' '}
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="justify-content-center m-3 custom-file">
						<input
							type="file"
							multiple
							accept="image/*"
							className={imgClass}
							onInput={handleImgChange}
							onBlur={setImgBlur}
						/>
					</div>
					<div className="justify-content-center m-3">
						<button type="submit" className="btn btn-outline-success">
							Create Posting
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreatePosting;
