import React from 'react';
import '../../App.css'

const CreatePosting = () => {
	return (
		<div className="d-flex justify-content-center text-center rounded m-5">
			<div className="card w-25">
				<form class="card-body text-center justify-content-center">
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
						<label className="col-sm-4 col-form-label">Name</label>
                        <div class="col-sm-8">
						<input
							type="text"
							class="form-control"
							placeholder="Listing"
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
							placeholder="Price"
                            required
						/>
					</div>
					</div>
                    <div className="form-group row justify-content-center m-3">
						<label className="col-sm-4 col-form-label">Location</label>
                        <div class="col-sm-8">
						<input
							type="text"
							class="form-control"
							placeholder="Location"
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
							placeholder="Location"
                            required
						/>
					</div>
					</div>
                    <div className="justify-conent-center">
                    <button type="submit" className="btn btn-outline-primary">Create Posting</button>
                    </div>
				</form>
			</div>
		</div>
	);
};

export default CreatePosting;
