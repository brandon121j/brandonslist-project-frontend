import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	function logout() {
		
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				Navbar
			</Link>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Home <span class="sr-only">(current)</span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Link
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
