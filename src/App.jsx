import React, { Component } from "react";
import Header from "./Components/Header";
import SideDrawer from './Components/SideDrawer';
import Backdrop from './Components/Backdrop';
import "./Styles/App.scss";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideDrawerOpen: false
    }
  }

  handleSideDrawer = () => {
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer toggleDrawer={this.handleSideDrawer}/>
      backdrop = <Backdrop clickHandler={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
        <Header toggleDrawer={this.handleSideDrawer}/>
        {sideDrawer}
        {backdrop}
        <main>
          <p>This is the content of the page!!!</p>
        </main>
      </div>
    );
  }
}

export default App;
