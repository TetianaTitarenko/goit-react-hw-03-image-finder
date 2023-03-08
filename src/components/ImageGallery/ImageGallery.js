import { Component } from "react"

import { getImg } from "components/Search/Search"
// import bootstrap from 'bootstrap'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage"
import { BadRequest } from "components/BadRequest/BadRequest"
import { Loader} from "components/Loader/Loader"
import { WaitWord } from "components/WaitWord/WaitWord"
import { Button } from "components/Button/Button"

export class ImageGallery extends Component {
state={
    imgs: [],
    error: null,
    status: 'idle',
    page: 1,
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
            if(imgs.hits.length === 0) {return this.setState({status: 'wrong'})}
            return this.setState({imgs: [...this.state.imgs, ...imgs.hits], status: 'resolved'})
        })
        .catch(error => this.setState({error, status: 'rejected'}))
    }
    }

    handleLoad = () => {
        this.setState((prev)=>({page:prev.page +1}))
    }

    render() {
        const {error, imgs, status} = this.state

        if (status === 'idle' ) return <WaitWord />

        if (status === 'pending' ) return <Loader />

        if (status === 'rejected' ) return <ErrorMessage error={error} />

        if (status === 'wrong' ) return <BadRequest />

        if (status === 'resolved' ) return (<>
        <ImageGalleryItem imgs={imgs}/>
        <Button onClick={this.handleLoad} />
        </>)
}}
