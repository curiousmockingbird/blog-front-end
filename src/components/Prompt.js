import PropertyType from "prop-types";
import { Link } from 'react-router-dom';
import './../css/output.css';

const Prompt = (props) => {
  return (
    <section className='container'>
    <div className="test">
      <h1> Welcome to the Cuban blog!</h1>
      <h3>{props.articleCount}</h3>
      <h4>Articles published, and counting</h4>
      <ul>
        <li>
          <Link to='/sign-in'>{<button>Sign In / Sign Up</button>}</Link>
        </li>
      </ul>
    </div>
    </section>
  )
}
Prompt.prototype = {
  articleCount: PropertyType.number.isRequired
};

export default Prompt;
