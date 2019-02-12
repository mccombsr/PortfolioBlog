import React, {Component} from 'react';

export default class PostList extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(props){
        return(
            <main className='postList'>
                <p>This is the page content!!!</p>
                
                <p>I'm the bottom!!!</p>
            </main>
        )
    }
}