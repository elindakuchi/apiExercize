const BlogList = ({ blogs, title }) => {
	return (
		<div className="blogNames">
			<h3>{title}</h3>
			{blogs.map((blog) => (
				<div key={blog.id}>
					<h2>{blog.title}</h2>
					<h3>{blog.author}</h3>
					<h3>{blog.body}</h3>
				</div>
			))}
		</div>
	);
};

export default BlogList;
