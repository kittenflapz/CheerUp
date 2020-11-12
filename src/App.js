import "./App.css";
import { Component } from "react";
import SearchPhotos from "./SearchPhotos";

class App extends Component {
  render() {
    return (
      <section className="App">
        <div className="container">
          <h1 className="title"> Cheer up. Here's some cute stuff.</h1>
          <SearchPhotos />
        </div>
      </section>
    );
  }
}

export default App;
