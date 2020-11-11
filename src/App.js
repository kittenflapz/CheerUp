
import './App.css';
import { Component } from "react";
import { render } from '@testing-library/react';
import PhotoContainer from "./PhotoContainer";

class App extends Component
{
  constructor()
  {
    super();
    this.state = 
    { 
      photos: []
    };
  }


componentDidMount()
{
  let uri = 'https://www.reddit.com/r/aww.json'
fetch(uri)
.then((data)=>{
  return data.json();
})
.then((data)=>{
  var imageUrls = [];
  data.data.children.forEach(post=> 
    {
      if (post.data.thumbnail !== 'default'){
   imageUrls.push(post.data.thumbnail)}
  })
  this.setState({photos : imageUrls});
})
}

render()
{
  return (
    <section className="App">
      <div className="App-header">
        <p>
          Some cute images to cheer you up:
        </p>
        <PhotoContainer photos={this.state.photos}/>
        </div>
    </section>
  );
}
}

export default App;
