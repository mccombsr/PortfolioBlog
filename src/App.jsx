import React, { Component } from "react";
import Header from "./Components/Header";
import SideDrawer from './Components/SideDrawer';
import Backdrop from './Components/Backdrop';
import PostList from './Components/PostList';
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
    // Logic for opening and closing sideDrawer backdrop
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop clickHandler={this.backdropClickHandler}/>
    }

    return (
      <div className="App">
        <Header toggleDrawer={this.handleSideDrawer}/>
        <SideDrawer show={this.state.sideDrawerOpen}
        toggleDrawer={this.handleSideDrawer}/>
        {backdrop}
        <PostList/>
      </div>
    );
  }
}

export default App;
