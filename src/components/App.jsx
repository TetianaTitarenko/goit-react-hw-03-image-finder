import { Component } from "react";
import { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class App extends Component {
  state = {
    textSearch: '',
    // showModal: false
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
      background: '#96c7ea',
      color: '#186dc9',
    },
    }} />
      <Searchbar onSearch={this.handleSabmit} />
      <ImageGallery value={this.state.textSearch} />
    </div>
  );
};
}
