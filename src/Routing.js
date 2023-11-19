import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';
import Color from './Color';


const Routing = () => {
    const colorsString = localStorage.getItem("colors"); 
    const defaultColors = {
        magenta: '#ff00ff',
        cyan: '#00ffff',
        yellow: '#ffff00'
    };

    const colors = colorsString ? JSON.parse(colorsString) : defaultColors;

    const [colorList, setColorList] = useState(colors);

    useEffect(() => localStorage.setItem('colors', JSON.stringify(colorList)), [colorList]);
    
    const addColor = (newColor) => {
        setColorList(prevColors => ({ ...prevColors, ...newColor }));
      };

    return (
        <BrowserRouter>
        <Routes>
            <Route exact path='/colors' element={<ColorList colors={colorList} />} />
            <Route exact path='/colors/new' element={<AddColorForm addColor={addColor} />} />
            {Object.keys(colorList).map(color => (
                <Route 
                    key={color} 
                    path={`/colors/${color}`} 
                    element={<Color hex={colorList[color]} color={color} />} 
                 />
            ))}
        </Routes>
        </BrowserRouter>
    );
}

export default Routing;
