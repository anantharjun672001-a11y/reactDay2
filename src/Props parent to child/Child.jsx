//import part
import React from 'react';

const Child = ({b})=> {
    //js part
    let a = 10;
    b=b+5;
    return (
        //html & css part
        <div>
            <h1>Childern Component own value is :{a}</h1>
            <h1>Value of B from parent Component: {b} </h1>
        </div>
    );
};
//export part
export default Child;