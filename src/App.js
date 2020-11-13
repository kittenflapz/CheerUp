import "./App.css";
import { Component } from "react";
import SearchPhotos from "./SearchPhotos";
import Footer from "./footer";

class App extends Component {
  render() {
    return (
      <section className="App">
        <div className="container">
          <h1 className="title">Cheer up. Here's some cute stuff.</h1>
          <SearchPhotos />
          <Footer />
        </div>
      </section>
    );
  }
}

export default App;
