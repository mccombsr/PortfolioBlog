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
                    <img src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg" alt="Post Image Thumbnail"/>
                    <h1 className="postTitle">Dummy Post</h1>
                    <p className="postBlurb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea quos asperiores commodi.</p>
                    <aside>
                        <h2 className="postDate">2/12/2019</h2>
                        <h2 className="commentNum">88</h2>
                    </aside>
                </div>
                {/* <p>I'm the bottom!!!</p> */}
            </main>
        )
    }
}