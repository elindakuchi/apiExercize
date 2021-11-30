import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
			});
	}, []);

	return <div>{blogs && <BlogList blogs={blogs} title="My Blogs" />}</div>;
};
export default Home;
