import { Link } from "react-router-dom/cjs/react-router-dom.min"

const BlogList = ({blogs ,title,handleDelete}) => {

    return ( 
    
        <div className="blog-list">
            <h1>{title}</h1>
              {/* below inside map () is used instead of {} to render jsx */}
              
              {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    </Link>
                </div>

            ))}
        </div>
    );
}
 
export default BlogList
