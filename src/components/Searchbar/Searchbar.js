import { Component } from "react";
import {toast} from 'react-hot-toast';
import css from "components/Searchbar/Searchbar.module.css"


export class Searchbar extends Component{
  state={
    value: ""
  }

  handleChange=({target: {value}}) => {
    this.setState({value})
  }

  handleSabmit=(e)=>{
    e.preventDefault()
    if(!this.state.value.trim()) {
      return toast.error('Please enter your search query');
    }
    this.props.onSearch(this.state.value.trim())
    this.setState({value: ''})
  }

  render() {
  return (
<header className={css.Searchbar}>
  <form onSubmit={this.handleSabmit} className={css.SearchForm}>
    <input
      className={css.SearchFormInput}
      type="text"
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
      value={this.state.value}
      onChange={this.handleChange}
    />
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>
  </form>
</header>)
}
}