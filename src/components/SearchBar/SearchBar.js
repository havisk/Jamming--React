import React, {Component} from 'react';

import './SearchBar.css';




class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermOnChange = this.handleTermOnChange.bind(this);
  }

  search= () => this.props.onSearch(this.props.term);
  handleTermOnChange = event => {
    this.props.term = event.target.value();

  };

  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
               onChange={this.handleTermOnChange}
        />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;