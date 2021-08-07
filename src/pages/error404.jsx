import { Button } from "antd";
import { Link } from "react-router-dom";
import "../index.css";

const styles = {
  backgroundColor: '#ea9fe9',
  color: '#001529',
  fontSize: '3rem',
  padding:'5rem'
};

const buttonStyles = {
  padding: '0',
  border: '5px',
  color:'#001529',
  borderRadius: '10px',
  backgroundColor: '#cbd337',
  width: '20%',
  height:'20%',
  fontSize: '1.5rem',
};

const Error404 = () => {
  return (
    <div style={styles} >
      <div className="error-image"></div>
      <p> It looks like you've reached a URL that doesn't exist. Please use the button below to find your way back to our amaizing website!</p>
      <Link to="/">
        {" "}
        <Button type="primary" style={buttonStyles}> BACK TO HOME</Button>
      </Link>
    </div>
  );
};

export default Error404;