import React from 'react';
import '../../App.css';

const CreatePosting = () => {
	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<form class="card-body text-center justify-content-center">
					<h2 className="m-3">Create Posting</h2>
					<div className="form-group row justify-content-center m-3">
						<div class="col-sm-12">
							<select class="form-control text-center">
								<option selected>Select a Category</option>
								<option value="Jobs">Jobs</option>
								<option value="Housing">Housing</option>
								<option value="For Sale">For Sale</option>
								<option value="Wanted">Wanted</option>
							</select>
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
								class="form-control"
								placeholder="Posting Description"
								required
							/>
						</div>
					</div>
                    <div class="form-row">
					<div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 col-form-label">City</label>
						<div class="col-sm-8">
							<input
								type="text"
								class="form-control"
								placeholder="City"
								required
							/>
						</div>
					</div>
					<div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 col-form-label">State</label>
						<div class="col-sm-8">
							<select id="inputState" className="form-control w-75">
								<option selected>Choose...</option>
								<option>...</option>
							</select>
						</div>
					</div>
					<div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 ml-3 col-form-label">Zip</label>
						<div class="col-sm-8">
							<input
								type="text"
								className="form-control w-75"
								placeholder="Zip"
                                
								required
							/>
						</div>
                        </div>
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
