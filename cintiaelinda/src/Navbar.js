import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div
				style={{
					color: "yellow",
					backgroundColor: "green",
					borderRadius: "20px",
					height: "40px",
				}}
			>
				<BrowserRouter>
					<Link to="/" style={{ padding: "30px", color: "white" }}>
						Home
					</Link>
					<Link to="/blogs" style={{ padding: "30px", color: "white" }}>
						Blogs
					</Link>
				</BrowserRouter>
			</div>
		</>
	);
};

export default Navbar;
