import React, {Component} from 'react';
import './App.css';
import axios  from 'axios';
//import Apiitem from './components/Apiitem';


const api={
  baseUrl: "https://api.github.com",
  name_user: "maria"
}

class App extends Component {
    state = {
      query: "",
      data: [],
      filteredData: []
    };
  
    handleInputChange = event => {
      const query = event.target.value;
  
      this.setState(prevState => {
        console.log(prevState.data.login.toLowerCase().includes(query.toLowerCase()))
        const filteredData = prevState.data.login.toLowerCase().includes(query.toLowerCase());
  
        return {
          query,
          filteredData
        };
      });
    };
  
    getData = () => {
      axios.get( 
        api.baseUrl +
        "/users/" + 
        api.name_user)
        .then(response => response.data)
        .then(data => {
          const { query } = this.state;
          const filteredData = data.login.toLowerCase().includes(query.toLowerCase());
  
          this.setState({
            data,
            filteredData
          });
        });
    };
  
    componentWillMount() {
      this.getData();
    }
  
    render() {
      return (
        <div className="searchForm">
          <form>
            <input
              placeholder="Search for..."
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </form>
          <div>
            {this.state.filteredData}
          </div>
        </div>
      );
    }
  }

export default App;
