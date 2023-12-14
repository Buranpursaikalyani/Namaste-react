import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
       

        this.state={
            userInfo:{
               name:"dummy",
               location:"default",
               id:"123333"
            }
        
        }
    }
   
        async componentDidMount(){
            const data=await fetch(" https://api.github.com/users/Buranpursaikalyani");
            const json=await data.json();
            console.log(json);
            this.setState({
               userInfo:json
            })
        }
    render(){
        
        return(
            <div>
                <img src={this.state.userInfo.avatar_url}></img>
                <h1>{this.state.userInfo.name}</h1>
                <h2>{this.state.userInfo.location}</h2>
                <h2>{this.state.userInfo.id}</h2>
                <h3>Contactus:14567890</h3>
            </div>
        
        );
    }
     
}
export default UserClass;