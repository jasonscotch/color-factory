import { Link } from 'react-router-dom';
import "./Color.css";


const Color = ({ hex, color }) => {
    const style = {
        backgroundColor: hex
    };

  return (
    <div className="Color" style={style}>
      <h2>This is {color}!</h2>
      <p>
        <Link to="/colors">Go Back</Link>
      </p>
    </div>
  );
}

export default Color;
