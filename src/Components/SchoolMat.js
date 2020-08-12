import React from 'react';


function SchMat(props) {
    return(
    <div>
        <h3 style = {{color : "violet"}}> Name : {props.product.name} </h3>
        <p> Price : {props.product.price} </p>
        <p> Description : {props.product.desc} </p>
        <hr/>
    </div>
    )


}

export default SchMat;