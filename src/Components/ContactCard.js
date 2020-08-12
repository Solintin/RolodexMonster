import React from "react";

function ContactCard (prop) {
    return (
       <div className='contact'> 
            <center>
            <img src={prop.contact.imgUrl} alt="img"/> 
            <h3> {prop.contact.name} </h3>
            </center>
            <p>Course : {prop.contact.course} </p>
            <h3>Gender : {prop.contact.gender} </h3>
       </div>

    )
}


export default ContactCard;