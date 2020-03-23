import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const MyComponent = () => {


    const [value, setValue] = useState(0);
    const min = 0;
    const max = 10;

    return (
        <RangeSlider
            size = 'sm'
            min = {min}
            max = {max}
            value={value}
            onChange={changeEvent => setValue(changeEvent.target.value)}
        />
    );

};

export default MyComponent;