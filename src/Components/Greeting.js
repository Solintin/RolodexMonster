import React from 'react'

function Greeting (){


    let date = new Date();
    let hour = date.getHours();
    let period = "";

    if (hour < 12) {
        period = "Morning"
    } else if (hour >= 12 && hour < 17){
        period = "Afternon";
    }
    else{
        period = "Night";
    }

    
    return(
        <div>
            <h3> Good {period} Sir/ma Hope your day is going Well?  </h3>
        </div>
        );
    
}


export default Greeting;