import React from 'react'
import Header from "./Header";
import SearchInput from "./SearchInput";
import './App.css';

export default class App extends React.Component {
  /*
constructor(props) {
    super(props);
    this.state = {
      filteredBlade: filteredBlade("")
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredBlade: filteredBlade(event.target.value)
    });
  };*/

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
      </div>
    );
  }
}
