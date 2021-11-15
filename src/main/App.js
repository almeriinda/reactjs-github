import React, {Component} from 'react';
import './App.css';
import axios  from 'axios';
import ListUser from '../components/ListUser';

const api={
  baseUrl: "https://api.github.com",
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      data: {},
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
        this.setState(() => {
          return {data: response.data}
        })
      );
  }

  render() {
    const user = {}
    return  (
      <div>
        <br/>
        <input type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Consultar
        </button>
        
        <br/>
        <ListUser user={this.state.data} />
      </div>
    );
  }
}  

export default App;
