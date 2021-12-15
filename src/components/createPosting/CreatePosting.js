import React, { useEffect } from 'react';
import '../../App.css';
import { usStates } from '../../data/States';

import CategoryHooks from '../../hooks/CategoryHooks';

const CreatePosting = () => {

    const [
        category,
        handleCategoryOnChange,
        categoryError,
        setCategoryOnBlur,
        validator
    ] = CategoryHooks()

	useEffect(() => {
		// usStates.map((item) => {
		// 	console.log(item.abbreviation);
		// });
		// console.log(usStates)
	}, []);
    
	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<form class="card-body text-center justify-content-center">
					<h2 className="m-3">Create Posting</h2>
					<div className="form-group row justify-content-center m-3">
						<div class="col-sm-12">
							<select 
                            class="form-control text-center"
                            onBlur={setCategoryOnBlur}
                            onChange={handleCategoryOnChange}
                            id={category}
                            name='category'
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
								required
							/>
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
								required
							/>
						</div>
					</div>
					<div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 col-form-label">Description</label>
						<div class="col-sm-8">
							<textarea
								type="text"
								className="form-control"
								placeholder="Posting Description"
								required
							/>
						</div>
					</div>
					<div class="row m-3">
						<div className="form-group col-md-5 ">
							<label className="mb-2">City</label>
							<div class="">
								<input
									type="text"
									className="form-control"
									placeholder="City"
									required
								/>
							</div>
						</div>
						<div className="form-group col-md-3">
							<label className="mb-2">State</label>
							<div class="">
								<select id="inputState" className="form-control ">
									<option selected>...</option>
									{usStates.map((item) => {
										return (
											<option value={item.abbreviation} key={item.abbreviation}>
												{item.abbreviation}
											</option>
										);
									})}
								</select>
							</div>
						</div>
						<div className="form-group col-md-4">
							<label className="mb-2">Zip</label>
							<div class="">
								<input
									type="text"
									className="form-control "
									placeholder="Zip"
									required
								/>
							</div>
						</div>
					</div>
					<div className="justify-content-center m-3">
                        {/* <label class="custom-file-label mr-3" for="customFile">Choose file</label> */}
						<input
							type="file"
							multiple
							accept="image/*"
							className="btn button-secondary"
						/>
					</div>
					<div className="justify-content-center m-3">
						<button type="submit" className="btn btn-outline-primary">
							Create Posting
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreatePosting;
