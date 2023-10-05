import React, { useState } from "react";


function Email(){

    const [emailobj, setEmail] = useState({
        email: ''
    })

    const press = async(e) =>{
        const {name, value} = e.target
        setEmail ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
        console.log(emailobj.email)
    }

    const handleClick = async(e) =>{
        press(e)
        await fetch('http://localhost:5000/', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                email: emailobj.email
            })
        })
        .then(data=> console.log(data))
        .catch(err => {
            console.log("Error: " + err)
        })
        // await fetch('http://localhost:5000/')
        // .then(data => setRepMessage(data))
    }

    return(
        <div className="email">
            <h3 className="Send">SIGN UP FOR OUR DAILY INSIDER:  <input type="email" name="email" className="input" value={emailobj.email} onChange={press} placeholder="Enter your Email" /> <button type="submit" className="BTN" onClick={handleClick}>Subscribe</button></h3>
        </div>
    )
}

export default Email
