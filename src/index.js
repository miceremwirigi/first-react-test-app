import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom/client"
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
// import AppFooter from "./AppFooter";
import AppFooterFunctionalComponent from "./AppFooterFunctionalComponent";
import "./index.css"






class App extends Component {

  // Lifting the state from a component to the nearest common ancestor of components
  // so you can use a state in one component inside another component
  constructor(props){
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = {posts: []};
  }

  handlePostChange(posts){
    this.setState({posts: posts})
  }

  render(){
    const myProps = {
      title: "My Great App",
      subject: "Me Subject",
      favourite_colour: "blue",
    }

    return(
      <div className="app">
        <AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange} /> {/* parsing variables/properies into components */}
        <br /><hr /><br />
        {/* <AppContent {...myProps} handlePostChange={this.handlePostChange} /> posts not shared here because they originate from this component */}
        <AppContent {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange} /> {/* posts not shared here because they originate from this component */}
        <br /><hr /><br />
        {/* <AppFooter /> */}
        <AppFooterFunctionalComponent myProperty="Hello, wirld!" />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);