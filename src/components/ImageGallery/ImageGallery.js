import { Component } from "react"

import { getImg } from "components/Search/Search"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage"
import { BadRequest } from "components/BadRequest/BadRequest"
import { Loader} from "components/Loader/Loader"
import { WaitWord } from "components/WaitWord/WaitWord"
import { Button } from "components/Button/Button"
import { Modal } from "components/Modal/Modal";

export class ImageGallery extends Component {
state={
    hits: [],
    error: null,
    status: 'idle',
    page: 1,
    showModal: false
}

componentDidUpdate(prevProps, prevState) {
    if(prevProps.value !== this.props.value || prevState.page !== this.state.page){
        this.setState({status: 'pending'})
        getImg(this.props.value, this.state.page)
        .then(response => {
            if (response.ok) {
            return response.json()}
            return Promise.reject(
                new Error('Try again'),
            )})
        .then(imgs => {  
            console.log(imgs.hits)
            if(imgs.hits.length === 0) {return this.setState({status: 'wrong'})}
            // return this.setState({hits: [imgs.hits], status: 'resolved'})
            return this.setState({hits: [...this.state.hits, ...imgs.hits], status: 'resolved'})
        })
        .catch(error => this.setState({error, status: 'rejected'}))
    }
    }

    handleLoad = () => {
        this.setState((prev)=>({page: prev.page +1}))
    }
    toggleModal = () => {
        // console.log('click img')
        this.setState(state => ({showModal: !state.showModal}))
    }
    onBigImg = bigImg =>{
        console.log(bigImg)
    }

    render() {
        const {error, hits, status} = this.state
        
        if (status === 'idle' ) return <WaitWord />

        if (status === 'pending' ) return <Loader />

        if (status === 'rejected' ) return <ErrorMessage error={error} />

        if (status === 'wrong' ) return <BadRequest />

        if (status === 'resolved' ) return (<>
        <ImageGalleryItem imgs={hits} onClick={this.toggleModal}>

          {this.state.showModal && (<Modal onBigImg={this.onBigImg} onClose={this.toggleModal}>
        <button type="button" onClick={this.toggleModal}>
          close
        </button>
        </Modal>)}
        </ImageGalleryItem>
        <Button onClick={this.handleLoad} />
        </>)
}}
