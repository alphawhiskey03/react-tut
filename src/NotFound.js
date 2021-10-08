import { Link } from "react-router-dom/cjs/react-router-dom.min"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you requested is not found</p>
            <Link to='/'></Link>
        </div>
     );
}
 
export default NotFound;