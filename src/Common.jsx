import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../src/imgs/img1.svg';

const Common = (props) => {
	return(
			<>
				<section id="header" className="d-flex align-item-center">
					<div className="container-fluid">
						<div className="row">
							<div className="col-10 mx-auto">
								<div className="row">
									<div className="col-md-6 col-lg-6 col-sm-12 pt-5 d-flex flex-column justify-content-center">
										<h1> {props.name} <strong className="brand-name"> ReactJs.</strong></h1>
										<h2 className="my-3">
											We are the team of talented developer making websites.
										</h2>
										<div className="mt-3">
											<NavLink className="btn-started" to={props.visit} > {props.btname} </NavLink>
										</div>
									</div>
									<div className="col-md-6 col-lg-6 col-sm-12 header-img">
										<img src={props.image} className="img-fluid animated" alt="head img"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	
}

export default Common;