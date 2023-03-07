import { Component } from "react"
import { getImg } from "components/Search/Search"
// import bootstrap from 'bootstrap'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage"
import { BadRequest } from "components/BadRequest/BadRequest"
import { Loader } from "components/Loader/Loader"
import { WaitWord } from "components/WaitWord/WaitWord"

export class ImageGallery extends Component {
state={
    imgs: null,
    error: null,
    status: 'idle'
}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.value !== this.props.value){
        this.setState({status: 'pending'})
        getImg(this.props.value)
        .then(response => {
            if (response.ok) {
            return response.json()}
            return Promise.reject(
                new Error('Try again'),
            )})
        .then(imgs => {  
            if(imgs.hits.length === 0) {return this.setState({status: 'wrong'})}
            return this.setState({imgs, status: 'resolved'})})
        .catch(error => this.setState({error, status: 'rejected'}))
    }
    }

    render() {
        const {error, imgs, status} = this.state

        if (status === 'idle' ) return <WaitWord />

        if (status === 'pending' ) return <Loader />

        if (status === 'rejected' ) return <ErrorMessage error={error} />

        if (status === 'wrong' ) return <BadRequest />

        if (status === 'resolved' ) return <ImageGalleryItem imgs={imgs.hits}/>
}}