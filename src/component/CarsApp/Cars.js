import React from "react";
import '../../css/CarsApp/Cars.css';

const Cars = (props) => {
    return (
        <h1 className='cars'>
            Tu bedzie lista samochodow + {props.name}
        </h1>
    )
};

export default Cars;
