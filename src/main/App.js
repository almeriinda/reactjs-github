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
      data: [],
      user: []
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
      searchQuery.toLowerCase())
      .then(response => 
        this.setState({
          data: response.data
        })
      );
  }


  render() {
    console.log(this.state)
    return  (
      <div> 
        <br/>
        <input class="centralizasearch" type="text" placeholder="Buscar Usuário GitHub" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)} required/>
        <button class="btnleft" onClick={this.handleButtonClicked.bind(this)}>
          Consultar
        </button>
        
        <br/>
        <ListUser user={this.state.data} />
      </div>
    );
  }
}  

export default App;
