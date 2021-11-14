import React, {Component} from 'react';
import './App.css';
import axios  from 'axios';
import List_User from './components/List_User';

const api={
  baseUrl: "https://api.github.com",
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    }
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;

    axios.get( 
      api.baseUrl +
      "/users/" + 
      searchQuery)
      .then(response => 
       console.log(response.data),
        //this.setState({
        //  data: response.data,
        //})
      );
  }

  render() {
    return  (
      <div>
        <input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Submit
        </button>

        <List_User/>
      </div>
    );
  }
}  

export default App;
