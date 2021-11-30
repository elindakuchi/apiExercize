import React from "react";
import { Link, Router, BrowserRouter } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<h1>Our Blog</h1>

			<div>
				<BrowserRouter>
					<Link to="/"> Home</Link>
					<Link to="/blogs"> Blogs</Link>
				</BrowserRouter>
			</div>
		</>
	);
};

export default Navbar;
