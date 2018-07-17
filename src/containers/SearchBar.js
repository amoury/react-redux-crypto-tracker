import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrency } from '../actions/index';

class SearchBar extends Component {
  state = {
    term: ''
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value.toUpperCase()});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchCurrency(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter the Crypto Symbol"
              value={this.state.term}
              onChange={this.onInputChange} />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </form>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCurrency: fetchCurrency }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);