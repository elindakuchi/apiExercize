import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([{}, {}, {}]);
	const [name, setName] = useState("test");

	useEffect(() => {
		console.log("I am here");
	}, [name]);

	return (
		<div>
			<BlogList blogs={blogs} title="My Blogs">
				Bloglist component
			</BlogList>
		</div>
	);
};
export default Home;
