import { useState } from "react"

const User=()=>{
    const [count]=useState(0);
    return(
        
        <div user-card>
            <h1>Count={count}</h1>
            <h1>Name:Saikalyani</h1>
            <h2>Location:Hyderabad</h2>
            <h3>Contactus:14567890</h3>
        </div>
    )
}
export default User;