import React from 'react';
import GiphysIndex from './giphys_index';

export default class giphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchTerm: e.currentTarget.value} );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    );
  }
}
