import React, { Component, Fragment } from "react";

   

export default class AppContent extends Component {

    // to avoid using document.getElementById since elements could be missing
    // use refs, but sparingly
    // constructor(props){
    //     super(props);
    //     this.listRef = React.createRef();
    // }

    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(posts){
        this.props.handlePostChange(posts)
    }

    // using state instead of refs
    // state = {posts: []}  // state was lifted andis set at index.js in parent component


    fetchlist = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            // this.setState({posts: json}); // state was lifted andis set at index.js in parent component

            this.handlePostChange(json) // hmake this state available when lifted with other components of same ancestor

            // console.log(json)
            // let posts = document.getElementById("post-list")

            // gets element with current ref if available, instead of get elemnet ny id,
            // then populates it with items in the ref without needing to loop
            // const posts = this.listRef.current


            // For each not required when you use this.listRef.current
            // json.forEach( function(obj) {
            //     let li = document.createElement("li");
            //     li.appendChild(document.createTextNode(obj.title));
            //     posts.appendChild(li);               
            // });
        })
       }

       clickedItem = (x) => {
            console.log("Clicked ", x)
       }
    render(){
        return (
            <Fragment>
                <div>
                    <h2>Hello World! <br/> My favourite colour is { this.props.favourite_colour }</h2>   
                </div>
                <br />
                <hr />
                <div>
                    <button onClick={this.fetchlist} className="btn btn-blue">Fecth List</button>      
                </div>
                <div>
                    <hr/>
                    {/* <p>post is {this.state.posts.length} items long</p> */}
                    <p>post is {this.props.posts.length} items long</p>

                    {/* <ul id="post-list" ref={this.listRef}> */}
                    <ul>
                        {/* {this.state.posts.map((c) => ( */}
                        {this.props.posts.map((c) => (
                            <li key={c.id}>
                                <a href="#!" onClick={() => this.clickedItem(c.id)}>
                                    {c.title}
                                </a>                           
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        )
    }
}