import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
				setIsPending(false);
			});
	}, []);

	return (
		<div>
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="My Blogs" />}
		</div>
	);
};
export default Home;
