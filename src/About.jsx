import React from 'react';
import Common from './Common';
import web from '../src/imgs/p2.jpg';


const About = () => {
	return(
			<>
				<Common 
					name="Welcome to about page"
					visit="/contact"
					btname="Contact Now"
					image={web} 
				/>
			</>
		);
}

export default About;