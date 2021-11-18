import React, {Component} from 'react';
import ListUserRepo from './ListUserRepo';
class ListUser extends Component {  
    
    render() {
      console.log(this.props.user.map(user => {console.log (user)  }))
      if (this.props.user.map(user => user.login !== undefined)){
        return  (
          this.props.user.map(user => 
          <div>
            <br/>
            <table class="centralizar">
            <tr>
            <figure>
                <img class="borderimg" src={user.avatar_url}></img>
            </figure>
            <td>
              <div class="marginleft">
            <p>Usuário: {user.name}</p>
            <p>Organização: {user.company}</p>
            <p>Seguidores: {user.followers}</p>
            <p>Localização: {user.location}</p>
            <p>Quantidade de Votos: {user.following}</p>
            <p>Repositórios do usuário: {user.following}</p> 
            </div>
            </td>
            </tr>
            </table> 
            <div class="centralizar2">
            <h3 class="fontbold">Lista de Repositórios:</h3>
            <br />
            <ListUserRepo user={user}/>  
            </div>
          </div>  
        ));
      }else{
      return  (
        <div>
          Não foi encontrado nenhum usuário do github com este nome!
        </div>
        );
      }
  }
}    

export default ListUser;
