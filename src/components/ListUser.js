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
            <figure>
                <img src={user.avatar_url}></img>
            </figure>
            <p>Usuário: {user.name}</p>
            <p>Organização: {user.company}</p>
            <p>Seguidores: {user.followers}</p>
            <p>Lozalização: {user.location}</p>
            <p>Quantidade de Votos: {user.following}</p>
            <p>Repositórios do usuário: {user.following}</p>  

            <ListUserRepo user={user}/>  
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
