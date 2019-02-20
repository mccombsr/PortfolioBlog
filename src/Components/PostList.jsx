import React, {Component} from 'react';

export default class PostList extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(props){
        return(
            <main className='postList'>
                {/* <p>This is the page content!!!</p> */}
                <div className="postThumbnail">
                    <div className="image"></div>
                    <h1 className="postTitle">Dummy Post</h1>
                    {/* The blurb should just be the first 100 characters of the article, this way when the screen size changes it will just limit how much of the opening to the article you will see cutting off the excess with "..." */}
                    <p className="postBlurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea quos asperiores commodi.</p>
                        <h2 className="postDate">2/12/2019</h2>
                        <h2 className="commentNum">88</h2>
                </div>
                {/* <p>I'm the bottom!!!</p> */}
            </main>
        )
    }
}