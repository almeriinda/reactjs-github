import React, {Component} from 'react';
import './App.css';
import axios  from 'axios';
import Apiitem from './components/Apiitem';


const api={
  baseUrl: "https://api.github.com",
  name_user: "maria"
}

class App extends Component {
  constructor(){
    super();
    this.state={
      githubData: [],
      query: "",
    }
  }

  componentDidMount(){ 
    axios
    .get(
      api.baseUrl +
      "/users/" + 
      api.name_user)
    .then( (res) => {
      console.log("infos da API ", res.data);
      this.setState({githubData: res.data});
    });
  } 

  render(){
    console.log(this.state.githubData)
    const githubData = this.state.githubData;
    return (
      <div className="Container App">
        <div className="row">
          <div className="col-md-12"key={githubData.id}>

            Usuário: {githubData.login}<br/>
            Imagem: {githubData.avatar_url}<br/>
            Organização: {githubData.company}<br/>
            Seguidores: {githubData.followers}<br/>
            Localização: {githubData.location}<br/>
            Quantidade de votos(rates): {githubData.followers}<br/>
          </div> 
        </div>
      </div>
    );
  }
}

export default App;
