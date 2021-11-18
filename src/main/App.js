import React, {Component} from 'react';
import './App.css';
import ListUser from '../components/ListUser';
import {get_user_by_name} from '../services/Api';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      data: [],
      repo: []
    }
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;

    get_user_by_name(
      searchQuery).then( result => this.setState(() => {
        return {data: result}
      }));
  }

  render() {
    return  (
      <div> 
        <br/>
        <input class="centralizasearch" type="text" placeholder="Buscar Usuário GitHub" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
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
