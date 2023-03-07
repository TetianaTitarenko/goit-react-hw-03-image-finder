import { Component } from "react";
import { Toaster } from 'react-hot-toast';

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
      <Toaster toastOptions={{
    duration: 1500,
    style: {
      background: '#ceea96',
      color: '#18c92c',
    },
    }} />
      <Searchbar onSearch={this.handleSabmit} />
      <ImageGallery value={this.state.textSearch} />
    </div>
  );
};
}
