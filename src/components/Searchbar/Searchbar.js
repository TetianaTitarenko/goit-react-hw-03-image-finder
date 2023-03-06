import { Component } from "react";

export class Searchbar extends Component{
  state={
    value: ""
  }

  handleChange=({target: {value}}) => {
    this.setState({value})
  }

  handleSabmit=(e)=>{
    e.preventDefault()
    if(this.state.value) {}
    this.props.onSearch(this.state.value)
    this.setState({value: ''})
  }

  render() {
  return (
<header className="searchbar">
  <form onSubmit={this.handleSabmit} className="form">
    <input
      className="input"
      type="text"
      // autocomplete="off"
      // autofocus
      placeholder="Search images and photos"
      value={this.state.value}
      onChange={this.handleChange}
    />
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>
  </form>
</header>)
}
}