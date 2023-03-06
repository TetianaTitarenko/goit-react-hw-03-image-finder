import { Component } from "react";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    textSearch: '',
  }

  handleSabmit=(textSearch)=>{
    this.setState({textSearch})
  }

  render () {
  return (
    <div>
      <Searchbar onSearch={this.handleSabmit} />
      <ImageGallery value={this.state.textSearch} />
    </div>
  );
};
}
