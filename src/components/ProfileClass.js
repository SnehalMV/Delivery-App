import React from "react";

class ProfileClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Snehal Manoj Varghese"
    }
  }
  render(){
    return (
      <div className="text-center mt-20">
      <h1 className="p-2">React Class Component for Profile</h1>
      <h2 className="p-2">{this.state.name}</h2>
      </div>
    )
  }
}

export default ProfileClass 