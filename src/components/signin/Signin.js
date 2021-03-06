import { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import axios from '../util/apiAxios';


import { AuthContext } from '../../context/AuthContext';
import CheckToken from '../../hooks/CheckToken';
import SigninHooks from '../../hooks/SigninHooks';


function Signin({ setUser }) {
	const [
		password,
		email,
		handlePasswordOnChange,
		handleEmailOnChange,
		emailError,
		passwordError,
		setOnPasswordBlur,
		setOnEmailBlur,
	] = SigninHooks();
	
	const { dispatch } = useContext(AuthContext);
	const { checkJwtToken } = CheckToken();
	let navigate = useNavigate();

	useEffect(() => {
		if (checkJwtToken()) {
			navigate('/');
		}
	}, []);

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			let url = '/auth/users/login';

			let payload = await axios.post(url, {
				email,
				password,
			});
			
			window.localStorage.setItem("jwtToken", payload.data.token);

			let decodedToken = jwtDecode(payload.data.token);

			dispatch({
				type: "LOGIN",
				email: decodedToken.email,
				firstName: decodedToken.firstName,
				lastName: decodedToken.lastName
			})

			toast.success('Login successful!', {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			navigate('/');
		} catch (e) {
			toast.error(e.response.data.error, {
				position: 'top-center',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			console.log(e.response.data);
		}
	}

	return (
		<div class="d-flex justify-content-center text-center rounded m-5">
			<div class="card w-25">
				<form class="form-group card-body" onSubmit={handleSubmit}>
					<h2>Sign in</h2>
					<div class="m-3">
						<label class="m-1">Email</label>
						<input
							type="text"
							id={email}
							placeholder="email@example.com"
							name="email"
							onBlur={setOnEmailBlur}
							onChange={handleEmailOnChange}
							required="true"
							className={`${
								!emailError
									? 'form-control border border-primary'
									: 'form-control border border-danger'
							}`}
						/>
						{emailError && (
							<div className="error text-danger p" role="alert">
								{emailError}{' '}
							</div>
						)}
					</div>
					<div class="m-3">
						<label class="m-1">Password</label>
						<input
							type="password"
							id={password}
							placeholder="Password"
							name="password"
							onBlur={setOnPasswordBlur}
							onChange={handlePasswordOnChange}
							className={`${
								!passwordError
									? 'form-control border border-primary'
									: 'form-control border border-danger'
							}`}
						/>
						{passwordError && (
							<div className="error text-danger p" role="alert">
								{passwordError}{' '}
							</div>
						)}
					</div>
					<button type="submit" class="btn btn-outline-primary m-3 p-3 w-25">
						Sign in
					</button>
					<div>
						<Link to="/sign-up">Don't have an account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signin;
