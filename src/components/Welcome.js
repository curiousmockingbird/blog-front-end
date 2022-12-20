import './../css/output.css';
import PropTypes from "prop-types";

const Welcome = (props) => {


  return (      
    <div className="welcome row">
      <h5> Welcome, {props.userEmail}!</h5>
    </div>
  )
}
Welcome.propTypes = {
  userEmail: PropTypes.string.isRequired
};

export default Welcome;