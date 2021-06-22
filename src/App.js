import React from "react";
import "./App.css"
import Card from "./components/cards"

class App extends React.Component {

  state = {
    avatarId:51,
    personName:'Haithem'
  }

  changeAvatar= ()=> {
    this.setState({
      avatarId:61
    })
  }
    changeName=()=>{
      this.setState({
        personName:"Beji"
    })
    }

  render() {  
    return (
      <div className="container">
        <div className="row">
          
       
        <Card name={this.state.personName} job="pilote" avatarId={this.state.avatarId}/>
        <Card name="jegham" job="Nurse" avatarId={53}/>
        <Card name="migalo" job="carpenter"avatarId={51}/>
        
          </div>
          <div class="row">
            <div class="col-md-3">
              <a onClick={this.changeAvatar} className="changeAvatar" href="#">change details</a>
          </div>
         </div>
        </div>
      
    );
  }
}


export default App;
