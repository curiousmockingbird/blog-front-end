import './../css/output.css';
import PropTypes from "prop-types";

const Welcome = (props) => {


  return (      
    <div className="welcome row">
      <h3> Welcome<br></br>{props.userEmail}!</h3>
    </div>
  )
}
Welcome.propTypes = {
  userEmail: PropTypes.string.isRequired
};

export default Welcome;