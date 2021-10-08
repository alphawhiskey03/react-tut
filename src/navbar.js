import {Link } from 'react-router-dom';
const navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Vig blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {/* Inline styling */}
                <Link to='/create' style={{
                    color:'white',
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default navbar;