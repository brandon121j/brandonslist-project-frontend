import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
			<Link className="navbar-brand" to="/">
				Brandon's List
			</Link>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto mt-2 mt-md-0">
					<li className="nav-item">
						<a className="nav-link" href="/create-posting">
							Create a Posting
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="/favorites">
							Favorites
						</a>
					</li>
				</ul>
			</div>
			<div
				className="collapse navbar-collapse d-flex justify-content-end"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" href="/profile">
							My account
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
