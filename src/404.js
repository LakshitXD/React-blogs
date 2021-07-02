import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Why are you here ?</p>
            <Link to='/'>Homepage / </Link>
            <a href="https://github.com/LakshitXD">Anyway here is a link to a virus</a>
        </div>
     );
}
 
export default NotFound;