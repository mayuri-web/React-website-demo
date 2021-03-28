import React from 'react';
	
	const year = new Date().getFullYear();
const Footer = () => {
	return(
		<>
			<footer className="w-100 bg-light text-center">
				<p>&copy; {year} Mayuriweb. All Rights Reserved | Terms and Conditions. </p>
			</footer>
		</>
		);
}

export default Footer;