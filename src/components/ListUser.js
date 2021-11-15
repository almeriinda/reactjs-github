import React, {Component} from 'react';

class ListUser extends Component {
    
    render() {
        return  (
        <div>
            <br/>
            <figure>
                <img src={this.props.user.avatar_url} alt="Meu Gravatar"></img>
            </figure>
            <p>Usuário: {this.props.user.name}</p>
            <p>Organização: {this.props.user.company}</p>
            <p>Seguidores: {this.props.user.followers}</p>
            <p>Lozalização: {this.props.user.location}</p>
            <p>Quantidade de Votos: {this.props.user.following}</p>
            <p>Repositórios do usuário: {this.props.user.following}</p>
        </div>    
    );
    }
}    

export default ListUser;
