import { Component } from "react"
import { getImg } from "components/Search/Search"
// import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export class ImageGallery extends Component {
state={
    imgs: null
}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.value !== this.props.value){
        console.log(this.props.value)
        getImg(this.props.value)
        .then(response =>response.json())
        .then(imgs => {this.setState({imgs})
    console.log(imgs)})
    }
}

    render() {
return <ul>
{this.state.imgs && this.state.imgs.hits.map(img => {
    return <li key={img.id} className="gallery-item">
    <img src={img.webformatURL} alt="" />
  </li>
//   <ImageGalleryItem img={img} /> 
})}
</ul>}
}