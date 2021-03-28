import React from 'react';
import web from '../src/imgs/img1.svg';
import Common from './Common';
import Service from './Service';
import Contact from './Contact';
//import Common from './Common';

const Home = () => {
	return(
			<>
				<Common 
					name="Grow your knowedge with"
					visit="/service"
					btname="Get Started"
					image={web} 
				/>
				<Service />
				<Contact />
			</>
		);
}

export default Home;