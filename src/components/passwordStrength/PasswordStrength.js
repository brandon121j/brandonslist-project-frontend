import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrength = ({ password }) => {
	const passwordTester = zxcvbn(password);
	const strengthScore = (passwordTester.score * 100) / 4;

	const strengthLabel = () => {
		switch (passwordTester.score) {
			case 0:
				return 'Very weak';
			case 1:
				return 'Weak';
			case 2:
				return 'Average';
			case 3:
				return 'Strong';
			case 4:
				return 'Very Strong';
			default:
				return '';
		}
	};

	const strengthBar = () => {
		switch (passwordTester.score) {
			case 0:
				return '#828282';
			case 1:
				return '#EA1111';
			case 2:
				return '#FFAD00';
			case 3:
				return '#9bc158';
			case 4:
				return '#00b500';
			default:
				return 'none';
		}
	};

	const colorChanger = () => ({
		width: `${strengthScore}%`,
		background: strengthBar(),
		height: '7px',
		margin: '0px'
	});

	return (
		<>
			<div className="progress" style={{ height: '7px' }}>
				<div className="progress-bar" style={colorChanger()}></div>
			</div>
			<p style={{ color: strengthBar() }}>{strengthLabel()}</p>
		</>
	);
};

export default PasswordStrength;
