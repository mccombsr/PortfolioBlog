import React, {Component} from 'react';

export default class Header extends Component{

    render(props){
        console.log(this.props)
        return(
            <header className='headerContainer'>
                <h1 className="headerTitle">CodeComb</h1>
                <nav 
                className="menuIcon"
                onClick={this.props.toggleDrawer}
                >
                    <div className="menuLine"></div>
                    <div className="menuLine"></div>
                    <div className="menuLine"></div>
                </nav>
            </header>
        )
    }
}