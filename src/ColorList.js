import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {

    return (
        <div>
            <h2>Welcome to the color factory.</h2>
            <Link to={`/colors/new`}>Add a color</Link>
            <p>Please select a color.</p>
            <div>
                {Object.keys(colors).map(color => (
                        <div key={color}>
                            <Link to={`/colors/${color}`}>{color}</Link>
                        </div>
                ))}
            </div>
        </div>
    );
}

export default ColorList;
