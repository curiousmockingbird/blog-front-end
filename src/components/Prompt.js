import PropertyType from "prop-types";
import { Link } from 'react-router-dom';
import './../css/output.css';

const Prompt = (props) => {
  return (
    <div className='row d-flex justify-content-center prompt'>
      <h1> Welcome to the Cuban blog!</h1>
      <h4>{props.articleCount}<br></br> Articles published, and counting!</h4>
      <ul>
        <li>
          <Link to='/sign-in'>{<button className="btn btn-outline-primary mt-1 mb-2">Sign In / Sign Up</button>}</Link>
        </li>
      </ul>
    </div>
  )
}
Prompt.prototype = {
  articleCount: PropertyType.number.isRequired
};

export default Prompt;
